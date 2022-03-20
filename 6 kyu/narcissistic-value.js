function narcissistic(value) {
    let x = String(value).split('');
    let y = String(value).split('').map((e) => e ** x.length).reduce((prev, next) => prev + next);
    let result = y === value ? true : false;
    return result;
};