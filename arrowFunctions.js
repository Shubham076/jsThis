/*
value of this inside arrow function is equal to this of closest lexical parent
in other words value of this is equal to value before calling the arrow function
 */


/*
in this example closest lexical parent of inner is outer so value of this equals to obj
itself
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