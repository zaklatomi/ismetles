export default class Kartya {
  #kutya = {}; //privát adattag

  constructor(kutya, szuloElem) {
    /*inicializálja az adattagokat*/
    this.#kutya = kutya;
    this.szuloElem = szuloElem;
    this.kutyaKiiras();
    this.gombElem = $(".kivalaszt:last");
    this.#esemenyKezelo();
  }

  //eseménykezelő a gombokra
  #esemenyKezelo() {
    this.gombElem.on("click", (event) => {
      console.log(this);
      const e=new CustomEvent("kivalaszt", {detail:this.#kutya})
      window.dispatchEvent(e)
      
      // az az elem amelyik kiváltotta az eseményt
      // nyil fuggveny, funciton kozotti kulonbseg  AZ AZ HOGY hogy a this nyilfuggveny eseten a konkret osztalypeldanyra mutat, function nevtelen fuggveny eseeten pedig arra a html elemre amelyik kivaltotta az esemenyt

    });
  }

  //   tagfüggvény
  kutyaKiiras() {
    this.szuloElem.append(
      //   `<h3>${this.#kutya.nev}</h3>` + `<p>${this.#kutya.kor}</p>` + `<p>${this.#kutya.nem}</p>`
      `<div class="col-lg-4 col-md-6 card"> 
                        <div class="card-body">
                            <h3 class="card-title"> ${this.#kutya.nev}</h3> 
                            <p class="card-text"> ${this.#kutya.kor} </p> 
                            <p class="card-text"> ${this.#kutya.nem} </p> 
                            <button class="kivalaszt btn btn-success">Kivalaszt</button>
                    </div>`
    );
  }
}
