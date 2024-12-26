export function cyrillicToLatin(text) {
  const map = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "Ye",
    Ё: "Yo",
    Ж: "J",
    З: "Z",
    И: "I",
    Й: "I",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    Ө: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ү: "U",
    Ф: "F",
    Х: "Kh",
    Ц: "Tc",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shts",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    Ъ: "",
    Ы: "Ii",
    Ь: "",

    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "ye",
    ё: "yo",
    ж: "j",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    ө: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ү: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shts",
    э: "e",
    ю: "yu",
    я: "ya",
    ъ: "",
    ы: "ii",
    ь: "",
  };
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

export function latinToCyrillic(text) {
  const map = {
    Kh: "Х",
    Sh: "Ш",
    Ch: "Ч",
    Ts: "Ц",
    Ya: "Я",
    Ye: "Е",
    Yo: "Ё",
    Yu: "Ю",
    Shts: "Щ",
    Ii: "Ий",
    Ei: "Эй",
    Ai:"Ай",
    Oi:"Ой",
    Ui:"Уй",
    A: "А",
    B: "Б",
    C: "С",
    D: "Д",
    E: "Э",
    F: "Ф",
    G: "Г",
    H: "Х",
    I: "И",
    J: "Ж",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "К",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    W: "В",
    X: "Кс",
    Y: "Й",
    Z: "З",

    kh: "х",
    sh: "ш",
    ch: "ч",
    ts: "ц",
    ya: "я",
    ye: "е",
    yo: "ё",
    yu: "ю",
    shts: "щ",
    ii: "ий",
    ei: "эй",
    ai:"ай",
    oi:"ой",
    ui:"уй",
    a: "а",
    b: "б",
    d: "д",
    e: "э",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "ж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "к",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    w: "в",
    x: "кс",
    y: "й",
    z: "з",
  };

  let result = text;
  for (let [latin, cyrillic] of Object.entries(map)) {
    result = result.split(latin).join(cyrillic);
  }
  return result;
}

console.log(cyrillicToLatin("Сайн уу?, уул"));
console.log(latinToCyrillic("shagai, yargui"));

