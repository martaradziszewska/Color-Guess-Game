var squares = document.querySelectorAll(".square");
console.log(squares);


var colorDisplay = document.querySelector("#color-display");


function pickColor() {
	var mainColor = document.querySelector(".main-color");
	for (var i = 0; i < squares.length; i++) {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		squares[i].style.backgroundColor = "#" + randomColor;
		var randomSquare = squares[Math.floor(Math.random() * squares.length)];
		mainColor.style.backgroundColor = "#" + randomColor;
		mainColor.style.backgroundColor = randomSquare.style.backgroundColor;
		colorDisplay.innerText = mainColor.style.backgroundColor;
		squares[i].addEventListener("click", function () {
			if (this.style.backgroundColor === mainColor.style.backgroundColor) {
				pickColor();
			} else {
				this.classList.add("test");
			}
		});
	}
}
pickColor();





// other solutions - TESTS
// for(var i=0; i<squares.length; i++) {
//     squares[i].addEventListener("click", pickColor);
// }
//
// function pickColor() {
//     var mainColor = document.querySelector(".main-color");
//     var colorDisplay = document.querySelector("#color-display");
//     for(var i=0; i<squares.length; i++) {
//         var randomColor = Math.floor(Math.random()*16777215).toString(16),
//             randomSquare = squares[Math.floor(Math.random()*squares.length)];
//         squares[i].style.backgroundColor = "#" + randomColor;
//         mainColor.style.backgroundColor = randomColor;
//         mainColor.style.backgroundColor = randomSquare.style.backgroundColor;
//         colorDisplay.innerText = mainColor.style.backgroundColor;
//     }
//     if(this.style.backgroundColor === mainColor.style.backgroundColor) {
//         console.log("Ok");
//     }else {
//         console.log("No");
//     }
// }
//
// pickColor();

//

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// var mainColor = document.querySelector(".main-color");
// var colorDisplay = document.querySelector("#color-display");
//
//
// function pickSquareColor() {
//     for(var i=0; i<squares.length; i++) {
//         var randomColor = Math.floor(Math.random()*16777215).toString(16);
//         squares[i].style.backgroundColor = "#" + randomColor;
//     }
//     pickMainColor();
//     guessColor();
// }
//
//
//
// function pickMainColor () {
//     var randomSquare = squares[Math.floor(Math.random()*squares.length)];
//     mainColor.style.backgroundColor = randomSquare.style.backgroundColor;
//     colorDisplay.innerText = mainColor.style.backgroundColor;
// }
//
//
// function guessColor () {
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].addEventListener("click", function () {
//             if (this.style.backgroundColor === mainColor.style.backgroundColor) {
//                 pickSquareColor();
//             } else {
//                 // console.log("NO");
//                 this.classList.add("test");
//             }
//         });
//     }
//
// }
// pickSquareColor();