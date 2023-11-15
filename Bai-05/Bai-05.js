// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

let a = +prompt("Nhập điểm bài kiểm tra: ");
let b = +prompt("Nhập điểm thi giữa kì: ");
let c = +prompt("Nhập điểm thi cuối kì: ");

n = (a + b + c) / 3;

if (n >= 8) {
    alert("HSG");
} else if (n >= 6.5) {
    alert("HSK");
} else {
    alert("HSY");
}