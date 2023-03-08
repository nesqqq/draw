window.addEventListener("load", () => {

  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach( item => {
      item.addEventListener('click', function() {
          const color = this.id;
          context.strokeStyle = color;
      })
  })

})
// получаем доступ к canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// изменение размера canvas в зависимости от размера окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// установка начальных настроек
context.strokeStyle = '#000';
context.lineWidth = 5;
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false; // флаг рисования

// функция для рисования линии
function drawLine(event) {
  if (!isDrawing) return;
  context.lineTo(event.clientX, event.clientY);
  context.stroke();
}

// обработка событий
canvas.addEventListener('mousedown', function(event) {
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  canvas.addEventListener('mousemove', onMouseMove);
});

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', onMouseMove);
  context.stroke();
});

function onMouseMove(event) {
  context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  context.stroke();
}



