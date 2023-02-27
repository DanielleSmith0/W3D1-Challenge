//loop through vowels and count them, then count string index total, if number of vowels is higher, true.

// let vowels = "a, A, e, E, i, I, o, O, u, U";

// const hasMoreVowels = ((word) => {
//     for(i = 0; i < word.length; i++) {
//         let vowelCount = word.filter(vowels).length;
//     }
//     let vowelCount = vowelCount.toString
//     if(vowelCount.length >= word.length/2){
//         return true;
//     }else{
//         return false;
//     }
// });

// hasMoreVowels("carrot");

//Answer Walkthrough:

function hasMoreVowels(word) {
    //create two variables that keep track of how many vowels
    //and how many non-vowels there are in "word"
    let vowelCount = 0
    let nonVowelCount = 0

    //to make my if statements easier, I'm going to lowercase the "word"
    word = word.toLowerCase()

    // loop through each letter
    for (let i = 0; i < word.length; i++) {
        // if it is a vowel (a, e, i, o, u) then increment the vowel count
        // if it is not a vowel, then increment the non-vowel count
        if (
            word[i] === 'a' ||
            word[i] === 'e' ||
            word[i] === 'i' ||
            word[i] === 'o' ||
            word[i] === 'u'
        ) {
            vowelCount++
        } else {
            nonVowelCount++
        }
    }

    //after we are done looking at all of the letters,
    //compare the count
    //if there are more vowels than non-vowels, return true
    //else, return false
    if (vowelCount > nonVowelCount) {
        return true
    } else {
        return false
    }
}

console.log(hasMoreVowels('helloo'))