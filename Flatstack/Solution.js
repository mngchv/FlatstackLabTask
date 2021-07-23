
    let number = 1;
    for(let i = 0; i < 7 ; ++i ) {

        console.log(number);
        number = calculateNextNumber(number);


}
function calculateNextNumber(number) {
    let digit = 0;
    let newNumber = 0;
    let multiplier = 1;

    while(number > 0) {
        let count = 0;
        do {
            digit = number%10;
            number = Math.floor(number/10);
            count++;
        } while(digit===number%10);
        newNumber=newNumber+(count*10+digit)*multiplier;
        multiplier*=100;
    }
    return newNumber;
}