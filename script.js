let bank_account = Number(prompt("Введите баланс банковского счёта компании: "));
const cost_phone = Number(prompt("Введите стоимость покупаемого телефона: "));
const cost_kit = Number(prompt("Введите стоимость комплекта аксессуаров для каждого устройства: "));
const tax_rate = Number(prompt("Введите ставку налога закупки(%): "));

let sum = 0;
let amount_phone = 0;
let amount_kit = 0;
let bank = bank_account;

while (bank >= cost_kit){
  if (bank >= cost_kit &&
      bank <= cost_phone)
    {
      bank -= cost_kit;
      sum += cost_kit;
      amount_kit ++
    }
  else{
      bank -= cost_phone;
      sum += cost_phone;
      amount_phone ++
  }
}

  let result = tax(tax_rate, sum);
  alert(`Сумма покупки: ${result}$`);
  alert(`Количество телефонов: ${amount_phone}`);
  alert(`Количество чехлов: ${amount_kit}`);

if(bank <= bank_account)
  alert("Покупка возможна? Да");
else
  alert("Покупка возможна? Нет");

function tax(tax_rate, sum){
  let a = (tax_rate * sum) / 100;
  let result = a + sum;
  return result.toFixed(2)
}