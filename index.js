let layar = document.getElementById('layar');
let inputcolumn = document.getElementById('inputcolumn');
let selectcolumn = document.getElementById('selectcolomn');

function change() {
    let val = selectcolumn.value;
    let inputval = inputcolumn.value;

    switch (val) {
        case "Bcolor":
            layar.style.backgroundColor = inputval;
            break;
        case "Tcolor":
            layar.style.color = inputval;
            break;
        case "Fsize":
            layar.style.fontSize = inputval+"px";
            break;
        case "Ftype":
            layar.style.fontFamily = inputval;
            break;
    }
}