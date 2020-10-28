
// function Coba(){
//     var penumpang = 50;
//     try{
//         alert("pelatih yang duduk adalah: "+ penumpang+"orang.");
//     }catch(val){
//         alert("error: "+ val.description);
//     }
// }

// Coba();
// function myFunction() {
//     var passenger = 50;
//     try {
//       alert("The coach can sit " + passenger + " people.");
//     } catch (e) {
//       alert("Error: " + e.description);
//     }
//   }
//   myFunction();
//   function belajar()
//             {
//                var nilai = 80;
               
//                try {
//                 //    miscall();       //cara mengeceknya adalah dengan menambahkan code yang dibuat error
//                   alert("Selamat Nilai kamu adalah: " + nilai);
//                }
               
//                catch ( e ) {
//                   alert("Error: " + e.description );
//                }
               
//                finally {
//                   alert("tetapi kamu harus tetap belajar" );
//                }
//             }
//             belajar();

            //1. mengurutkan 
            // try{        // DIGUNAKAN UNTUK MENAMPILKAN KODE YANG BENAR
            //     alert("mulai");
            //     // LKFFKG          //MENAMBAHKAN VARIABEL YANG TIDAK ADA
            //     alert("akhir");
            // }
            // catch(err){         //UNTUK MENAMPILKAN ERROR
            //     alert("ERROR");
            // }

            //2.CATCH TRY menggunakan Asyncronus
            // setTimeout(function() {
            //     try {
            //       tidakAda; // try..catch handles the error!
            //     } catch {
            //       alert( "error is caught here!" );
            //     }
            //   }, 1000);
            //   console.log();
      async function getData(){
          try{
          const respon = await axios.get("https://jsonplaceholder.typicode.com/posts")
        //   console.log(respon);
          const data = await respon.data
          for(let j = 0 ; j <data.length ; j++){
              console.log( data[j].title+" "+data[j].id);
          }
          console.log(data)

        }catch(err){
            console.log(err);
        }
          // console.log(data);
      }
       getData();
