// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng

let a = +prompt("Nhập doanh số bán hàng: ");

if (a >= 100) {
    n = a * 5 / 100;
    alert(n);
} else if (100 < a <= 300) {
    n = a * 10 / 100;
    alert(n);
} else if (a > 300) {
    n = a * 20 / 100;
    alert(n);
}
