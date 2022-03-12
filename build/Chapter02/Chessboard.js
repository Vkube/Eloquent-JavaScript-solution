// Напишите программу, которая создает строку, представляющую сетку 8 х 8,
// используя для разделения строк символы новой строки. В каждой позиции
// сетки стоит либо пробел, либо символ"#".
// Эти символы должны располагаться в шахматном порядке.
const size = 8;
let symbol = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      symbol += " ";
    } else {
      symbol += "#";
    }
  }
  symbol += "\n";
}
console.log(symbol);
