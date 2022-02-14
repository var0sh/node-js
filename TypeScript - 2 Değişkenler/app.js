var number = 2; // number'ı tanımlarken içerisine Number değer attığımız için sonradan içerisine bir  string değer atadığımızda hata alıyoruz.
number = 'Furkan';

// *******************************************

var a; // Fakat burada a'yı tanımlayıp bırakıyoruz ve sonradan içerisine hangi değeri atarsak atalım bir hata almayız.
a = 5;
a = 'Furkan';
a = true;

// *******************************************

var b; // Burada b değişkenimizin Number değişken olduğunu belirtiyoruz ve içerisine sonradan string, bool, vs. bir değer atarsak hata alırız.
b = 5;
b = 'Furkan';
b = true;

// ********************************************

var c = 5;
var d = 'Furkan';
var e = false;
var f;
var g = [1, 2, 3]; /*Yada*/
var h = [1, 2, 3];
var i = [1, 'a', true];
var j = ['a', 1, false]; // tuple deniyor

// ********************************************

// Enum Yapısı
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["kapidaOdeme"] = 3] = "kapidaOdeme";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi; // output : 0
var havale = Payment.havale; // output : 1
var eft = Payment.eft; // output : 2
var kapidaOdeme = Payment.kapidaOdeme; // output : 3
