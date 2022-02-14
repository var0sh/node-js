function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
getAverage(10, 20, 30);
getAverage(10, 20); // c opsiyonel olduğu için ona parametre göndermesekte hata vermiyor
// *************************************************
// Eğer fonksiyona kaç parametre geleceğini belirtmek istemiyorsak şu şekil de kullanabiliriz;
function getAverage1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    return "result: ".concat(total / count);
}
getAverage1(4, 5, 90, 81, 54, 31);
// Aynı fonksiyonu şu şekilde de tanımlayabiliriz;
var getAverage2 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    return "result: ".concat(total / count);
};
console.log(getAverage1(10, 5, 90, 81, 54, 31));
