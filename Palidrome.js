function isPalindrome(str) {

    let newStr;
    let newStrArr;
    let palidrome;

    if (typeof str !== "number") { // Проверяем, явлются ли данные числом
        newStr = str.toLowerCase(); // Переводим все в нижний регистр, если это текст
    } else {
        newStr = str.toString(); // Переводим данные в строку, если это числа
    };

    newStrArr = newStr.split(''); // Создем массив символов
    newStr = newStr.replace(/\s/g, ''); // Возвращаем строку из символов

    newStrArr.reverse(); // Переворачиваем массив

    palidrome = newStrArr.join('').replace(/\s/g, ''); // Возвращаем перевернутую строку из символов

    if (+palidrome !== NaN) {
        +palidrome;
    }; // Проверяем, что полученная строка не число

    if (palidrome === newStr) {
        return true; // Если сравнение успешно - это палидром
    } else {
        return false; //Если сравнение не успешно - это не палидром
    };
};

    console.log(isPalindrome('Anna')); // true
    console.log(isPalindrome('А роза упала на лапу Азора')); // true
    console.log(isPalindrome('Вася')); // false
    console.log(isPalindrome('12321')); // true
    console.log(isPalindrome('123212')); // false
