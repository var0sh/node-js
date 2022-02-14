// let number = 2; // number'ı tanımlarken içerisine Number değer attığımız için sonradan içerisine bir  string değer atadığımızda hata alıyoruz.

// number = 'Furkan';

// *******************************************

// let a; // Fakat burada a'yı tanımlayıp bırakıyoruz ve sonradan içerisine hangi değeri atarsak atalım bir hata almayız.

// a = 5;
// a = 'Furkan';
// a = true;

// *******************************************

// let b : number; // Burada b değişkenimizin Number değişken olduğunu belirtiyoruz ve içerisine sonradan string, bool, vs. bir değer atarsak hata alırız.

// b = 5;
// b = 'Furkan';
// b = true;

// ********************************************

// let c: number = 5;
// let d: string = 'Furkan';
// let e: boolean = false;
// let f: any;
// let g: number[] = [1, 2, 3]; /*Yada*/ let h: Array<number> = [1, 2, 3];
// let i: any[] = [1, 'a', true]; 
// let j: [string, number, boolean] = ['a', 1, false]; // tuple deniyor

// ********************************************

// // Enum Yapısı
// const krediPayment = 0;
// const havalePayment = 1;
// const eftPayment = 2;

// enum Payment {kredi = 0, kapidaOdeme = 3, havale = 1, eft = 2}

// let kredi = Payment.kredi; // output : 0
// let havale = Payment.havale; // output : 1
// let eft = Payment.eft; // output : 2
// let kapidaOdeme = Payment.kapidaOdeme; // output : 3