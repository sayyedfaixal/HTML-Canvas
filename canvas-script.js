window.onload = function () {
  var canvas = document.getElementById("animations-canvas");
  var context = canvas.getContext("2d");

  var ballX = 100;
  var ballY = 100;
  var ballRadius = 30;
  var ballColor = "orange";
  var changeX = 4;
  var changeY = 4;
  window.requestAnimationFrame(animateLoop);
  function animateLoop() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);

    ballX += changeX;
    ballY += changeY;
    drawBall(ballX, ballY, ballRadius, ballColor);
    if (ballY + ballRadius > canvas.height) {
      changeY *= -1;
    }
    if (ballX + ballRadius > canvas.width) {
      changeX *= -1;
    }
    if (ballY - ballRadius < 0) {
      changeY *= -1;
    }
    if (ballX - ballRadius < 0) {
      changeX *= -1;
    }
    window.requestAnimationFrame(animateLoop);
  }

  function drawBall(x, y, r, c) {
    var radian = Math.PI / 180;
    context.beginPath();
    context.fillStyle = c;
    context.strokeStyle = c;
    context.arc(x, y, r, 0, 360 * radian, false);
    context.stroke();
    context.fill();
  }
};

window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
