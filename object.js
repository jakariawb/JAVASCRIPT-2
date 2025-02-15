// var student = {
//     name: 'jakaria',
//     cgpa: 21.1,
//     age: 29,
//     lage: ['japnise','koria','baingla']
// }
// console.log(student.name);
// console.log('cgpa :'+ student.cgpa);

// mailtipul function
function student(name,age,cgpa,lage){
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
        this.lage = lage;
}
var student1 = new student('jakaria',27,2.93,['japnise','koria','baingla']);

console.log(student1.name);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lage);


function studentInfo(name, age, cgpa,lage){
    this.name = name;
    this.age = age;
    this.cgpa= cgpa;
    this.lage = lage;
    // adding function insit a construct
    this.display = function (){
        console.log(this.name)
        console.log(this.age)
        console.log(this.cgpa)
        console.log(this.lage)
    }
}
var student3 = new studentInfo('jakaria',27,2.93,['japnise','koria','baingla']);
student3.display()
student3.display()
student3.display()