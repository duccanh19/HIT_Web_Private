class Person {
    constructor(fullName, height, weight) {
        this.fullName = fullName;
        this.height = height;
        this.weight = weight;
    }

    calcBMI() {
        this.weight / (this.height * this.height);
    }
}

const person1 = new Person('Nguyễn Văn A', 1.7, 70);
const person2 = new Person('Nguyễn Văn B', 1.6, 50);

const bmi1 = person1.calcBMI();
const bmi2 = person2.calcBMI();

if (bmi1 > bmi2) {
    console.log(`${person1.fullName} có chỉ số BMI cao hơn ${person2.fullName}`);
} else if (bmi1 < bmi2) {
    console.log(`${person2.fullName} có chỉ số BMI cao hơn ${person1.fullName}`);
} else {
    console.log(`${person1.fullName} và ${person2.fullName} có chỉ số BMI bằng nhau`);
}
