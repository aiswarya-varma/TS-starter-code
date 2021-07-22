// Readonly: prevents assignments to the field outside of the constructor
class User {
   constructor(public readonly name: string, public age: number) {
    }
}

const user = new User("Jane", 13);
// user.name = "Foo";
// console.log(user.name);

// Static: used on any other data you don't need to be replicated across instances
class UserList {
    private users: User[] = [];

    static instance: UserList = new UserList();

    private constructor() { // to make sure no other instances are created
    }

    // static addUser(u: User) {
    //     UserList.instance.users.push(u);
    // }

    getUserss() {
        return this.users;
    }
}

// const ul = new UserList();

// UserList.addUser(user);
// console.log(UserList.instance.getUserss());
