let startBtn = document.getElementById("start");
// // 点击按钮，就执行一次函数，申请一块内存
// var arr = [];
startBtn.addEventListener("click", function() {
	var a = new Array(100000).fill(1);
	var b = new Array(20000).fill(1);
    // arr.push(b);
    console.log(1)
});
startBtn = null

// var t = null;
// var replaceThing = function() {
//   var o = t
//   var unused = function() {
//     if (o) {
//       console.log("hi")
//     }        
//   }
 
//   t = {
//     longStr: new Array(100000).fill('*'),
//     someMethod: function() {
//       console.log(1)
//     }
//   }
// }
// setInterval(replaceThing, 1000)
