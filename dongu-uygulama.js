var sayilar=[5,8,13,22,85,41];

// sayılar dizisindeki tek sayıları ekrana yazdıralım
// for (var i=0; i<sayilar.length; i++) {
//     if(sayilar[i]%2==1) {
//         console.log(sayilar[i]);
//     }
// }


// sayılar dizisindeki elemanların toplamını ekrana yazdıralım
var toplam=0;

for (sayi of sayilar) {
    toplam= toplam+sayi;
}
console.log(toplam);