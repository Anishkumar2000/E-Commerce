function fun1() {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((one) => {
    var box = one.getAttribute("id");
    if (box == "formal") {
      var ak = document.querySelectorAll("#" + box);
      ak.forEach((one) => {
        one.classList.add("b");
      //   one.classList.remove("ak");
        //   one.classList.remove("a");
      });
    } else {
      var kk = document.querySelectorAll("#" + box);
      kk.forEach((two) => {
        two.classList.add("a");
        two.classList.remove("b");
      });
    }
  });
}
function fun2() {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((one) => {
    var box = one.getAttribute("id");
    if (box == "pants") {
      var ak = document.querySelectorAll("#" + box);
      ak.forEach((one) => {
        one.classList.add("b");
        // one.classList.remove("a");
      });
    } else {
      var kk = document.querySelectorAll("#" + box);
      kk.forEach((two) => {
        two.classList.add("a");
        two.classList.remove("b");
      });
    }
  });
}
function fun3() {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((one) => {
    var box = one.getAttribute("id");
    if (box == "tshirts") {
      var ak = document.querySelectorAll("#" + box);
      ak.forEach((one) => {
        one.classList.add("b");
      });
    } else {
      var kk = document.querySelectorAll("#" + box);
      kk.forEach((two) => {
        two.classList.add("a");
        two.classList.remove("b");
      });
    }
  });
}
function fun4() {
  var boxes = document.querySelectorAll(".box");
  boxes.forEach((one) => {
    var box = one.getAttribute("id");
    if (box == "tshirts") {
      var ak = document.querySelectorAll("#" + box);
      ak.forEach((one) => {
        one.classList.add("b");
      });
    }
   else {
      var kk = document.querySelectorAll("#" + box);
      kk.forEach((two) => {
        two.classList.add("b");
        //   two.classList.remove("b");
      });
    }
  });

 var rev = document.querySelectorAll(".ak");
  setTimeout(ak, 100);
  function ak() {
    rev.forEach((val) => {
      val.classList.remove("b");
      // console.log(val);
    });

  //   rev.classList.remove("b");
}
}
  var rev = document.querySelectorAll(".ak");
  setTimeout(ak, 100);
  function ak() {
    rev.forEach((val) => {
      val.classList.add("a");
      // console.log(val);
    });
  }

