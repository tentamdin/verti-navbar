// get all element from menu

const allItems = document.querySelectorAll(".navmenu ul li a");
const allTable = document.querySelectorAll(".pageContent div");

console.log("all item ", allItems, allTable);

allItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < allItems.length; i++) {
      console.log("get id on click", allItems[i].id);
      allItems[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});

// document.body.onscroll(() => {
//   console.log("scrolling");
//   if (document.getElementById("force").getBoundingClientRect().top <= 0) {
//     console.log("bootom vlaue");
//     document.body.onscroll = "";
//     alert("The tag just came into view");
//   }
// });

function myFunction() {
  console.log(
    "top value",
    document.getElementById("force").getBoundingClientRect().top,
    "bottom value",
    document.getElementById("force").getBoundingClientRect().bottom
  );
  for (let i = 0; i < allTable.length; i++) {
    if (
      document.getElementById(allTable[i].id).getBoundingClientRect().top <=
        20 ||
      document.getElementById(allTable[i].id).getBoundingClientRect().bottom <=
        20
    ) {
      allItems[i + 1].classList.add("active");
      allItems[i].classList.remove("active");
      allItems[i + 2].classList.remove("active");
    }
  }
}
