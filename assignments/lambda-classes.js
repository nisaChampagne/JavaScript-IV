// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listSubject(student){
        console.log(`${student.favSubject[0]}, ${student.favSubject[1]}, ${student.favSubject[3]} `)
    }
}