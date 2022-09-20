// function reverseString(text){
//     for(let i = 0; i< text.length; i++){
//         var element = text[i];
//         console.log(element);
//     }
// }
// var myString = 'I am a good boy'
// var reversed = reverseString(myString);


function reverseString(text){
    for(let i = text.length-1; i >= 0; i--){
        var element = text[i];
        console.log(element);
    }
}
var myString = 'I am a good boy'
var reversed = reverseString(myString);