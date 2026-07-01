let cachedVoice = null;
let voicesLoaded = false;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    cachedVoice = voices.find(v =>
      /samantha|karen|daniel|google us|google uk|microsoft zira|microsoft david/i.test(v.name)
      && /en/i.test(v.lang)
    ) || voices.find(v => /en.US/i.test(v.lang) && v.localService)
      || voices.find(v => /en/i.test(v.lang));
    voicesLoaded = true;
  }
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

export function speak(text) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  if (!voicesLoaded) loadVoices();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.85;
  u.pitch = 1.0;
  if (cachedVoice) u.voice = cachedVoice;
  window.speechSynthesis.speak(u);
}
