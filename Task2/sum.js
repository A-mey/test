function sum(a) {
    const initialValue = 0;
    const sumWithInitial = a.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumWithInitial;
}

module.exports = {sum}