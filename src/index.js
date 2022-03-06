// ES6記法
/**
 * テンプレート文字列
 */
const name = "toru";
const age = 31;
const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
// 従来
const myProfile = {
  name1: "toru",
  age1: 31
};
const message1 = `私の名前は${myProfile.name1}です。年齢は${myProfile.age1}です。`;
console.log(message1);

const myProfile1 = ["toru", 31];
const message3 = `私の名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;
console.log(message3);

// 分割代入
const { name1, age1 } = myProfile;
const message2 = `私の名前は${name1}です。年齢は${age1}です。`;
console.log(message2);

const [name2, age2] = myProfile1;
const message4 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(message4);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * map,filterを使った配列の処理
 */
const nameArr = ["田中", "山田", "スズキ"];

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2);
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "スズキ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
