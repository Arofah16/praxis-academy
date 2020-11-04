class MultiplicatorUnitFailure extends Error {}
function perkalian(a,b){
    if(Math.random()<0.2){
        return a*b;
    }else{
        throw new MultiplicatorUnitFailure("benar");
    }
}

function perkalian1(a,b){
    for(;;){
        try {
            return perkalian(a,b);
        } catch (error) {
            console.log(error);
        }
    }
}
console.log(perkalian1(8,8));