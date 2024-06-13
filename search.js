function check() {
  var searchbox = document.querySelector("#ser").value;
  var searchbox1 = document.querySelector("#ser");
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((one) => {
    // console.log(one);
    var box = one.getAttribute("id");
    var check = box.startsWith(searchbox);
    // console.log(check);
    // console.log(box);
    if (check) {
      searchbox1.setAttribute("placeholder", box);
    }
  });
  // console.log(searchbox);
}

// var searchbox = document.querySelector("#ser");

// searchbox.addEventListener("input", (invalue) => {
//    var inval = invalue.data;

//    //  console.log(inval);

//    var boxes = document.querySelectorAll(".box");
//    boxes.forEach((one) => {
//       var box = one.getAttribute("id");

//        var check = box.startsWith(inval);
//        if (check) {
//          // console.log("yes");
//          searchbox.setAttribute("placeholder",box)
//          // console.log(box);
//          // var ak = document.querySelectorAll("#"+box);
//          // ak.forEach((one) => {
//          //    one.classList.add("b");
//          // });
//        }
//        else{
//          // var kk = document.querySelectorAll("#"+box);
//          // kk.forEach((two) => {
//          //    two.classList.add("a");
//          //    two.classList.remove("b");
//          // })
//        }
//    });

// });

// var text = ["anish","raja","deva","chinarasu"];
// text.forEach((txt) => {
//     var check = txt.startsWith("a");
//     if (check) {
//       console.log(txt);
//     }
//     else{
//       console.log("kkkkk");
//     }
// });
