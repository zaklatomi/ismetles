import { cimKiiras, kutyaKiiras, osszesKutya } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";


let nev = "Dézi";
const cim = "Kutyák minden mennyiségben";

//objektumonkat hozunk lérte összetett adatszerkezet esetén
//egyetlen kutya adata
const kutya1 = {
  nev: "Floki",
  kor: 12,
  nem: "hím",
};

const kutya2 = {
  nev: "Dézi",
  kor: 2,
  nem: "nőstény",
};

kutya1.nev = "Armi";

console.log("1. kutya:", kutya1);
console.log("cim:", cim);

//lista csak azonos tipusu adatok
const nevLista = ["Dézi", "Jenő", "Béla"];
const szamLista = [4, 32, 34];

nevLista[0] = "Blöki";

console.log("lista", nevLista);

cimKiiras(cim);
// kutyaKiiras(kutya1);
osszesKutya(kutyaLista);

//eseménykezelő a gombokra
const gombElem = $(".kivalaszt")
gombElem.on("click",(event)=>{
    console.log(event.target) // az az elem amelyik kiváltotta az eseményt
})
