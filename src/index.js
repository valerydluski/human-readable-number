module.exports = function toReadable (number) {
    let result = '';
    let arr0_10 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    if(number>=0 && number<=10){
        result = arr0_10[number]
        return result;
    }

}
