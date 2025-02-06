// switch yapısı break ve default kodlarıyla birlikte kullanılır

var gun= new Date().getDay();
// Haftanın ilk günü Pazar sayıldığından index 0 pazardır
switch (gun) {
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Sali");
        break;
    case 3:
        console.log("Carsamba");
        break;
    case 4:
        console.log("Persembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
}

//default u bu case lerden hiçbirisi olmaması durumunda ne olacağı için yazarız o yüzden gün örneğinde kullanmadık