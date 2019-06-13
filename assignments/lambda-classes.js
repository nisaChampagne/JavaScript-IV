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
    };
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    };
}
class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    };
    debugsCode(studentObj, subject){
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    };
}



const nisa = new student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

console.log(nisa.name);
console.log(nisa.speak());
console.log(nisa.previousBackground);
console.log(dan.favLanguage);
console.log(mary.favInstructor);