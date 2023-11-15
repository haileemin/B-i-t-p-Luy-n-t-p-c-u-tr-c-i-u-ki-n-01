// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

let a = +prompt("nhập a: ");
let b = +prompt("nhập b: ");
let c = +prompt("nhập c: ");

if (a > b) {
    if (a > c) {
        alert(a);
    } else {
        alert(c);
    }
} else if (b > c) {
    alert(b);
} else {
    alert(c);
}
