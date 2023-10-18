/**
 * @param {string[]} strs
 * @return {string[][]}

Logic:
"eat"
{
    e: 1
    a: 1
    t: 1
    words: []
}
{
    b: 1
    a: 1
    t: 1
    words: []
}
{
    t: 1
    n: 1
    a: 1
    words: []
}


empty array to hold possible anagrams

loop through strs
    the first word 
        loop through first word
            have a object 
            make the key the letter
            make the value the how many times it shows up
    
    if the object does not exist on the array
        push it on

 */
var groupAnagrams = function (strs) {
    // let anagrams = [];

    // for (let word of strs) {
    //     let newAnagram = {};
    //     for (let i = 0; i < word.length; i++) {
    //         newAnagram[word[i]] = (newAnagram[word[i]] || 0) + 1;

    //     }
    //     newAnagram.word = []
    //     anagrams.push(newAnagram)


    // }


    // console.log(anagrams);
    const anagramGroups = {};

    for (let word of strs) {
        // Create a sorted string of the characters in the word as a unique key
        const sortedWord = word.split('').sort().join('');
        console.log('sorted word', sortedWord)

        // Check if the key exists in the object, if not, initialize it as an empty array
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }

        // Add the word to the group identified by the sorted key
        anagramGroups[sortedWord].push(word);
    }

    // Convert the object values to an array
    const result = Object.values(anagramGroups);

    return result;
};