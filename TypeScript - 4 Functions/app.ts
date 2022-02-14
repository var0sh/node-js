function getAverage(a: number, b: number, c?: number): string{
    
    let total = a + b;
    let count = 2;

    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    
    const result = total / count;
    return 'result : ' + result;
}

getAverage(10, 20, 30);
getAverage(10, 20); // c opsiyonel olduğu için ona parametre göndermesekte hata vermiyor

// *************************************************

// Eğer fonksiyona kaç parametre geleceğini belirtmek istemiyorsak şu şekil de kullanabiliriz;
function getAverage1(...a: number[]): string {
    let total = 0;
    let count = 0;

    for(let i = 0; i < a.length; i++){
        total += a[i];
        count++;
    }

    return `result: ${total / count}`;
}

getAverage1(4, 5, 90, 81, 54, 31);

// Aynı fonksiyonu şu şekilde de tanımlayabiliriz;
const getAverage2 = (...a: number[]): string => { // fonksiyondan dönecek değeri string yerine void olarak belirtirsek fonksiyondan bir değer dönmeyeceğini belirtmiş oluruz.
    let total = 0;
    let count = 0;

    for(let i = 0; i < a.length; i++){
        total += a[i];
        count++;
    }

    return `result: ${total / count}`;
}

console.log(getAverage1(10, 5, 90, 81, 54, 31));