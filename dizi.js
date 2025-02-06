var meyveler=["Elma", "Armut", "Kiwi", "Çilek"];
console.log(meyveler.length);
console.log(meyveler[2]);
console.log(meyveler[meyveler.length-1]); // dizinin son elemanını bulma

meyveler.push("Portakal"); // portakal ekle
console.log(meyveler);

meyveler[1]="Şeftali"; // ikinci elemanı şeftali yap
console.log(meyveler);

meyveler.unshift("Vişne"); // en başa vişne ekle
console.log(meyveler);

meyveler.splice(2,0,"Erik");
console.log(meyveler);

meyveler.pop(); // en son elemanı sil
console.log(meyveler);

console.log(meyveler.pop()); // silinen son elemanı göster

meyveler.shift(); // ilk elemanı sil
console.log(meyveler);

console.log(meyveler.sort());