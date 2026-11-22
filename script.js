
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

    if (draggedDiv === null || draggedDiv === this) {
      return;
    }

    let parent = document.getElementById("parent");

    let draggedIndex = Array.from(parent.children).indexOf(draggedDiv);
    let targetIndex = Array.from(parent.children).indexOf(this);

    if (draggedIndex < targetIndex) {
      parent.insertBefore(draggedDiv, this.nextSibling);
    } else {
      parent.insertBefore(draggedDiv, this);
    }

    draggedDiv = null;
  });
}
