var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')


var post1 = {
    x:0,
    y:0
}

var post2 = {
    x:0,
    y:0
}

var isDrawing = false
var colorPaint = '#000'
var size = 10
sizeEl.innerText = size
document.addEventListener('mousedown', function(e) {
     post1 = {
        x:e.offsetX,
        y: e.offsetY
     }
     isDrawing = true
})

document.addEventListener('mousemove', function(e) {
    if(isDrawing) {
        post2 = {
            x:e.offsetX,
            y: e.offsetY
         }
         ctx.beginPath()
         ctx.arc(post1.x,post1.y,20,0,2*Math.PI)
         ctx.fillStyle = colorPaint
         ctx.fill()

         ctx.beginPath()
         ctx.moveTo(post1.x,post1.y)
         ctx.lineTo(post2.x,post2.y)
         ctx.strokeStyle = colorPaint
         ctx.lineWidth = size * 2
         ctx.stroke()

         post1.x = post2.x
         post1.y = post2.y
    }
})

document.addEventListener('mouseup', function(e) {
    isDrawing = false
})

color.addEventListener('change', function(e) {
    colorPaint = e.target.value
})

eraser.addEventListener('click', function() {
    colorPaint = '#ffffff'
})

decrease.addEventListener('click', function() {
    size -= 5
    size = size > 5 ? size : 5
    sizeEl.innerText  = size
})

increase.addEventListener('click', function() {
    size += 5
    size = size < 30 ? size : 30
    sizeEl.innerText  = size
})

clear.addEventListener('click', function() {
    var canvasStats = canvas.getClientRects()[0]
    ctx.clearRect(0,0,canvasStats.width, canvasStats.height)
})

save.addEventListener('click', function() {
  var output =   canvas.toDataURL('image/png');
  save.setAttribute('href', output)
})
