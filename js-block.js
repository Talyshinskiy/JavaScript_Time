import JS_IMAGE from '../../assets/js.png'


export class JSBlock {
    #container

    constructor(){
        this.#container = document.createElement('div')
        this.#container.className = 'js-block'
    }
    render() {
        /// создаем title для заголовка - рендерим текст
        const mainTitle = document.createElement('h1')
        mainTitle.className = 'main-title'
        mainTitle.textContent = 'JavaScript'
        // создаем блок для img
        const JSImageHTML = document.createElement('img')
        JSImageHTML.className = 'js-image'
        JSImageHTML.src = JS_IMAGE

        const foundedText = document.createElement('p')
        foundedText.textContent = 'Since the inception of JavaScript has passed'
        foundedText.className = 'founded-text'

        this.#container.append(mainTitle, JSImageHTML, foundedText)

        return this.#container
    }   
}