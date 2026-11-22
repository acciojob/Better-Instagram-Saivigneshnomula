
let draggedDiv = null;

for (let i = 1; i <= 6; i++) {
  let div = document.getElementById("div" + i);

  div.addEventListener("dragstart", function () {
    draggedDiv = this;
  });

  div.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  div.addEventListener("drop", function (event) {
    event.preventDefault();

    // Do nothing if dropped on itself
    if (draggedDiv === null || draggedDiv === this) {
      draggedDiv = null;
      return;
    }

    // Swap the complete content of both divs
    let temp = draggedDiv.innerHTML;
    draggedDiv.innerHTML = this.innerHTML;
    this.innerHTML = temp;

    // Swap background images
    let tempImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = tempImage;

    draggedDiv = null;
  });

  div.addEventListener("dragend", function () {
    draggedDiv = null;
  });
}
