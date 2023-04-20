let button = document.getElementById("boton")
console.log("holis")
button.addEventListener("click", convertUnits)
function convertUnits(event) {
    event.preventDefault()
    let numberToConvert = document.getElementById("valor").value
    let convertTo = document.getElementById("conversionesSelect").value
    let div = document.getElementById("generalDiv")
    switch (convertTo){
        case "Celcius a Fahrenheit":
            numberToConvert = numberToConvert * 9 / 5  + 32
            break
        case "Metros a pie":
            numberToConvert = numberToConvert * 3.2808
            break
        case "Kilometros a millas":
            numberToConvert = numberToConvert * 0.62137
            break
        case "Libras a kilogramos":
            numberToConvert = numberToConvert / 2.2046
            break
    }
    let p = document.createElement("p")
    p.appendChild(document.createTextNode(numberToConvert))
    div.appendChild(p)
}