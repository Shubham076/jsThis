
/*

inside a class value of this equals to object of class itself
 */
class A {

    constructor(name) {
        this.name = name
    }

    callPrint() {
        this.print()
    }
    print() {
        console.log(this)
        console.log(this.name)
    }
}

a = new A("Shubham")
a.callPrint()