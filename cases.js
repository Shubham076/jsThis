/*
value of this is always equal to the object function is property off

in case of function is not property of an object this points to global object
 */

console.log("Case: Normal function")
function test () {
    return this
}

//value equals to global object
console.log(test().toString())
console.log("----------------------\n")


console.log("Case: Function inside an object")
let x = {
    name : "Shubham",
    test: function () {
        console.log(this.toString())
        console.log(this.name)
    }
}

//since test is the property of x so value of this inside test points to object x
x.test()

/*but if I point the function test to a variable in that case this belongs to
global object as caller is the global context and this.name == undefined
because name property doesn't exist inside global execution context
*/
val = x.test
val()
console.log("------------------------\n")

/*

in this case the value of this for outer is equal to obj as outer is a property of obj
but inner is not an property of outer so value of this belongs to global obj
 */
console.log("Case: Nested functions")
obj = {
    name: "Shubham",
    outer: function() {
            console.log("Outer: " + this.name)
            function inner() {
                console.log(this.toString())
                console.log("Inner: " + this.name)
            }
            inner()
    }
}
obj.outer()
