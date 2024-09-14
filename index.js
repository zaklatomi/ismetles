import { kutyaLista } from "./adatok.js";
import Kartyak from "./Kartyak.js";


// osszesKutya(kutyaLista);
const tartalomIras = $(".tartalom");

new Kartyak(kutyaLista,tartalomIras)