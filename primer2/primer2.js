
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.

// const numPlayers = 4;
// const cardsPerPlayer = 5;
// const shuffleAndDeal = ()

//this function will go through the deck of cards which is 52, which will use a loop and continue until the last card of the deck 
//math.random generates a random no. between 0 and 1
//math.floor rounds the number to the nearest whole number

let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = ["Ace", "King", "Queen", "Jack",
                "2", "3", "4", "5", "6", "7",
                "8", "9", "10"];
let deck = []; //representing the entire deck of cards

// Building the deck - this will combine every suit with every value 
function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks){
    for (let suit in suits){
        for(let value in values){
            deck.push(`${value} of ${suit}`);
        }

    for(let i =deck.length -1)
        let shuffle = Math.floor(Math.randon()* (desk.length));


    }
}

// TODO: Create a standard 52-card deck (or 104 if numDecks is 2).

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer.
//       -  cardsPerPlayer should be a positive integer.
//       -  Throw an error if the requested cards exceed the deck size.

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness.

// TODO: Deal cards to the specified number of players.

// TODO: Return the hands dealt as an array of arrays.

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.


export default shuffleAndDeal;

