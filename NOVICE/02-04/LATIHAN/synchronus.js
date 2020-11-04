// // function kalikan(a,b){                  //metode callback
// //     return a * b;
// // }
// // function hitungLuas(sisi){
// //     return kalikan(sisi,sisi);
// // }
// // function cetakLuasKotak(sisi){
// //     const Luas = hitungLuas(sisi);
// //     console.log(Luas);
// // }

// // cetakLuasKotak(6);

// // menuliskan program sebaris
// // function prosesData(){
// //     let data = fetchData();
// //     data += 1;
// //     return data;
// // }

// // penggunaan Callback sebagai injeksi sebuah function (paling sederhana)

// // function hitung(a,b){           //membuat fungsi baru dengan diisi parameter
// //     hasil = a + b;              // menentukan perhitungan
// //     return hasil                //mengembalikan nilai
// // }
// // console.log(hitung(15,10));         //memanggil nama fungsi serta diisi dengan nilainya

//         // function hitung(a,b,callBack){              //membuat fungsi , didalamnya diberikan parameter dan callBack
//         // console.log(a,b)                   //menampilkan parameter yang dimasukkan kedalam parameter
//         // callBack()                           //memanggil callBack
//         // }
//         //                                     //memanggil sebuAH FUNCTION BARU
//         // function callbacku(){
//         //     console.log("halo Arofah");         //MENGISI FUNGSI BARU
//         // }   

//         // console.log(hitung(5,6,callbacku));                 //MENGISI PARAMETER DITAMBAHKAN NAMA FUNGSI BARU

//        //latihan
//         // function siswa (nama,alamat, callBack){
//         //     console.log(nama,alamat)
//         //     callBack()
//         // }

//         // function panggil(){
//         //     console.log("selamat datang di aturan callback pada javascript");
//         // }

//         // console.log(siswa("Arofah","purworejo",panggil));

//         function hitung(x,y,callback){
//             hasil = x+y        
//         }
//         //mengecek apakah callback adalah sebuah fungsi
        
//         // if(typeof callback == "function"){
//         //     hasil = callback(x,y)
       
//         //     return hasil;
//         // }
//         // a = hitung(20000,30000,function(x,y){return "$" + (x+y)});
//         // b = hitung(21000,30500,function(x,y){return "Rp" + (x+y)});
        
//         // console.log(a);
//         // console.log(b);
//         console.log("ini nomer 1")
//A. MENGGUNAKAN CALLBACK

        function A(){                   //1. MEMBUAT FUNGSI BARU
            console.log("A SELESAI");
        }
        function B(){
            //menggunakan setTimeout untuk menunda eksekusi asyncronus
            setTimeout(             //2. MENAMBAHKAN SETTIMEOUT UNTUK MENUNDA FUNGSI DIEKSEKUSI
                function(){
                    console.log("B SELESAI");
                },100
            )
        }
        function C(){                   //MENAMBAHKAN LAGI FUNGSI PIHAK KETIGA
            console.log("C SELESAI");
        }
        A()
        B()
        C()







