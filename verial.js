const prompt=require("prompt-sync")({sigint:true});

var sayi1=prompt("Lütfen 1. sayiyi giriniz!");
var sayi2=prompt("Lütfen 2. sayiyi giriniz!");

var sonuc=Number(sayi1)+Number(sayi2);
console.log("Sayilarin Toplamı:", sonuc);

