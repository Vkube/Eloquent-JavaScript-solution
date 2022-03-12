"use strict";

// Earlier in the chapter, we saw an example program that drew a pie chart. Modify this program so that the name of each category is shown next to the slice that represents it. Try to find a pleasing-looking way to automatically position this text that would work for other data sets as well. You may assume that categories are big enough to leave ample room for their labels.

// You might need Math.sin and Math.cos again, which are described in Chapter14

// <!doctype html>
// <script src="code/chapter/16_game.js"></script>
// <script src="code/levels.js"></script>
// <script src="code/chapter/17_canvas.js"></script>

// <canvas width="600" height="300"></canvas>
// <script>
//   let cx = document.querySelector("canvas").getContext("2d");
//   let total = results
//     .reduce((sum, {count}) => sum + count, 0);
//   let currentAngle = -0.5 * Math.PI;
//   let centerX = 300, centerY = 150;

//   // Add code to draw the slice labels in this loop.
//   for (let result of results) {
//     let sliceAngle = (result.count / total) * 2 * Math.PI;
//     cx.beginPath();
//     cx.arc(centerX, centerY, 100,
//            currentAngle, currentAngle + sliceAngle);
//     currentAngle += sliceAngle;
//     cx.lineTo(centerX, centerY);
//     cx.fillStyle = result.color;
//     cx.fill();
//   }
// </script>
