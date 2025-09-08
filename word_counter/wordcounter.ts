//Ligia Paola Silva Hernanddez
class WordCounter {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  counter(): Map<string, number> {
    let word = "";
    const map = new Map<string, number>();

    for (let i = 0; i < this.text.length; i++) {
      const char = this.text[i];

      if (char === " " || i === this.text.length - 1) {
        if (char !== " ") {
          word += char;
        }

        if (word.length > 0) {
          if (map.has(word)) {
            const val = map.get(word);
            map.set(word, val! + 1);
          } else {
            map.set(word, 1);
          }
        }

        word = "";
      } else {
        word += char; // vamos construyendo la palabra
      }
    }

    return map;
  }
}

const text = "Una vida sin pan o una vida feliz";
const wordCounter = new WordCounter(text);
console.log(wordCounter.getText());

const result = wordCounter.counter();

result.forEach((value, key) => {
  console.log(key, "-", value);
});
