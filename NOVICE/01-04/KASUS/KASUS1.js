// // SORTIR NOMOR TELEPON
// //FILTER NOMER TELEPON
// var nomor = "085\n081\n083";
// //1.CARI SEMUA NOMER YANG KODE AREANYA 08
// var re1 = /(085|081)\s/

function fungsiNomor(masukkanNomor){
    let nomor = /^[A-Z]{1,2}\s[0-9]{1,4}\s[A-Z]{1,2}$/;
    let cek = nomor.test(masukkanNomor.value);
    if (!cek){

        alert(" bukan plat nomor indonesia ");
    }
    else{
        alert("merupakan nomor plat yang anda masukkan plat indonesia");
    }
}

