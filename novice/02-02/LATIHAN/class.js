// function botol(warna,ukuran,harga,jenis){           //apabila dibuat menggunakan fungsi
//     this.warna = warna,
//     this.ukuran = ukuran,
//     this.harga = harga,
//     this.jenis = jenis,
//     // this.deskripsi = function(){
//     //     return this.warna+" "+this.ukuran;
//     // }

//     //apabila menggunakan prototype

//     botol.prototype.deskripsi()= function(){
//         return this.warna+" "+this.ukuran;

//     }
// }

// let botol1 = new botol("merah","medium",40000);
// let botol2 = new botol ("biru", "big",65000);

// // botol2.jenis = "kaca"

// console.log(botol1);
// console.log(botol2);

// //apabila dibuat menggunakan kelas atau class

// class botol {
//     constructor(warna, ukuran,harga,jenis){
//         this.warna = warna;
//         this.ukuran = ukuran;
//         this.harga = harga;
//         this.jenis = jenis;
//     }
//     deskripsi(){
//         return this.warna+" "+this.ukuran;
//     }
// }

// let botol3 = new botol ("hijau","small",60000);
// console.log(botol3);

//penggunaan static methode
class botol {
    constructor(warna, ukuran,harga,jenis){
        this.warna = warna;
        this.ukuran = ukuran;
        this.harga = harga;
        this.jenis = jenis;
    }
    deskripsi(){
        return this.warna + " "+ this.ukuran+" "+this.harga;
    }
    static deskripsi1(d){
        return d.harga;             //digunakan untuk mengambil nilai dari variabel yang baru dibuat
    }
}
    let botol4 = new botol("orange","medium",35000);
    let botol3 = new botol("blue", "small", "1000", "mbil")

    console.log(botol4.deskripsi());
    console.log(botol.deskripsi1(botol3));
