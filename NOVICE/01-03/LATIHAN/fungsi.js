var DataMahasiswa = [
    "AROFAH",
    "kirana",
    "kalila"
];
    function tampilkanMahasiswa(){
        var daftarMahasiswa = document.getElementById("daftar-Mahasiswa");

        daftarMahasiswa.innerHTML = "";
        // mencetak nama mahasiswa
        for( i=0 ; i<DataMahasiswa.length; i++){
            var tombolEdit  = " <a href = '#' onClick = 'editMahasiswa ("+i+")'>Edit Mahasiswa</a>";
            var tombolHapus = "<a href='#' onClick='deleteMahasiswa("+i+")'>Hapus Mahasiswa</a>";
            daftarMahasiswa.innerHTML += "<li>" + DataMahasiswa[i] + " ["+tombolEdit + " | "+ tombolHapus +"]</li>";        
        }
    }
    function addMahasiswa(){
        var input = document.querySelector("input[name=Mahasiswa]");
        DataMahasiswa.push(input.value);
        tampilkanMahasiswa();
    }
    
    // function editMahasiswa(id){
    //     var newMahasiswa = prompt("Nama baru", DataMahasiswa[id]);
    //     DataMahasiswa[id] = newMahasiswa;
    //     tampilkanMahasiswa();
    // }
    
    // function deleteMahasiswa(id){
    //     DataMahasiswa.splice(id, 1);
    //     tampilkanMahasiswa();
    // }

    
    // tampilkanMahasiswa();
   
