const cursor = document.getElementById("cursor");
let mouseX = 0, mouseY = 0; 
let currentX = 0, currentY = 0; 
const delay = 0.15; 

document.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * delay;
  currentY += (mouseY - currentY) * delay;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}

animate(); // 애니메이션 시작