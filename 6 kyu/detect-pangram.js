function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let x = string.match(/[A-Z]/gi).join('').toLowerCase();
    let y = Array.from(new Set(x)).sort().join('');
    let result = y === alphabet ? true : false;
    return result;
};