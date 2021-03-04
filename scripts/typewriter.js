// the typewriter text
// prints text letter by letter

class TypeWriter {
  constructor(textElement, speed){
    // the text element which has this effect
    this.textElement = textElement

    // the text inside the text element
    this.text = this.textElement.innerHTML

    // how slow the typewriting effect should
    // be
    this.speed = speed
    this.index = 0

    // clear the text element 
    // so that we can play the
    // typewriter
    this.clearTextElement(this.textElement)

    // console.log(this.text)
  }

  // start the typing effect
  startTypingEffect = () => {
    // if the index is less
    // than the length of the text
    // add the text[index] to the textElement

    // increment the index by 1
    // after the specified timeout repeat the 
    // process 
    if(this.index < this.text.length){
      this.textElement.innerHTML += this.text[this.index]

      this.index++
      setTimeout(this.startTypingEffect, this.speed)
    }
  }

  // clearing out textElement.innerHTML 
  clearTextElement = (textElement) => {
    textElement.innerHTML = ""
  } 
}

// exporting the typewriter
export default TypeWriter;