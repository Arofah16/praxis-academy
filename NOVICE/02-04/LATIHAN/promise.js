//promise adalah sebuah objek baru yang digunakan untuk menyederhanakan proses callback
//ketika melakukan reques asyncronus dalam promise ada 3 ketentuan
// a. pending, request sedag diproses
// b. fullfied , reques berhasil
// c. rejected , request gagal
// const janjian = new Promise((resolve, reject)=>{
//     if (false){
//         resolve("BENAR");       //apabila berhasil
//     }else{                  
//         reject("SALAH");        //error atau janjian dibatalkan
//     }

// });
//     janjian
//         .then((value)=>{
//             console.log(value);
//         })
//         .catch((error)=>{
//             console.log(error);
//         });


//pomise adalah sebuah objek yang mereprsentasikan antara gagal dan sukses dari sebuah event yang asyncronus dimasa yang akan datang
// janji (terpenuhi/ingkar)
//states(fulfied/rejected/pending)
// callback(resolved/reject/finally)
// aksi (then(apabila terpenuhi), catch(apabila tidak terpenuhi))     
// let ditepati = true;
// const janjian = new Promise((resolve, reject)=>{        //membuat objek khusus promise
//     if(ditepati){
//         resolve("janji anda ditepati");
//     }else{
//         reject("kamu inkar janji");
//     }
// });
// janjian
//     .then(respon => console.log("oke : "+ respon) )  //menangkap apabila resolve dijalankan
//     .catch(data => console.log("is not okee"+ respon)) //dijalankan untuk menampilkan reject

    // contoh 2
let ditepati = true;
const janji1 = new Promise((resolve, reject)=>{
    if(ditepati){
        setTimeout(() => {
            resolve("tidak ditepati setelah beberapa saat");
        },2000);
    }
});
console.log("mulai");
// console.log(janji1.then(()=> console.log(janji1)));
janji1
    .finally(() => console.log("selesai menunggu")) //digunakan setelah 2 respon dibawah telah selesai
    .then(respon => console.log("oke : "+ respon) )  //menangkap apabila resolve dijalankan
    .catch(data => console.log("is not okee"+ respon)) //dijalankan untuk menampilkan reject

console.log("selesai");