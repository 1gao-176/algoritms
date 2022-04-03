const a = { value: 'a' }
let p = a
let i = 0
while (i < 5) {
    p.next = { value: i }
    p = p.next;
    i++
}
console.log(p , a);

