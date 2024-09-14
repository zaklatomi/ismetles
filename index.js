import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";
const kivalasztottLista = [];
// osszesKutya(kutyaLista);
const tartalomIras = $(".tartalom");
const kivElem = $(".kivalasztottak");

new Kartyak(kutyaLista, tartalomIras);

//melyik kartyara kattintottunk? Az adatait tegyük bele a kivalasztottListaba
//ha el akarunk erni egy privat adattagot: 1. getter az osztalyban és azt a gettert kell meghivni
//problema, hogy a gettert akkor kéne meghivni ha rakettintunk a gombra
//feliratkozunk a sajat esemenyunkre
$(window).on("kivalaszt", (event)=>{
  console.log(event.detail)
  if(!kivalasztottLista.includes(event.detail)){

    kivalasztottLista.push(event.detail)
    new Kartyak(kivalasztottLista, kivElem)

  }
  console.log(kivalasztottLista)
})
