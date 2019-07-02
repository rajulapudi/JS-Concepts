function a() {
    return {
        b: function b() {
            return {
                c: function c() {
                    console.log("Hello")
                }
            }
        }
    }
}

a().b().c() will return hello - here . (dot) notation indicates that we are working with objects

function a() {
    return {
        b: {c: function c(){console.log("hello")}}}}




var a = "abc"
var b = "cde"

