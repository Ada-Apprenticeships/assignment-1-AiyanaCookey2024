// TODO: Implement the createLinkedList function

function createLinkedList(posts) {

// Check if input 'posts' is valid
  if (!Array.isArray(posts) || posts.length === 0) {
    return null; // Return null if input is invalid 
  }


// Validate the structure of each post
for (const post of posts) {
  if (!post.text ||
    typeof post.text !== 'string' || 
    post.text.trim() === ''|| //Ensure 'text' is a string and not empty
    (typeof post.timestamp !== 'string' && typeof post.timestamp !== 'number') || //Ensure 'timestamp' is valid (string or number)
    new Date (post.timestamp).toString() === 'Invalid Date' || // Check if timestamp is valid
    typeof post.author !== 'string' || post.author.trim() === '' // Ensure non-empty string for author
  ) {
  throw new Error('Invalid post structure'); // Throw an error if any post has an invalid
}
}

// Create the head of the linked list
//Iterate through each post in the 'posts' array
const head = {data: posts[0], next: null};  
let current = head;
for (let i = 1; i < posts.length; i++) {
  current.next = { data: posts[i], next: null};
  current = current.next;
 
}
return head;
}

// const posts = ([
//   { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
//   { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
//   { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
// ]);

// // const searchTerm = 'great';
// const linkedList = createLinkedList(posts);

// console.log(linkedList);


// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  if (!feed || !keyword || typeof keyword !== 'string') {
   return []; // Return an empty array if the feed is empty or the keyword is invalid
  }

  const results = [];
  let current = feed;
  const normalisedKeyword = keyword.toLowerCase(); // Normalise the key for case-insenstive search and splitting into individual words
  const keywordWords = normalisedKeyword.split(/\s+/); // Split the keyword into individual words

  
  while (current) {
    const normalisedText = current.data.text.toLowerCase();
    const textWords = normalisedText.split(/\s+/);
    const hasPartialMatch = keywordWords.some((keywordWord) => textWords.some((textWord) => textWord.includes(keywordWord)));
    if (hasPartialMatch){
      results.push(current.data);
    }
    current = current.next;
  }
  return results;
}

  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results
  // TODO: Traverse the linked list
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results


// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.


export {createLinkedList, searchSocialMediaFeed};
