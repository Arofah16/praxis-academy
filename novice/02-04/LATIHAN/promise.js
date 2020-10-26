//promise adalah sebuah objek baru yang digunakan untuk menyederhanakan proses callback
//ketika melakukan reques asyncronus dalam promise ada 3 ketentuan
// a. pending, request sedag diproses
// b. fullfied , reques berhasil
// c. rejected , request gagal
const janjian = new Promise((resolve, reject)=>{
    if (true){
        resolve("BENAR");       //apabila berhasil
    }else{                  
        reject("SALAH");        //error atau janjian dibatalkan
    }

});
    janjian
        .then((value)=>{
            console.log(value);
        })
        .catch((error)=>{
            console.log(error);
        });