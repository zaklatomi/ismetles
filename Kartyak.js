import Kartya from "./Kartya.js"

export default class Kartyak{

    #lista = []
    constructor(lista, szuloElem){
        this.#lista = lista
        this.szuloElem = szuloElem

        this.#kartyakKiir()
    }

    #kartyakKiir(){

        this.#lista.forEach((kutya) => {
            //kutyaIrasCard(kutya)
            new Kartya(kutya, this.szuloElem)
          })
          
    }
}