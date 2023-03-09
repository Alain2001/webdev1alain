const setup = () => {

    let btnHerbereken = document.getElementsByClassName('btnHerbereken')[0];
    btnHerbereken.addEventListener("click", update);
    update();
}

const update =() => {

    let txtPrijs = document.getElementsByClassName('prijs');
    let txtAantal = document.getElementsByClassName('aantal');
    let txtBtw = document.getElementsByClassName('btw');
    let txtSubtotaal = document.getElementsByClassName('subtotaal');
    let txtTotaal = document.getElementsByClassName('totaal')[0];

    let totaal = 0;

    for (let i = 0; i < txtSubtotaal.length; i++) {

        let aantal = parseFloat(txtAantal[i].value);

        let btw = parseFloat(txtBtw[i].innerHTML);
        let prijs = parseFloat(txtPrijs[i].innerHTML);
        let subtotaal = aantal * prijs * (1 + (btw / 100));
        totaal = subtotaal + totaal;

        txtSubtotaal[i].innerHTML = subtotaal.toFixed(2) + " Eur";
    }

    txtTotaal.innerHTML = totaal.toFixed(2)+" Eur";


}



window.addEventListener("load", setup);



