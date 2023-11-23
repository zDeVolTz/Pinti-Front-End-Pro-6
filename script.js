let checkValue = false;
let hoursValue;

do {
  hoursValue = +prompt("Введіть кількість годин для перетворення в секунди");
  if(Number.isNaN(hoursValue)){
        alert("Ви ввели недійсне значення спробуйте ще");
    } else {
        checkValue = !checkValue;
    }
} while (checkValue === false);

/*
Может такой цикл более правильный ?

while (true) {
     hoursValue = +prompt("Введіть кількість годин для перетворення в секунди");
  if(Number.isNaN(hoursValue)){
        alert("Ви ввели недійсне значення спробуйте ще");
    } else {
        break
    }
}

*/

const secondsValue = hoursValue * 3600;
alert(secondsValue);