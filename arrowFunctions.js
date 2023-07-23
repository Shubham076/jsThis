/*
value of this inside arrow function is equal to this of closest lexical parent
in other words value of this is equal to value before calling the arrow function
 */


/*
in this example closest lexical parent of inner is outer so value of this equals to obj
itself
The this value inside an arrow function is set to the this value of the enclosing context at the time the arrow function is created, regardless of how or where the arrow function is later invoked.
 */
obj = {
    name: "Shubham",
    outer: function() {
        inner = () => {
            console.log(this.name)
        }
        inner()
    }
}

obj.outer()
