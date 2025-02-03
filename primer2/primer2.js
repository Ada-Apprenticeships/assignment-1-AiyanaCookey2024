function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1){
    if (numPlayers <= 0 || cardsPerPlayer <= 0) {
        throw new Error("Number of players and cards per player must be positive integers.");
    }
    const totalCardsAvailable = 52 * numDecks;
    if(numPlayers * cardsPerPlayer > totalCardsAvailable) {
        throw new Error("Requested cards exceed the deck size.");
    }

// Create a deck of cards
let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = ["Ace", "King", "Queen", "Jack",
                "2", "3", "4", "5", "6", "7",
                "8", "9", "10"];
let deck = []; //representing the entire deck of cards

// Creating the deck
    for (let i = 0; i < numDecks; i++) { //looping through the number of decks
        for (let suit of suits) {
            for(let value of values) {
                deck.push(`${value} of ${suit}`);
            }   
        }
    }

//Going through the last card to the first card in the deck - using the Fischer-Yates Shuffle
    for (let i = deck.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1)); 
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

// Deal the cards to the players
let hands = [];
    for (let i = 0; i < numPlayers; i++) {
    hands.push(deck.splice(0, cardsPerPlayer));
    }
    return hands;
}

export default shuffleAndDeal;

