let fs = require('fs');
let text = fs.readFileSync("input.txt", 'utf-8');
let tab = (text.split('\n')).map((i) => Number(i));

function p1() {
    let res = 0
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > tab[i - 1])
            res++
    }
    return res
}

function p2() {
    let res = 0
    for (let i = 0; i < tab.length; i++) {
        if (i + 3 < tab.length) {
            let prev_sum = tab[i] + tab[i + 1] + tab[i + 2]
            let current_sum = tab[i + 1] + tab[i + 2] + tab[i + 3]
            if (prev_sum < current_sum)
                res++
        }
    }
    return res
}
console.log(p1(), p2())
