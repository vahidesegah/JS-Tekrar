var adres="http://www.yegitek.gov.tr";
var egitim="JavaScript Temelleri Kursu";
var sonuc;

sonuc=egitim.length;
console.log(sonuc);

if(adres.indexOf("tr")>-1) {
    sonuc=console.log("var");
} else {
    sonuc=console.log("yok");
}

egitim=egitim.replaceAll(" ", "-");
console.log(egitim);

sonuc=egitim.concat("/egitimler", egitim.toLowerCase());
console.log(sonuc);







