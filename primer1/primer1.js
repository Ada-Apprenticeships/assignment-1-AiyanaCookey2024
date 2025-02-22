// Helper functions to help with Celsius, Fahrenheit and Kelvin conversions
// From Celsius to Fahrenheit 
function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

// From Fahrenheit to Celsius 
function toCelsius(fahrenheit){
    return (fahrenheit -32) * 5 / 9;
}

// From Celsius to Kelvin 
function toKelvinCelsius(celsius){
    return celsius + 273.15;
}

// From Fahrenheit to Kelvin 
function toKelvinFahrenheit(fahrenheit){
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// From Kelvin to Celsius 
function toCelsiusKelvin(kelvin){
    return kelvin - 273.15;
}

// From Kelvin to Fahrenheit 
function toFahrenheitKelvin(kelvin){
    return (kelvin - 273.15) * 9 / 5 + 32;
}


function temperatureConversion(temperature, fromScale, toScale){
    try{
        if (temperature === null || temperature === undefined || (typeof temperature === 'string' && isNaN(Number(temperature)))){
           throw new Error(`Invalid temperature: ${temperature}. Please enter valid number.`);// Checking the temp is valid
        }

        // The Scales have to be converted to UpperCase
        // Check if fromScale & toScale are valid 
        const validScales = ['C', 'F', 'K'];
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
        } else if(fromScale === 'C' && toScale === 'K'){
            convertedTemperature = toKelvinCelsius(temperature);
        } else if (fromScale === 'K' && toScale ==='C'){
            convertedTemperature = toCelsiusKelvin(temperature);
        } else if(fromScale === 'F' && toScale === 'K'){
            convertedTemperature = toKelvinFahrenheit(temperature);
        } else if (fromScale === 'K' && toScale ==='F'){
            convertedTemperature = toFahrenheitKelvin(temperature);
        } else {
            convertedTemperature = temperature; //If there is no conversion needed it will stay the same
        }

        
        
        return convertedTemperature;

        } catch(error) {
            console.error("An error occured:", error.message);
            throw error ; // This will re-throw the error to be handled again elsewhere
            }

        }

export default temperatureConversion;




