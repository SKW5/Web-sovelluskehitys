const points1 = prompt("Give x1 and y1 cordinates (x1,y1)")
const points2 = prompt("Give x2 and y2 cordinates (x2,y2)")

const [x1, y1] = points1.split(",").map(Number)
const [x2, y2] = points2.split(",").map(Number)

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
document.getElementById("result").innerHTML = `${distance} km`