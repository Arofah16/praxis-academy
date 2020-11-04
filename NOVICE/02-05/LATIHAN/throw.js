function cek()
{
    var lulus = 80;
    var remidi = 60;
    try{
        if(lulus >= 80){
            throw("selamat anda LULUS");
        }
        else{
            var jumlah = 20 + remidi;
        }
    }
    catch(err){
        alert("error: "+ err)
    }
}
cek(40);