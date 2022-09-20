function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        if(element > largest){
            largest + element;
        }
    }
    return largest;
}
var hight = [167, 190, 120, 165, 137];
var tallest = maxInArray(hight);
console.log(tallest);