alert(`Boshlanishida Arrayning uzunligi: 4`);
let textArr = [`Olma`, `banan`, `gilos`, `shaftoli`];
let takeOneInfo = confirm(
  `Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz`
);
if (takeOneInfo) {
  alert(`Arrayning uzunlligi: 3`);
  console.log(textArr.pop());
} else {
  alert(`Arrayning uzunlligi: 4`);
}
console.log(textArr);
