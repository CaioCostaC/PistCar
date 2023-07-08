//Declarar o contexto do canvas
const canvasEl = document.querySelector('canvas');
const canvasCtx = canvasEl.getContext('2d');

//Declaraçoes diversas
const road_height = 400; //Altura da estrada
const road_padding = (window.innerHeight - road_height) / 2; //Padding da estrada

const line_height = 5;
const qtd_line = 5;
const initial_line = 0;
const line_width = 7;
const speed = 0;

//Criação do objeto ESTRADA
/*
 * Este objeto ira conter a função
 * responsavel por criar e exibir a estrada 
 * principal de acordo com as dimenções da tela. 
 */
const road = {
    w: window.innerWidth,
    h: window.innerHeight,
    pD: road_padding ,
    rH: road_height,

    draw: function(){ 
        canvasCtx.fillStyle = "#000"
        canvasCtx.fillRect (
            -10000, this.pD, 1000000000, this.rH
        )
    },
}

const line_padding = 67;

//Criação do objeto LINHA
const line = {
    lH: line_height,
    pD: line_padding,
    iL: initial_line,
    lW: line_width,
    lS: speed,

    draw: function (){
      // Define as propriedades da linha tracejada
      canvasCtx.strokeStyle = '#fff'; // Cor da linha
      canvasCtx.lineWidth = this.lW; // Largura da linha
      canvasCtx.setLineDash([30, 18]); // Define o padrão de traço [comprimento do traço, comprimento do espaço]
      canvasCtx.lineDashOffset = 0 + this.lS; // Define o deslocamento inicial do traço

      // Desenha a linha tracejada
      canvasCtx.beginPath();
      for (let i = 1; i <= 5; i++){
        canvasCtx.moveTo(0, road.pD + i*this.pD); // Ponto inicial da linha (x, y)
        canvasCtx.lineTo(road.w, road.pD + i*this.pD); // Ponto final da linha (x, y)
      }
      canvasCtx.stroke();

      this.lS += 5;

      requestAnimationFrame(draw);
    }
}

function setup(){
    /*
        É necessário definir o tamanho do canvasEl (canvas element) e tambem do canvasCtx (canvas contexto). 
        A fim de proporcionar uma melhor experiência ao usuário, pois isso proporcionará que o campo preencha toda a tela.
    */
        canvasEl.width = canvasCtx.width = road.w; //O (window.innerWidth para capturar a largura da tela).
        canvasEl.height =  canvasCtx.height = road.h; //O (window.innerHeight para capturar a altura da tela).
}

//Chamada de funções
function draw(){
    road.draw();
    line.draw(); 
}

setup();
draw();


console.log("Altura da estrada " + road.rH);
console.log("Padding da linha " + line.pD);
console.log("RecX " + rectX);