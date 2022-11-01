/**
 * Метод принимает на вход строку ивозвращает число
 * value - передоваемаяя в метод строка
 *
 * менять имя функции нельзя,
 * создовать дополнитеьные функции можно
 */
 const stringToNumber = function (value) {
  return (isNaN(value) === false)
    ? Number(value)
    : parseInt(value, 10);
};

export default stringToNumber;