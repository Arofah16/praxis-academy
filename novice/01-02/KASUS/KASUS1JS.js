
      var angka1, angka2;
            angka1 = window.prompt("Masukkan angka yang pertama", "0");
            angka2 = window.prompt("Masukkan angka yang kedua", "0");
                                                            
            if(parseInt(angka1, 10) > parseInt(angka2, 10)) 
            { 
            document.write("angka terbesar dari "+ angka1+ " dan "+ angka2+ " adalah "+ angka1+ ".");
            }   
            else
            if(parseInt(angka2, 10) > parseInt(angka1, 10)) 
            {
            document.write("angka terbesar dari "+ angka1+" dan "+ angka2+ " adalah"+ angka2+ ".");
            }                  
            else
            {
            document.write("hasilnya dari  "+ angka1+ " and "+angka2+ "adalah sama dengan");
            }
  

