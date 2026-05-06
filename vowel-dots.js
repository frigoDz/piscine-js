const vowels = "/[a,e,i,o,u]/g"
function vowelDots(str) {
    return str.replace(vowels, "$&.")
}
//str = "hahahahaha"
//console.log(vowelDots(str))