//your code here

let draggedDiv = null;

for (let i = 1; i <= 6; i++) {
  let div = document.getElementById("div" + i);
  div.draggable = true;
  div.addEventListener("dragstart", function () {
    draggedDiv = this;
  });

  // Allow dropping
  div.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  div.addEventListener("drop", function (event) {
    event.preventDefault();

    if (draggedDiv === this) return;

    let temp = document.createElement("div");

    this.parentNode.insertBefore(temp, this);
    draggedDiv.parentNode.insertBefore(this, draggedDiv);
    temp.parentNode.insertBefore(draggedDiv, temp);

    temp.remove();
  });
}
