// 1 . Different Data types available in Javascript? 
They are two types of data types
    (i).Primitive
    (ii).Non - Primitive

        (i).Primitive Datatype:
number,
    string,
    boolean,
    NULL,
    undefined,
    symbol.
(ii).Non - primitive Datatype:
Objects,
    Array.

// 2 . In how many ways we can declare a variable?
Three ways to declared a variables
    (i).var,
    (ii).let,
    (iii).const.

// 3 . What is Hoisting?    
WhenEver a context is created(global function)
all the variables which are declared with Var key word will be initialised.
    with "undefined" value this is a phase call as the creation phase.
and the let keywords will be show error.
    variables which are declared with function keywords are hoisted.
variables which are declared without function keywords are not hoisted.

    console.log(A);
var A = 10;

Result -> undefined

// 4 . What is temperal Dead Zone?
The let and const variables are not accessable before they initialization
with some values, and the phase between the starting of the execuion of block
    in which the let or const variables is initialized is called 
Temporal Dead Zone for the variable

// 5 . Difference between “ == “ and “ === “ operators?

if the given values are same then '' == '' is true 
because its checking the only the values they are equal or not
a = 1;
b = "1";
console.log(a == b);
the values are same Number 1.

if the values and the data type are same then "===" is true 
because its checking the data type and the values are equal or not
a = "1";
b = "1";
console.log(a === b);
the values and datatypes are strings "1"

// 6 . What are the Different types of Operators in Javascript?
There are 6 types of Operators
They are
(i)      Arthametic Operators
(ii)     Comparision Operators 
(iii)    Logical Operators
(iV)     Assignment Operators
(v)      Bitwise Operators
(vi)     Ternery Operators