// var i;

// for(i=1; i<=10; i++) {
//     console.log(i);
// }

// Dizi elemanlarının for döngüsü ile yazdırılması
// var sebzeler=["Marul", "Salatalık", "Biber", "Maydanoz", "Patlıcan", "Kabak"];

// var i;
// for (i=0; i<sebzeler.length; i++) {
//     console.log(sebzeler[i]);
// }

// Nesnelerin for döngüsü ile yazdırılması
var ogrenci=[
    {ad:"Vahide", soyad:"Uney", no:242},
    {ad:"Sule", soyad: "Tinkilic", no:198},
    {ad:"Zuhal", soyad:"Bozkurt", no:355}
];
// var i;
// for (i=0; i<ogrenci.length; i++) {
//     console.log(ogrenci[i].ad+" "+ogrenci[i].soyad+" "+ogrenci[i].no);
// };

// //for in döngüsü:

// for(i in ogrenci) {
//     console.log(ogrenci[i].ad+" "+ogrenci[i].soyad+" "+ogrenci[i].no);
// };

for (var ogr of ogrenci) {
    console.log(ogr.ad);
};



