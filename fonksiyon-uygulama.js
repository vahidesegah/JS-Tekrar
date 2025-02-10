//Girilen metni girilen sayı kadar ekrana yazdırma
function tekrarliYaz (metin, adet) {
    for(var i=1; i<=adet; i++) {
        console.log(metin);
    }
}
tekrarliYaz("Merhaba",5);

// Girilen yarıçap bilgisine göre daire alanını hesaplama

const pi=3.14;
function alanHesap (yaricap) {
    return yaricap**2*pi;
}
var sonuc= alanHesap(5);
console.log(sonuc);

//Celcius olarak girilen sıcaklık değerini Fahrenheit olarak yazma
function fahrenheit (sicaklik) {
    return sicaklik*1.8 + 32;
}
var fahsonuc= fahrenheit(20);
console.log(fahsonuc);