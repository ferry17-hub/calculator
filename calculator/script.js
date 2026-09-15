let layar = document.getElementById('display');

function munculDiDisplay(nilai) {
    layar.value = layar.value + nilai;
}

function hapusHasil() {
    layar.value = "";
}

function hasil() {
    let hasilHitung = eval(layar.value);
    layar.value = hasilHitung;
}
