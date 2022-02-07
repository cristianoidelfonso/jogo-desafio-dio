function start() {
  $('#inicio').hide();

  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

  
  //Principais variáveis do jogo
  var jogo = {}
  var TECLA = {
      W: 87,
      S: 83,
      D: 68,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    }
  
    jogo.pressionou = [];

  var velocidade = 5;
  var posicaoY = parseInt(Math.random() * 350);
  var podeAtirar = true;

  //Verifica se o usuário pressionou alguma tecla	
	$(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
  });
  
  $(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
  });

  //Game Loop
  jogo.timer = setInterval(loop,30);
  function loop() {
    movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
    moveamigo();
  } // Fim da função loop()
  
  
  //Função que movimenta o fundo do jogo
  function movefundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position",esquerda-1);
  } // fim da função movefundo()


  //Função que movimenta o jogador
  function movejogador() {
	
    // move para cima
    if (jogo.pressionou[TECLA.UP]) {
      let topo = parseInt($('#jogador').css('top'));
      $('#jogador').css('top', topo - 10);

      if (topo <= 0) {		
        $('#jogador').css('top', topo + 10);
      }
    }

    //move para baixo
    if (jogo.pressionou[TECLA.DOWN]) {
      let topo = parseInt($('#jogador').css('top'));
      $('#jogador').css('top', topo + 10);
      
      if(topo >= 435) {
        $('#jogador').css('top', topo - 10);
      }
    }

    //move para esquerda
    if (jogo.pressionou[TECLA.LEFT]) {
      let esquerda = parseInt($('#jogador').css('left'));
      $('#jogador').css('left', esquerda - 10);

      if(esquerda <= 0) {
        $('#jogador').css('left', esquerda + 10);
      }
    }

    // move para direita
    if(jogo.pressionou[TECLA.RIGHT]) {
      let esquerda = parseInt($('#jogador').css('left'));
      $('#jogador').css('left', esquerda + 10);

      if(esquerda >= 650) {
        $('#jogador').css('left', esquerda - 10);
      }
    }
    
    
    if (jogo.pressionou[TECLA.D]) {
      
      //Chama função Disparo	
      disparo();
    }
  
  } // fim da função movejogador()


  // função que move o inimigo 1
  function moveinimigo1() {

    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left",posicaoX-velocidade);
    $("#inimigo1").css("top",posicaoY);
      
    if (posicaoX <= 0) {
      posicaoY = parseInt(Math.random() * 350);
      $("#inimigo1").css("left",720);
      $("#inimigo1").css("top",posicaoY);
        
    }
  } //Fim da função moveinimigo1()


  // função que move o inimigo 2
  function moveinimigo2() {
    posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left",posicaoX - 3);
    
    if (posicaoX <= 0) {
      $("#inimigo2").css("left",775);
    }
  } // Fim da função moveinimigo2()


  // função que move o inimigo 3
  function moveamigo() {
	
    posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left",posicaoX + 1);
          
    if (posicaoX > 906) {
      $("#amigo").css("left",0);    
    }
  
  } // fim da função moveamigo()


  // função do disparo
  function disparo() {
	
    if (podeAtirar === true) {
      
      podeAtirar = false;
    
      topo = parseInt($("#jogador").css("top"))
      posicaoX= parseInt($("#jogador").css("left"))
      tiroX = posicaoX + 190;
      topoTiro = topo + 37;
      $('#fundoGame').append("<div id='disparo'></div");
      $('#disparo').css('top',topoTiro);
      $('#disparo').css('left',tiroX);
      
      var tempoDisparo = window.setInterval(executaDisparo, 30);
    
    } //Fecha podeAtirar
  
   
    function executaDisparo() {
      posicaoX = parseInt($('#disparo').css('left'));
      $('#disparo').css('left',posicaoX + 15); 
    
      if (posicaoX > 900) {    
        window.clearInterval(tempoDisparo);
        tempoDisparo = null;
        $('#disparo').remove();
        podeAtirar = true;        
      }
    } // Fecha executaDisparo()
  } // Fecha disparo()
    


} // fim da função start()