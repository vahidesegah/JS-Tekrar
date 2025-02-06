var ogrenci= {
    ad:"Ahmet",
    soyad:"Çetin",
    sinif: "9",
    sube: "B",
    okulNo: 195,
    anneAdi: "Ayşe",
    babaAdi: "Mehmet",
    adres:{
        cadde:"İnönü Cad.",
        mahalle:"MimarSinan",
        kapiNo: 125,
        ilçe: "Altındag",
        il: "Ankara"
    }
}

console.log(ogrenci.ad);

console.log(ogrenci.adres.il);

// Örneğin her öğrenciye aynı il ilçe vs yi tekrar tekrar yazmak zorunda mıyım? Hayır.
// Tekrar eden bu işlemler için döngü yapıları kullanılır
