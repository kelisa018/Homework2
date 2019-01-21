let age = 31;
if (age > 0 && age < 18) {
  console.log('Учеба');
}
else if (age > 17 && age < 65) {
  console.log('Работа');
}
else if (age > 64 && age < 101) {
  console.log('Пенсия');
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case 1:
    console.log(arr[i] + ' разработчик');
      break;
    case 2:
    case 3:
    case 4:
    console.log(arr[i] + ' разработчика');
    break;
    default:
    console.log(arr[i] + ' разработчиков');
  }
}
