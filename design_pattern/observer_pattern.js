class observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}


class Subject {
    constructor() {
        this.observer = [];
    }

    subscribe(observer) {
        this.observer.push(observer);
    }

    unSubscribe(observer) {
        this.observer = this.observer.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observer.forEach(element =>
            element.update(data)
        );
    }
}

const subject = new Subject();

const observer1 = new observer("observer1");
const observer2 = new observer("observer2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello Observers!");



/// Task 4: Develop an Observer System
/// Create a simple event system using the Observer Pattern.

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(value) {
        console.log(`${this.name} received message: ${value}`);
    }
}

class Subject123 {
    constructor() {
        this.observer = [];
    }

    subscribe(observer) {
        this.observer.push(observer);
    }

    unSubscribe(observer) {
        this.observer = this.observer.filter(obs => obs !== observer);
    }

    notify(value) {
        this.observer.forEach(element => element.update(value));
    }
}

const sub = new Subject123();

const obs1 = new Observer("first");
const obs2 = new Observer("second");

sub.subscribe(obs1);
sub.subscribe(obs2);

sub.notify("done");