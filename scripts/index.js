import TypeWriter from "./typewriter.js"

const typeWriterText = new TypeWriter(
  document.querySelector(".hascal"),
  100
)

typeWriterText.startTypingEffect()