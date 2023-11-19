var timer;
var contador;
function clock() {
  let timer = 0;
  contador = setInterval(function () {
    timer++;
    document.getElementById("timer").innerHTML = timer
      .toString()
      .padStart(3, "0");
  }, 1000);
}
  var valid = 1;
  var contadorNum;

function radar(){
  let log = [];
  let bombs = document.getElementsByClassName("bomb");
  for(let cont = 0; cont < bombs.length; cont++ ){
    log[cont] = (parseInt(bombs[cont].id));

  }
  
  const logArea = {
    blocoTop : log[cont] - 12,
    blocoTopDireita: log[cont] - 11,
    blocoDireita: log[cont] + 1,
    blocoBaixoDireita: log[cont] + 13,
    blocoBaixo: log[cont] + 12,
    blocoBaixoEsquerda: log[cont] + 11,
    blocoEsquerda: log[cont] - 1,
    blocoTopEsquerda: log[cont] - 13


  }
}
function block(status, log) {
  
  if (valid === 1) {
    let img = document.getElementById(log);
    if (status === "safe") {
      console.log("safe");
      console.log(log);
      img.src = "block_safe.png";
    } else {
      document.getElementById('smileBtn').style.backgroundImage ='url(dead.png)';
      let bombs = document.getElementsByClassName("bomb");
      for (let i = 0; i < bombs.length; i++) {
       bombs[i].src = "bombs.png";
      }
      img.src = "bombRed.png";
      stop();
      valid = 0;
      console.log(valid);
    }
  }else {
       console.log('break');
  }
}
function stop() {
  clearInterval(contador);
}
function reset(){
       window.location.reload();
       
}
function clickreset(){
      document.getElementById('smileBtn').style = 'filter:brightness(80%)'
}
