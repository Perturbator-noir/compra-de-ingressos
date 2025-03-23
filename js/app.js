function comprar(){
  let ingresso = document.getElementById ('tipo-ingresso');
  let qtd = parseInt(document.getElementById ('qtd').value);
 
  if(ingresso.value == 'pista'){
   comprarPista(qtd);
}else if (ingresso.value == 'superior'){
    comprarSuperior(qtd);
}else {
    comprarInferior(qtd);
}

}
function comprarPista(qtd) {

  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  if(qtd > qtdPista){
    alert ('quantidade indisponível')
}else{
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert ('compra realizada')
}

}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert ('quantidade indisponível')
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('compra realizada')
    }

}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert ('quantidade indisponível')
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('compra realizada')
    }

}