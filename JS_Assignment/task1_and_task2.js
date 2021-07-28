/*
Given below is the speech to text output of a Call center conversation, in the paragraph
format

//Task 1:- Extract the sentences from this paragraph and display only those which contain more than 3 words in it, along with the sentence
number. 


Inputstring : `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

*/
var inputstring = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

var sentence = inputstring.split(".");

//console.log(sentence[3].split(" ").length)

var answer = [];

for(var i=0; i<sentence.length; i++){

    var newsentence = sentence[i].replace(/[,?!/s]/g, '');
    var finalsentence = newsentence.trim();
    if(finalsentence.split(" ").length > 3)
    {
        answer.push(sentence[i]+'.');
    }
}

//console.log(answer);

var finalanswer={};

for(var i=0; i<answer.length; i++){
    finalanswer = finalanswer + `${i+1}: ${answer[i]}\n`;
}

console.log(finalanswer);


//console.log(sentence);

for(var i=0; i<answer.length; i++){
    finalanswer = finalanswer + `${i+1}: ${answer[i].replace(/\d/g,"X")}\n`;
}

console.log(finalanswer);

//End of Task 1 


//Task 2
const qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};
let arr = [];
for (let team in qTeams) {
    arr.push([team, qTeams[team]]);
}
arr.sort((a,b) => b[1]-a[1]); 
console.log(arr); 

//End of Task 2
