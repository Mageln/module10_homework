let inputValue = prompt("Напиши число");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Это число четное");
    } else {
        console.log("Это число нечетное");
    }
} else {
    console.log(" «Упс, кажется, вы ошиблись».");
}
