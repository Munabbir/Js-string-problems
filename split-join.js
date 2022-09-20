var lyrics = 'Tumi bondhu kala pakhi. amijano ki. bosonto kale tomay bolteparini.'
var parts = lyrics.split(' ');
var sentence = lyrics.split('.')
var chars = lyrics.split('')
// console.log(chars);

var partial = lyrics.slice(8, 15);
console.log(partial);

var partial2 = lyrics.substring(8, 15);
console.log(partial2)


var line = [
    'Tumi bondhu kala pakhi',
    ' amijano ki',
    ' bosonto kale tomay bolteparini',
    ''
]
var newSong = line.join(' ; ')  
console.log(newSong);