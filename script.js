
let draggedDiv = null;

for (let i = 1; i <= 6; i++) {
  let div = document.getElementById("id" + i);

  div.draggable = true;

  div.addEventListener("dragstart", function () {
    draggedDiv = this;
  });

  div.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  div.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedDiv === this || draggedDiv === null) return;

    // Get both background images
    let temp = this.style.backgroundImage;

    this.style.backgroundImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = temp;

    draggedDiv = null;
  });
}
