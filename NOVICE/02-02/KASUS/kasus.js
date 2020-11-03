class kucing {
    constructor(kelelahan,kelaparan,kesepian, senang){
        this.kelelahan = kelelahan;
        this.kelaparan = kelaparan;
        this.kesepian = kesepian;
        this.senang = senang
    }
    makan(ayam, senang){
        this.kelaparan -= ayam;
        this.senang += senang;
        return `kelaparan berkurang = ${this.kelaparan}  senang bertambah = ${this.senang}`
    }
    tidur(kenyang,senang){
        this.kelelahan -= kenyang;
        this.senang += senang;
        return "kelaparan berkurang:"+this.kelelahan+" senang bertambah: "+this.senang;
    }
    piara(sepi, senang){
        this.kesepian -= sepi;
        this.senang += senang;
        return "kesepian  berkurang:"+this.kesepian+" senang bertambah:"+this.senang;
    }
}

let kucing1 = new kucing(30, 80, 20, 30);

console.log(kucing1.tidur(40, 45));
console.log(kucing1.makan(20,60));
console.log(kucing1.piara(5,40));