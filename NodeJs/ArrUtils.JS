const myStrUtils = require('./StrUtils');

const GetArrLength = (arr) =>
{
    var summ = 0;
    arr.forEach(element => {
        summ += myStrUtils.GetLength(element);
    });
    return summ;
}

module.exports ={
    GetArrLength
}
