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
    }
  
  } // fim da função movejogador()

} // fim da função start()