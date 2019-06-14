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

class student extends Instructor{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;

    }
    listSubject(){
        return `These are my favorite subjects: ${this.favSubjects}`
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    };
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standup time!`)
    };
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
}


///students

const joscelyn = new student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

const nisa = new student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    grade: 100,
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});


///instructor

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});


///PMs

const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
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

///students console.logs

///nisa
console.log(nisa.name);
console.log(nisa.speak());
console.log(nisa.previousBackground);
console.log(nisa.listSubject());
(nisa.sprintChallenge('JavaScript Fundamentals'));
(nisa.PRAssignment('JavaScript IV'));


//joscelyn
console.log(joscelyn.name);
console.log(joscelyn.speak());
console.log(joscelyn.previousBackground);
console.log(joscelyn.listSubject());
(joscelyn.sprintChallenge('JavaScript Fundamentals'));
(joscelyn.PRAssignment('JavaScript IV'));


///instructor
console.log(dan.favLanguage);
console.log(dan.catchPhrase);
(dan.demo('JavaScript IV'));
(dan.grade(nisa, 'Javascript Fundamentals'));
(dan.grade(joscelyn, 'Javascript Fundamentals'));

///PMs

//mary
console.log(mary.favInstructor);
console.log(mary.catchPhrase);
(mary.standUp('Web21 Sprint'));
(mary.debugsCode(nisa, 'Javascript IV'));

//pat
console.log(pat.favInstructor);
console.log(pat.catchPhrase);
(pat.standUp('Web21 Sprint'));
(pat.debugsCode(nisa, 'Javascript IV'));