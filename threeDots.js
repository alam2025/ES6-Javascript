const salary = [100,333,444,55]
const salary2=[534,232,44234,566];
const salary3=[1200,1300,1555];
const age=20, age2=30, age3=50
// // const totalSalary = salary.concat(salary2).concat(salary3);
// const minAge =Math.min(...salary,...salary2,...salary3)
// // console.log(totalSalary)
// console.log(minAge);

const totalSalary =[...salary, ...salary2,5, ...salary3]
console.log(totalSalary)