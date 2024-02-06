/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 05 2024
    Sources: Given code for original insertion sort
*/

function insertionSortReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array);
        var compVal = array[i];
        var j; // To avoid instantiating multiple j iterator variables
        for (j = i; j < array.length - 1 && array[j+1] < compVal; j++) {
            console.log("j value: " + array[j] + " and i: " + array[i]);
            array[j] = array[j+1];
        }
        array[j] = compVal;
    }
    return array;
}
