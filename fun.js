// function add() {
//     console.log("Inside add");
// }
// function add(Number1, Number2) {
//     return (Number1 + Number2);
// }
// function add(number1, number2, number3) {
//     return (number1 + number2 + number3);
// }
// add();
// console.log(add(10, 15));
// console.log(add(10, 15, 10.5));
// const getData = async () => {
//     let data = "Hello World";
//     return data;
// }
// getData().then(data =>
//     console.log(data)
// );
const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}
console.log(1);
getData();
console.log(2);
