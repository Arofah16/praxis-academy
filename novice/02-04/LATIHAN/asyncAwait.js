    //kata kunci penggunaan async await adalah penggunaan kedua kata tersebut.
    //1.async digunakan untuk mengubah fungsi menjadi asyncronus
    //2. await digunakan untuk menunda eksekusi hingga proses asyncronus selesai
    // async function hello(){
    //     hasil = await doAsync()
    //     console.log(hasil)
    // }
    // async function getApi(){
    //     const dataApi = fetch(`https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-3-promise-819ce5d8b3c`)
    //     const data = 
    // }

    // const Janji1= () => (new Promise((resolve,reject)=>{
    //     setTimeout(()=>{resolve("JANJI SATU")},1000)
    // }));
    // const janji2 = () => (new Promise((resolve,reject)=>{
    //     setTimeout(()=>{resolve("JANJI DUA")},200)
    // }));
    // const janji3 =()=>(new Promise((resolve,reject)=>{
    //     setTimeout(()=>{resolve("JANJI TIGA")},200)
    // }));
    // async function semuaJanji(){
    //     let Hasil = await Promise.all(
    //         [janji1(),janji2(),janji3()]
    //     )
    //     console.log(Hasil);
    // }
    // async function janjirace(){
    //     let Hasil = await Promise.race(
    //         [janji1(),janji2(),janji3()]
    //     )
    //     console.log(Hasil);
    // }
    
    // semuaJanji();
    // janjirace();
    //1. membuat fungsi dan dideklarasikan kedalam rumus async
    // function x (){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             return resolve("pertama")
    //         },1000)
    //     })
    // }
    // function y (){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             return resolve("kedua")
    //         },2000)
    //     })
    // }
    // function z (){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             return resolve("ketiga")
    //         },500)
    //     })
    // }
    // //membuat fungsi async awaitnya
    // async function cobasync(){              //menuliskan async terlebih dulu untuk mengasyncronkan
    //     let x1 = await x();                 //membuat variabel baru , menambahkan await diikuti nama fungsi
    //     let y1 = await y();
    //     let z1 = await z();
    //         return `${x1}-${y1}-${z1}`;         //mengembalikan nilai variabel didalam async
    // }
    // cobasync().then((isi)=>{
    //     console.log(isi)
    // })
// mencoba async kedua
function setelah25menit(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(x * 3);
        },2000)
    });
}
async function menambahasync(x){
    const a = await setelah25menit(30);
    const b = await setelah25menit(40);
    const c = await setelah25menit(50);
        return x + a + b + c;
}
menambahasync(100).then((sum)=>{
    console.log(sum);
});

    