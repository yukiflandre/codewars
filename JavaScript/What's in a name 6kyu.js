// What's in a name?
//     ..Or rather, what's a name in? For us, a particular string is where we are looking for a name.
// Task
// Test whether or not the string contains all of the letters which spell a given name, in order.

// The format
// A function passing two strings, searching for one(the name) within the other. ``function nameInStr(str, name) { return true || false } ``
// Examples:
// nameInStr("Across the rivers", "chris")-- > true
//     ^      ^  ^^   ^
//     c      h  ri   s

// Contains all of the letters in "chris", in order.

// nameInStr("Next to a lake", "chris")-- > false

// Contains none of the letters in "chris".

// nameInStr("A crew that boards the ship", "chris")-- > false
// cr    h              s i
// cr                h  s i
// c     h      r       s i
//              ...

// Contains all of the letters in "chris", but not in order.
// 给定两个字符串，求其中字符串1是否包含字符串2且两个字符串的字母顺序要一致，同时字符串1中的字母只能匹配字符串2一次。
// "mmsshjjk" => "mshjk" === true but "mmmhjk" === false

//方法1
function nameInStr(str, name) {
    name = name.toLowerCase()
    str = str.toLowerCase()

    let index = 0 //定义一个计数器

    for (let char of str) { 
        //循环字符串str让其每一个字母和字符串name的index个字母进行匹配
        if (char === name[index])
            index++
    }

    return index === name.length //true or false
}

//方法2 通过indexof 和 replace方法
function nameInStr2(str, name) {
    str = str.toLowerCase()
    name = name.toLowerCase()
    let cur = 0
    for (const n of name) {
        cur = str.indexOf(n, cur)
        if (cur === -1) return false
        str = str.replace(n, "")
    }
    return true
}
nameInStr2('gf', 'fg')