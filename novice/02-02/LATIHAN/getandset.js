//MENGGUNAKAN GET DAN SET

// class botol{
//     constructor(warna,ukuran){
//         this.warna = warna;
//         this.ukuran = ukuran;
//     }
//     get warna(){
//         return this._warna;
//     }
//     set warna(value){
//         this._warna = value;
//     }
// }
// let botol1 = new botol("merah","medium");

// console.log(botol1);

//MENGGUNAKAN SUBCLASS

class botol{                        //membuat parent terlebih dahulu
    constructor(warna,ukuran,harga){
        this.warna = warna;
        this.ukuran = ukuran;
        this.harga = harga;
    }
    deskripsi(){
        return this.warna+" "+this.ukuran;          //parameter yang mau diambil
    }
}
// class botol2 extends botol{                         //membuat kelas baru dengan menggunkan key extend
//     deskripsi(){
//         return this.warna+" "+ this.ukuran+" adalah kelas anak";
//     }
// }
class botol2 extends botol{
    deskripsi(){
        return super.deskripsi()+" disebut fungsi kelas dasar dari kelas anak "
    }
}

let botol3= new botol2("hitam","big");          //membuat objek baru menggunakan kelas sebelumnya

console.log(botol3.deskripsi());
