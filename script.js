var index = 0
 
function changeColors() {
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"]

    document.getElementsByTagName("body")[0].style.background = colors[index++]

    if(index > 5)
    index = 0
}