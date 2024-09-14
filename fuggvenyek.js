
export function cimKiiras(cim) {
  // a header h1 tagjébe fűzzük hozzá a cimet
  //megfogjuk a h1 taget
  //const h1Elem = document.querySelector("header h1") js
  const h1Elem = $("header"); //jq

  // console.log(h1Elem);

  // h1Elem.innerHTML +="<p>"+cim+"</p>"; js
  h1Elem.append(`<p>${cim}</p>`); //jq
}

//készits függvényt amivel kutya1 adatait irhatjuk ki a tartalom nevu classba divbe legyen a név, h3as cimber a kor p, nem p tagben

export function kutyaKiiras(kutya1) {
  const tartalomIras = $(".tartalom");
  tartalomIras.html(
    `<h3>${kutya1.nev}</h3>` + `<p>${kutya1.kor}</p>` + `<p>${kutya1.nem}</p>`
  );
}
export function osszesKutya(kutyaLista) {
    const tartalomIras = $(".tartalom");
    for (let i = 0; i < kutyaLista.length; i++) {
        const element = kutyaLista[i];
        
    tartalomIras.append(
      `<div class="col-lg-4 col-md-6 card">
      <div class ="card-body">
        <h3 class ="card-title">${element.nev}</h3>
        <p class ="card-text">${element.kor}</p>
        <p class = "card-text">${element.nem}</p>
        <button class = "kivalaszt btn btn-success">Kiválaszt</button>
        </div>
        </div>`
        
    );
  }
}
