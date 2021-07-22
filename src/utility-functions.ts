interface MyUser {
    name: string;
    id: number;
    email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    };
};

merge(
    {
        name: "Jane",
        id: 2,
        email: "janedoe@dontemail.com",
    },
    {
        email: "janedoe123@dontemail.com",
    }
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<number, UserWithoutID> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other,
        };
    }, {});
};

console.log(
    mapById([
        {
            id: 1,
            name: "Foo",
        },
        {
            id: 2,
            name: "Baz",
        },
    ])
);