/**
 * Acts as a template.
 * Serves as a base class for subclasses which implement all the abstract members.
 * Cannot be directly instanciated.
 */

abstract class Pokemon {
    constructor() { }

    move() { }
    fight() {
        console.log(`${this.name} attack with ${this.getAttack()}`);
    }

    abstract getAttack(): string;
    abstract get name(): string; // abstract accessor - getter
}

// const p = new Pokemon();

class Pikachu extends Pokemon {
    getAttack(): string {
        return "Thunder bolt";
    }
    get name(): string {
        return "Pikachu"
    }
}

const pika = new Pikachu();

pika.fight();
