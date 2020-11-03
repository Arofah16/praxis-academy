// //cara membuat objek pada javascript
// // 1. OBJEK LITERAL
// let mahasiswa = {
//     nama: "NUR AROFAH",
//     nilai: 80,
//     remidi: function (tambahNilai){
//         this.nilai = this.nilai + tambahNilai;
//         document.write(`selamat ${this.nama}, nilai anda sudah bertambah` );

//     }
// };

// 2.MENGGUNAKAN FUNCTION DECLARATION
function Mahasiswa(nama,nilai){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nilai = nilai;
    mahasiswa.remidi = function (tambahNilai){
        this.nilai += tambahNilai;
        console.log(`selamat ${this.nama}, nilai anda bertambah`);

    }

    return mahasiswa;
}
let arofah = Mahasiswa("Nur Arofah",85);

3. Menggunakan konstraktor function

function Mahasiswa(nama,nilai){
  
    this.nama = nama;
    this.nilai = nilai;

    this.remidi = function (tambahNilai){
        this.nilai += tambahNilai;
        console.log(`selamat ${this.nama}, nilai anda bertambah`);

    }
    let name = new Mahasiswa ("arofah", 78);
 
}


   


