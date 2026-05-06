function vowelDots(str) {
    const reg = "/[a,e,i,o,u]/g"
    return str.replace(reg, "$&.")
}
//console.log(vowelDots("hahahaha"))