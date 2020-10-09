var Siswa = [["arofah",90],["aziza",65],["siddiq",83]];
var Nilai = 0;
    for(i=0; i<Siswa.length; i++) {
    Nilai += Siswa[i][1];
    Rata = Nilai/Siswa.length;
    }
    console.log("Nilai rata- rata : "+(Nilai/Siswa.length)); 
    
    if(Rata < 60 ){
        console.log("Nilai : D ");
    }else if(Rata < 70){
        console.log("Nilai  : C");
    }else if(Rata < 80){
        console.log("Nilai : B");

    }else if(Rata < 90){
        console.log("Nilai A");
    }