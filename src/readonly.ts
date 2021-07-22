interface Bird {
    name: string;
    species: string;
}

function makeBird(name: string, species: string): Readonly<Bird> {
    return {
        name,
        species,
    };
}

const foo = makeBird("Foo", "Flamingo");
// foo.name = "Baz";



function makeCoordinate(
    x: number,
    y: number,
    z: number
): readonly [number, number, number] {
    return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50;