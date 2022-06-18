function test(num) {
    const array = [2, 3, 4, 5];
    for(let i = 0; i < array.length; i++){
        if(num % array[i] === 0){
            console.log(array[i]);
        }
    }
    
}
test(300);