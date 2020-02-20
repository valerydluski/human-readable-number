module.exports = function toReadable (number) {
    let result = '';
    let arr0_9 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    if(number>=0 && number<=10){
        result = arr0_10[number];
        return result;
    }
    let arr10_19 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    if(number>9 && number<20){
        let ostatok=number%10;
        result = arr10_19[ostatok];
        return result;
    }
}
