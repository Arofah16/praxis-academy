function belanja(uang,barang){
    var punyaUang = 20000;
    var jumlahBarang = (uang % punyaUang)&& (barang * uang );
    var total = "anda telah berbelanja sejumlah"+uang+ " maka jumlah sisa uang anda adalah "+ jumlahBarang;

    return total;
}
// console.log();
belanja();

// var daftarBelanja = (120000,"Seafood komplit"); 
//  console.log(daftarBelanja);