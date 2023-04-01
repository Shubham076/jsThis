function timeout() {
    setTimeout(function() {
        //belongs to timeout object
        console.log(this.constructor.name)
    },1)
}

function Timeout() {
    setTimeout(() => {
        console.log("Arrow function in timeout")
        console.log(this.toString())
    })
}

timeout()
Timeout()