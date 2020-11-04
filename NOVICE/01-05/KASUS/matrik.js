// // function penjumlahanMatrik(baris,kolom){
   
// //     let hasill=[];
// //     let a = 12;
// //     let b = 4;

// //     hasill =new Array(baris.length);
// //     for (let a=0 ; a <hasill.length ; a++){

// //         hasill[a] = new Array(baris[a].length);
// //         for(let b=0 ; b<hasill[a].length ; b++){

// //             hasill[a][b] = baris[a][b] + kolom[a][b];
// //         }
// //     console.log(hasill);
// //     }
// //     return hasill;
// // }
// function penjumlahanSum(arr){
//     let nilaiarr = arr.sort((a,b)=>{
//         return a -b; 
//     })
//     return arr;
//     let largest = nilaiarr.pop();
//     let number = 0;
//     nilaiarr.forEach((item += item)) ;
//     return largest === number;
//     {
        
//     };


// console.log(penjumlahanSum());
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) ); // 650
 
// let matrik = new Array(2);

//  document.write(" Membuat array 2D<br>");

//  //menggunakan perulangan ID array
//  for ( let i=0 ; i<matrik.length ; i++){
//       matrik[i] = new Array(2);
//  }

//  let X = 0;
//  // MENGINISIALISASI MENGGUNAKAN ELEMEN ARRAY
//  for (let i=0 ; i < 2; i++){
//    for(let j = 0 ; j<2; j++){
//      matrik[i][j] = X++;
//    }
//  }

//  //MENAMPILKAN ELEMEN ARRAY 2D
//  for (let i=0; i<2; i++){
//    for(let j=0; j<2; j++){
//      document.write(matrik[i][j]+"");
//    }
//    document.write("<br>");
//  }


//  let matrik2 = new Array(2);

//  document.write(" Membuat array 2D<br>");

//  //menggunakan perulangan ID array
//  for ( let a=0 ; a<matrik2.length ; a++){
//       matrik2[a] = new Array(2);
//  }

//  let Y = 0;
//  // MENGINISIALISASI MENGGUNAKAN ELEMEN ARRAY
//  for (let a=0 ; a<2; a++){
//    for(let b = 0 ; b<2; b++){
//      matrik2[a][b] = Y++;
//    }
//  }

//  //MENAMPILKAN ELEMEN ARRAY 2D
//  for (let a=0; a<2; a++){
//    for(let b=0; b<2; b++){
//      document.write(matrik2[a][b]+"");
//    }
//    document.write("<br>");
//  }
let angka1=[1,2];
let angka2=[4,5];
let jumlah=[ ];

let x;
//menambahkan matrik
for(x=0; x<2; x++){
  jumlah[x]=angka1[x]+angka2[x];
}
//menampilkan matrik

for(x=0; x<2 ; x++){
  document.write(jumlah[x]);
}

