<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Smashing HTML5!</title>

<!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lte IE 7]>
  <script src="js/IE8.js" type="text/javascript"></script><![endif]-->

<!--[if lt IE 7]>
  <link rel="stylesheet" type="text/css" media="all" href="css/ie6.css"/><![endif]-->
</head>

<body id="index" class="home">

<canvas id="myCanvas" height=200 width=200 style="border:1px solid #000000;"></canvas>

<script>
  // set up initial variables
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(100,0);
  ctx.lineTo(100,200);
  ctx.stroke();

function drawCircle(x){
  ctx.beginPath();
  ctx.arc(x,100,10,0,2*Math.PI);
  ctx.fillStyle="red";
  ctx.fill();
}
var x = 0;
setInterval(function(){
  ctx.clearRect(0,0,200,200);
  drawCircle(x%200);
  x++;
}, 25);
</script>

</body>
</html>
