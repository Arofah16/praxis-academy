let kamus = new Map();
// KAMUS OTOMATIS

kamus.set("car","mobil");
kamus.set("bycycle","sepeda");
kamus.set("motorcycle","sepeda motor");

// MENYIMPAN

function simpan(){
    let inggris = document.getElementById("key").value;
    let indonesia = document.getElementById("value").value;

    if (inggris != "" && indonesia != ""){
        alert("sukses memasukkan " + inggris + " " + indonesia);
        kamus.set(inggris,indonesia);
        console.log(kamus.entries())
    }else{
        alert("memasukkan kedua inputan kamus itu");
    }
}

// MENGHAPUS

function hapus(){
    let item = document.getElementById("hapus").value;
    let hasil = document.getElementById("hasil").value;

if (hasil){
    alert("Sukses Menghapus" + item);
}else{
    alert("kata" + item +"tidak ada dikamus");
}

let text = `isi kamus : <br><\br>`;
for(let item of kamus.entries()){
    text += `${item[0]} : ${item[1]}` +" </br>";
    console.log(`${item[0]} : ${item[1]}`);
}
document.getElementById("sisa").innerHTML = text;

}
// CARI

function cari(){
    let input = document.getElementById("search").value;
    let result = kamus.get(input);

if (result){
    console.log(result)
    document.getElementById("hasil").innerHTML = result;
}else{
    alert("kata" + input + "tidak ada di kamus")
}
}