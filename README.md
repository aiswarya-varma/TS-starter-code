## What is TypeScript and why do we need it?
- Adds static type definitions onto JavaScript.
- Typescript internally inferes type.
- TypeScript saves you time catching errors and providing fixes before you run code - coding made easier and quicker.
- Does compile time type checking and not at run time.

## Configuration
- npm i typescript -D
- To generate a config file with default configurations, npx tsc --init

## Compiler
- TypeScript code is transformed into JavaScript code via the TypeScript compiler or Babel.
- npm i ts-node -D

## Everyday usages
    1. Primitives: string, number, boolean
    2. Arrays
    3. Objects
    4. Functions
    5. Any
        - Used whenever you don’t want a particular value to cause typechecking errors
        - or when typescript cannot internally infer the type
    6. Union 
        - Formed from two or more other types, representing values that may be any one of those types.
    7. Optionals
        - You can choose to set the values or not.
        - In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. 
        - Explicit check for undefined necessary in TypeScript.
    8. Tuples
        - It represents a heterogeneous collection of values.
        - Enable storing multiple fields of different types.

## TypeScript Interfaces
- An interface defines the specifications of an entity. 
- It lays out the contract that states what needs to be done but doesn’t specify how it will be done.

## Utility types
- Globally available utilities to facilitate common type transformations.
    1. Partial
    2. Required
    3. Record
    4. Pick
    5. Omit
    6. Readonly

## Enum
- Used to define a set of named constants.
- Two types - numeric and string-based enums.

## Literal types
- eg: Boolean type

## Generics
- Types which take parameters.
- Helpful in creating components that can work over a variety of types rather than a single one.

## Typescript classes

## Generics in TS classes
- When a generic class is instantiated with new, its type parameters are inferred the same way as in a function call.

## Readonly and Static in TS classes
- readonly - prevents assignments to the field outside of the constructor.
- static - used on any other data you don't need to be replicated across instances.

## Abstract classes in TS
- Acts as a template.
- Serves as a base class for subclasses which implement all the abstract members.
- Cannot be directly instanciated.


## Questions
1. Does Typescript bloat code?
2. What if I define a structure ATM or I dont know the type?
    - AS keyword
    - Unknown type (type-safe counterpart of any)
