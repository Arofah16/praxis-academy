//dom seletion
//1. getElementById
// document.getElementById() ->untuk mengembalikan element      //menyuruh html untuk menampilkan sebuah id
const judul = document.getElementById('judul'); //harus membuat variabel terlebih dahulu
judul.style.color = "green";                      //karena judul sudah menjadi objek
judul.style.backgroundColor = "#ccc";
judul.innerHTML = " Nur Arofah";              //merubah nama judul menggunakan js

//2. menggunakan document.getElementsByTagName(); ->digunakan untuk memanggil html collection
const paragraf = document.getElementsByTagName('p');
for(let i=0; i<paragraf.length ; i++){
    paragraf[i].style.backgroundColor ='lightblue';
}
// paragraf[2].style.backgroundColor = 'lightblue';

const h1 = document.getElementsByTagName(h1)[0];
h1.style.fontSize = '50px';
// paragraf.style.backgroundColor = 'lightblue';   =>bisa dengan begini


// 3. menggnakan document.getElementsByClassName() , dengan menggunakan html collection
const p = document.getElementsByClassName(p)[0];
p.innerHTML =  "dirubah dari javascript";