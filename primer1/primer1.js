function temperatureConversion(temperature, fromScale, toScale){
    try{
        if (typeof temperature === null || temperature === undefined || temperature === 'string' && isNaN(Number(temperature))){
           throw new Error("Invalid temperature input");//checking the temp is valid
        }

        //the Scales have to be converted to UpperCase
        fromScale = fromScale.UpperCase(); 
        toScale = toScale.UpperCase();

    } catch(error) {
        console.error("An error occured:", error.message);
        return null; //This will return nul if there is an error in the message
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




export default temperatureConversion;




