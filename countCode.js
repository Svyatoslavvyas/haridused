function countCode(letter, data) {
    letter = letter.toLowerCase();
    let count = 0;

    for (const code of data) {
      if (code[0].toLowerCase() === letter) {
        count++;
      }
    }

    return count;
  }

  const data = [
    "code1",
    "Code2",
    "iCode3",
    "ICode4",
    "otherCode",
  ];

  const letter = "i";
  const result = countCode(letter, data);
  console.log("${letter}: ${result}");
