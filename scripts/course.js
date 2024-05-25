let fromRuble = document.getElementById('input-from-ruble');
let toFunt = document.getElementById('input-to-funt');
let fromFunt = document.getElementById('input-from-funt');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
   toFunt.value = fx(fromRuble.value).from("RUB").to("EGP");
 });


 document.getElementById('button-from').addEventListener('click', function() {
    toRuble.value = fx(fromFunt.value).from("EGP").to("RUB");
 });