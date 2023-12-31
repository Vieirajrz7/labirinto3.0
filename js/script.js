function gameOverDir(img) {
    document.getElementById("imgSusto").style.display = 'block';
    document.getElementById("reset").style.display = 'block';
    document.getElementById("ganhou").style.display = 'none';
}

function gameOverEsq(img) {
    document.getElementById("imgSusto").style.display = 'block';
    document.getElementById("reset").style.display = 'block';
    document.getElementById("ganhou").style.display = 'none';
}

function susto(audio) {
    let x = document.getElementById("susto");
    x.onplay();
}

function ganhou() {
    document.getElementById("ladoDireito").style.display = 'none';
    document.getElementById("ladoEsquerdo").style.display = 'none';
    document.getElementById("reset").style.display = 'block';
    document.getElementById("txtGanhou").style.display = 'block';
    document.getElementById("ganhou").style.display = 'none';
}

function comecar() {
    document.getElementById("tudo").style.display = 'block';
    document.getElementById("menu").style.display = 'none';
}