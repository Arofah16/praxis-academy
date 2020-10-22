// function kalikan(a,b){                  //metode callback
//     return a * b;
// }
// function hitungLuas(sisi){
//     return kalikan(sisi,sisi);
// }
// function cetakLuasKotak(sisi){
//     const Luas = hitungLuas(sisi);
//     console.log(Luas);
// }

// cetakLuasKotak(6);

// menuliskan program sebaris
// function prosesData(){
//     let data = fetchData();
//     data += 1;
//     return data;
// }

// penggunaan Callback sebagai injeksi sebuah function (paling sederhana)

function hitung(a,b){           //membuat fungsi baru dengan diisi parameter
    hasil = a + b;              // menentukan perhitungan
    return hasil                //mengembalikan nilai
}
console.log(hitung(15,10));         //memanggil nama fungsi serta diisi dengan nilainya

function hitung(a,b,callback){
    //operasi default
    hasil = a + b
}

    //memanggil sebuAH FUNCTION
    if (typeof callback =="function"){
        hasil = callback(a,b)
    }
    return hasil

    //pengerjaan
    x = hitung(25000,12000,function(a,b){return"$"+(a+b)}) 
    y = hitung(5000,2000,function(a,b){return"Rp"+(a*b)})

    console.log(a);
    console.log(b);


