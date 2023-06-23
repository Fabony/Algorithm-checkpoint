// The length of the sentence (the number of characters).

let hour = "At this checkpoint, you are 'asked' to write an algorithm, that read a sentence, which ends with a point." 

 let meter = hour.length
 console.log(meter);


 
// The number of words in the sentence (assuming that the words are separated by a single space).

 let word = hour.split(" ");
 console.log(word);
 console.log(word.length);




 // The number of vowels in the sentence.

function vowel(str) { 

    // find the count of vowels
    let count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    console.log(count);
}
vowel(hour)
