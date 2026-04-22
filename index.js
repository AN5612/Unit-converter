/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversionBtn = document.getElementById("conversion-btn")
const conversionNum = document.getElementById("conversion-num")
const text = document.getElementById("div2")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

conversionBtn.addEventListener("click", function(){
    const value = Number(conversionNum.value)
    let conversionitems = ""
    conversionitems = ` 
    
          <div id="div2">
            <div id="length">
                <h3 id="length-1">Length (Meter/Feet)</h3>
                <p id="length-2"> ${value} meters = ${metertofeet(value)} feet | ${value} feet = ${feettometer(value)} meters</p>
            </div>
            <div id="volume">
                <h3 id="volume-1">volume (Liter/Gallons)</h3>
                <p id="volume-2"> ${value} liters = ${litertogallon(value)} gallons | ${value} gallons = ${gallontoliter(value)} liters</p>
            </div>
            <div id="mass">
                <h3 id="mass-1">Mass (Kilograms/Pounds)</h3>
                <p id="mass-2"> ${value} kilos = ${kilogramtopound(value)} pounds | ${value} pounds = ${poundtokilogram(value)} Kilos</p>
            </div>
        </div>  `
          
    text.innerHTML = conversionitems 
    
})
/* ------ Old function -----------
function unitConversion() {
   let unitc = ""
   unitc = Number(convertionNum.value)
   return unitc
}
   */
    

// volume funtions
function litertogallon(value) {
    return (value * liter).toFixed(3)
}

function gallontoliter(value) {
    return (value / liter).toFixed(3)   
}

// weight functions
function kilogramtopound(value) {
    return (value * kilogram).toFixed(3)
}

function poundtokilogram(value) {
    return (value / kilogram).toFixed(3)
}

// length functions 
function metertofeet(value) {
    return (value * meter).toFixed(3) 
}

function feettometer(value) {
    return (value / meter).toFixed(3)
}


