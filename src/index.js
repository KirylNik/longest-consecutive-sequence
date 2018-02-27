module.exports = function longestConsecutiveLength(array) {
    if (array.length == 0) { // если ничего не передано, то вернуть нуль.
        return 0;
    };
    let sortArray = array.sort(compareNumeric); // Отстортируем массив.
    let longestTemp = 1; // Тут будем накапливать длинну последовательности для сравнения с ранее найденой..
    let longest = 1; // Сюда будем записывать значение самой длинной последовательности.
    for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        if (sortArray[i] == sortArray[i+1] - 1) { // Если следующий элемент, на еденицу больше текущего, то
            longestTemp++;                        // увеличить буфер на 1.
        } else if (sortArray[i] == sortArray[i+1]) {
            continue;              // Если следующий элемент равен текущему, то идём дальше.
        } else if (longestTemp > longest) { // Если буфер больше длинны ранее найденой последовательности, то
            longest = longestTemp;           // самая большая послежовательность равна значению буфера.
            longestTemp = 1;        // Буфер 'обнуляем'.
        } else {
            longestTemp = 1; // Иначе буфер не больше или равен текущей максимальной длинне, обнуляем, идём дальше.
        };
    };

    function compareNumeric(a, b) {  // Функция сравнения, для sort.
        return a - b;
    };

    return(longest);
};