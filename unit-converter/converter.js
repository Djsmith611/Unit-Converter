//setting reference to the conversion button to add event listener
let convertButton = document.getElementById('convert');
//setting reference to the input field to add event listener
let inputField = document.getElementById('inputValue');
function convert(){//function to preform conversion math, collect needed information from the HTML form and output information on the DOM
    const inputValue = parseFloat(document.getElementById('inputValue').value);//parsefloat to set the string as a number for conversion purposes
    const fromUnit = document.getElementById('fromUnit').value;//collect unit names from the form
    const toUnit = document.getElementById('toUnit').value;
    const valueInMeters = inputValue * getConversionToMeters(fromUnit);//using meters as a base conversion unit
    const convertedValue = valueInMeters/getConversionToMeters(toUnit); //convert both units to meters to calculate the conversion between units
    document.getElementById('outputValue').textContent = convertedValue.toFixed(2);//set the output text as the result up to the hundreths place
}
function getConversionToMeters(unit){//function to store all unit conversion metrics. converting all to meters to create a baseline and prevent additional functions
  const conversionToMeters = { 
    //metric
    kilometers:1000,
    meters:1,
    decimeters:0.1,
    centimeters:0.01,
    millimeters:0.001,
    micrometers:0.000001,
    nanometers:0.000000001,
    //imperial
    miles:1609.34,
    yards:0.9144,
    feet:0.3048,
    inches:0.0254,
    nauticalMiles:1852,
    furlongs:201.168,
    chains:20.1168,
    rods:5.0292,
    };
    return conversionToMeters[unit]; //will output needed conversion rates to the convert function
}
//adding event listener to trigger convert()
convertButton.addEventListener('click', convert);
//adding event listener to trigger convert() on Enter
inputField.addEventListener('keypress', function(event){
    if (event.key === 'Enter' || event.keycode === 13){
        event.preventDefault();//prevent form submission
        convert()
    }
});