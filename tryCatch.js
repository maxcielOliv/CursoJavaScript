function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
     {
        throw new ReferenceError('X e Y precisam ser numeros');
    }
    return x + y;
}

try {
    console.log(soma(2,3));
    console.log(soma('5',5));
} catch(error) {
    console.log(error);
}