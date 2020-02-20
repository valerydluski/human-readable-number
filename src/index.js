module.exports = function toReadable (number) {
    let result = '';
    let arr0_9 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    if(number>=0 && number<10){
        result = arr0_9[number];
        return result;
    }
    let arr10_19 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    if(number>9 && number<20){
        let ostatok=number%10;
        result = arr10_19[ostatok];
        return result;
    }
    let arr3 = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    if(number>19 && number<100){
        let ostatok = number%10;
        let decade = Math.floor(number/10);
        if (ostatok==0){
            result = arr3[decade];
            return result;
        }
        if (ostatok>0){
            result = arr3[decade] + ' ' + arr0_9[ostatok];
            return result; 
        }
    }
    if (number>99 && number<1000){
        let hundred =  Math.floor(number/100);
        let ostatokHundred = number%100;
        let decade = Math.floor(ostatokHundred/10);
        let ostatok = ostatokHundred%10;
 
        if (ostatokHundred==0){
             result = arr0_9[hundred] + ' hundred';
             return result;
        }
        if(ostatokHundred>0 && ostatokHundred<10) {
             result = arr0_9[hundred] + ' hundred ' + arr0_9[ostatokHundred];
             return result;  
        }
        if(ostatokHundred>9 && ostatokHundred<20){
         let ostatok=ostatokHundred%10;
         result = arr0_9[hundred] + ' hundred ' + arr10_19[ostatok];
         return result;
        }
        if(ostatokHundred>19 && ostatokHundred<100){
         if (ostatok==0){
             result = arr0_9[hundred] + ' hundred ' + arr3[decade];
             return result;
         }
         if (ostatok>0){
             result = arr0_9[hundred] + ' hundred ' + arr3[decade] + ' ' + arr0_9[ostatok];
             return result;  
         }
         }     
     }
    
}
