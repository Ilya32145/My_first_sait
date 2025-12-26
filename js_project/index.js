const summa = Number(prompt());
const doing = prompt();

const bank = {
    summa,
    doing,
    snatie() {
    console.log(500 - this.summa);}
};
bank.snatie;
console.log('gdg')