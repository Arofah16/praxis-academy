var DataMahasiswa = [
    "AROFAH",
    "kirana",
    "kalila"
];
    function tampilkanMahasiswa(){
        var daftarMahasiswa = document.getElementById("DaftarMahasiswa");
        daftarMahasiswa.innerHTML = "";
    }
    // mencetak nama mahasiswa
    for( i=0 ; i<DataMahasiswa ; i++){
        var tombolEdit = "<a href='#' onClick='editMahasiswa("+i+")'>Edit Mahasiswa</a>";
        var tombolHapus = "<a href='#' onClick='deleteMahasiswa("+i+")'>Hapus Mahasiswa</a>";
        daftarMahasiswa.innerHTML += "<li>" + DataMahasiswa[i] + " ["+tombolEdit + " | "+ tombolHapus +"]</li>";        
    }
    function addMahasiswa(){
        var input = document.querySelector("input[name=barang]");
        DataMahasiswa.push(input.value);
        tampilkanMahasiswa();
    }
    
    function editMahasiswa(id){
        var newBarang = prompt("Nama baru", DataMahasiswa[id]);
        DataMahasiswa[id] = newBarang;
        tampilkanMahasiswa();
    }
    
    function deleteMahasiswa(id){
        DataMahasiswa.splice(id, 1);
        tampilkanMahasiswa();
    }

    
    tampilkanMahasiswa();
   
