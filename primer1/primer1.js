// helper functions to help with Celsius, Fahrenheit and Kelvin conversions
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function toCelsius(fahrenheit){
    return (fahrenheit -32) * 5 / 9;
}

function toKelvin(kelvin){
    
}


function temperatureConversion(temperature, fromScale, toScale){
    try{
        if (temperature === null || temperature === undefined || (typeof temperature === 'string' && isNaN(Number(temperature)))){
           throw new Error("Invalid temperature input");//checking the temp is valid
        }

        // The Scales have to be converted to UpperCase
        // Check if fromScale & toScale are valid 
        const validScales = ['C', 'F'];
        fromScale = fromScale.toUpperCase();
        toScale = toScale.toUpperCase();

        if(!validScales.includes(fromScale) || !validScales.includes(toScale)){
            throw new Error("Invalid conversion type or input scale");
        }

        temperature = Number(temperature);

        let convertedTemperature;
        if(fromScale === 'C' && toScale === 'F'){
            convertedTemperature = toFahrenheit(temperature);
        } else if (fromScale === 'F' && toScale ==='C'){
            convertedTemperature = toCelsius(temperature);
        } else {
            convertedTemperature = temperature;
        }
        
        
        return convertedTemperature;
        //return {temperature, fromScale, toScale, convertedTemperature}

        } catch(error) {
            console.error("An error occured:", error.message);
            throw error ; //This will re-throw the error to be handled again elsewhere
            }

// TODO: Validate the input:
//        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
//        - Convert the temperature to a number.
//        - Normalise fromScale and toScale to uppercase.
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".

// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
//        
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.


}


//console.log(temperatureConversion(32, 'C', 'F'));
// console.log(temperatureConversion(0, 'C', 'X'));
//console.log(temperatureConversion(0, 'C', 'X'));
//console.log(temperatureConversion('abc', 'C', 'F'));
//console.log(temperatureConversion(null, 'C', 'F'));
//console.log(temperatureConversion(undefined, 'C', 'F'));






export default temperatureConversion;




