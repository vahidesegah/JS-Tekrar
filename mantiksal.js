var a=34;
var durum= a>=20 && a%2==0; // && işareti "ve" anlamında
console.log(durum);

a=35;
var durum= a>=20 || a%2==0; // || işareti "veya" anlamında
console.log(durum);
// veya lardan biri dahi tru ise sonuç true - hepsi false ise false döner

console.log(!a>20); // true olan sonucu false yaptı yani tersine çevirdi