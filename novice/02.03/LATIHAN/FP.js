//# CONTOH PENGGUNAAN FUNCTIONAL PROGRAMMING

// const luasLingkaran = (r)=>{            //membuat fungsi terlebih dahulu 
//     return  r * r;                      //kembalikan nilai dengan memasukkan rumus disini
// }

// document.write(luasLingkaran(7));           //panggil nama variabelnya dan is parameternya

// PERBEDAAN MUTABILITY DAN IMMUTABILITY

//MUTABLE variabel- nilai dapat dirubah

// let mutableNomer = 5;
//  mutableNomer = 10; 

//  // immutable variabel= hasilnya akan error karena penggunaan const untuk menetapkan suatu nilai
//  const immutableNomor = 8;
//  immutableNomor = 2;

 //MUTABLE ARRAY
//  let mutableMakan =["sate","bakso"];
//     mutableMakan.push("mie ayam");

//     console.log(mutableMakan);

// //immutable array ' menggunakan concat dalam ES6
// let immutableMakan = ["sate"];
// let nambahMakan = immutableMakan.concat("soto");    //tambahkan variabel awal kemudian .concat untuk menambah isi

// console.log(immutableMakan);            //isinya tetap sama sate
// console.log(nambahMakan);

//mutable object 

// let mutableHoby = {nama: "Nur Arofah",hobi: "makan"};
// mutableHoby.hobi = "tidur";         //hobinya diganti tidur

// console.log(mutableHoby);

//immutable objek ES5 menggunakan ASSIGN.OBJECT

let immutableHoby = {nama: "Nur Arofah", hobi: "makan"};
let immutableHoby1 = Object.assign({},immutableHoby,{hobi:"tidur"});

console.log(immutableHoby);
console.log(immutableHoby1);

//immutable menggunakan objek ES6

const immutablees6 = {immutableHoby,hobi: "mancing"};           //BELUM BERJALAN

console.log(immutableHoby);
console.log(immutablees6);



