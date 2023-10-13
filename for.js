/*for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 400; i <= 500; i+= 10) {
    console.log(i);
}

for (let i = 500; i >= 300; i-= 10) {
    console.log(i);
}*/

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}