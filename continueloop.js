for (i = 1 ; i <= 10 ; i++) {
    if (i % 3 === 0) {
        continue;  
                                       // used to skip one round
    }
    console.log(i);
}

console.log("break loop");

for (i = 1 ; i < 10 ; i++) {
    console.log(i);
    if (i % 3 === 0) {
        break;
    }
}
