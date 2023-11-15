// Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho

// nhập phút
// nếu số  phút hơn 200 thì lấy n - 200 = a
// lấy a * 200
// b = ( 150*400)+(50*600)


let n = +prompt("Nhập số phút đã gọi điện của bạn: ")

if ( n > 200) {
    a = n - 200;
    c = (a * 200) + (150 * 400) + (50 * 600) + 25000;
    alert(c);
} else if (n < 200) {
    a = n - 50;
    c = (a * 400) + (50 * 600) + 25000;
    alert(c);
} else if (n < 50)  {
    c = (n * 600) + 25000;
    alert(c)
}