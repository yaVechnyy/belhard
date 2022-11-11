'use strict';

const price = {
	discountsOnQuantity: {
		"15000": "10",
     "30000": "15",
     "50000": "19",
	},
	regions: {
		poland: {
			discounts: '3',
			persons: {
				vasya: {
					amount: '24500',
					personal: '5',
				},
		    alex: {
						amount: '60500',
						personal: '1.5',
					},
			},
		},
		greece: {
			discounts: '6',
			persons: {
	      alex: {
					amount: '20300',
					personal: '1.5',
				},
			  sveta: {
					amount: '2500',
					personal: '2',
				},
			}
		},
    hungary: {
			discounts: '4.3',
			persons: {
	      vasya: {
					amount: '49000',
					personal: '5',
				},
	      alex: {
					amount: '12300',
					personal: '1.5',
				},
			  sveta: {
					amount: '100500',
					personal: '2',
				},
			}
		}
	}
}

const {discountsOnQuantity, regions} = price;

//personal discount
function vasya(){
	return this.regions.hungary.persons.vasya.personal;
}
function alex(){
	return this.regions.hungary.persons.alex.personal;
}
function sveta(){
	return this.regions.hungary.persons.sveta.personal;
}

const vasyaDiscount = vasya.bind(price);
const alexDiscount = alex.bind(price);
const svetaDiscount = sveta.bind(price);


//region discounts
function polandDiscounts(){
	return this.regions.poland.discounts;
} 
function greeceDiscounts(){
	return this.regions.greece.discounts;
} 
function hungaryDiscounts(){
	return this.regions.hungary.discounts;
} 

const polandDiscount = polandDiscounts.bind(price);
const greeceDiscount = greeceDiscounts.bind(price);
const hungaryDiscount = hungaryDiscounts.bind(price);

//amount
function vasyainPoland(){
	return this.regions.poland.persons.vasya.amount;
}
function vasyainHungary(){
	return this.regions.hungary.persons.vasya.amount;
}

function alexinPoland(){
	return this.regions.poland.persons.alex.amount;
}
function alexinGreece(){
	return this.regions.greece.persons.alex.amount;
}
function alexinHungary(){
	return this.regions.hungary.persons.alex.amount;
}

function svetainGreece(){
	return this.regions.greece.persons.sveta.amount;
}
function svetainHungary(){
	return this.regions.hungary.persons.sveta.amount;
}

const vasyainPoland_amount = vasyainPoland.bind(price);
const vasyainHungary_amount = vasyainHungary.bind(price);

const alexinPoland_amount = alexinPoland.bind(price);
const alexinGreece_amount = alexinGreece.bind(price);
const alexinHungary_amount = alexinHungary.bind(price);

const svetainGreece_amount = svetainGreece.bind(price);
const svetainHungary_amount = svetainHungary.bind(price);

//скидка от общей стоимости покупки
function discountQuantity(amount){
	if (amount <= 15000){
		return discountsOnQuantity[15000];
	} else if (amount > 15000 && amount <= 30000){
		return discountsOnQuantity[30000];
	} else {
		return discountsOnQuantity[50000];
	}
}

//метод расчёта финальной стоимости покупки
function finalCost(personalDiscount){
	return function (regionDiscount){
		return function (quantityDiscount){
			return function (amount){
				amount = amount - (amount/100) * personalDiscount;
				amount = amount - (amount/100) * regionDiscount;
				amount = amount - (amount/100) * quantityDiscount;
				return amount;
			}
		}
	}
}

let messageRegion = prompt('Welcome to the system of flexible discounts!\nWhat is your region? (poland, greece, hungary)');
let messageName = prompt('What is your name? (vasya, alex, sveta)');

switch(messageRegion.toLowerCase()) {
	case "poland":
		switch(messageName.toLowerCase()){
			case "vasya":
				alert(`Сумма покупки: ${vasyainPoland_amount()}\nПерсональная скидка: ${vasyaDiscount()}%\nРегиональная скидка: ${polandDiscount()}%\nКоличественная скидка: ${discountQuantity(vasyainPoland_amount())}%\n` + 
					'Итоговая сумма: ' + finalCost(vasyaDiscount())(polandDiscount())(discountQuantity(vasyainPoland_amount()))(vasyainPoland_amount()).toFixed());
				break;
			case "alex":
				alert(`Сумма покупки: ${alexinPoland_amount()}\nПерсональная скидка: ${alexDiscount()}%\nРегиональная скидка: ${polandDiscount()}%\nКоличественная скидка: ${discountQuantity(alexinPoland_amount())}%\n` + 
					'Итоговая сумма: ' + finalCost(alexDiscount())(polandDiscount())(discountQuantity(alexinPoland_amount()))(alexinPoland_amount()).toFixed());
				break;
			default:
				alert("Имя отсутствует. Повторите попытку");
			}
			break;
	case "greece":
		switch(messageName){
			case "alex":
				alert(`Сумма покупки: ${alexinGreece_amount()}\nПерсональная скидка: ${alexDiscount()}%\nРегиональная скидка: ${greeceDiscount()}%\nКоличественная скидка: ${discountQuantity(alexinGreece_amount())}%\n` + 
				'Итоговая сумма: ' + finalCost(alexDiscount())(greeceDiscount())(discountQuantity(alexinGreece_amount()))(alexinGreece_amount()).toFixed());
				break;
			case "sveta":
				alert(`Сумма покупки: ${svetainGreece_amount()}\nПерсональная скидка: ${svetaDiscount()}%\nРегиональная скидка: ${svetaDiscount()}%\nКоличественная скидка: ${discountQuantity(svetainGreece_amount())}%\n` + 
				'Итоговая сумма: ' + finalCost(svetaDiscount())(svetaDiscount())(discountQuantity(svetainGreece_amount()))(svetainGreece_amount()).toFixed());
				break;
			default:
				alert("Имя отсутствует. Повторите попытку");
		}
			break;
	case "hungary":
		switch(messageName){
			case "vasya":
				alert(`Сумма покупки: ${vasyainHungary_amount()}\nПерсональная скидка: ${vasyaDiscount()}%\nРегиональная скидка: ${hungaryDiscount()}%\nКоличественная скидка: ${discountQuantity(vasyainHungary_amount())}%\n` + 
				'Итоговая сумма: ' + finalCost(vasyaDiscount())(hungaryDiscount())(discountQuantity(vasyainHungary_amount()))(vasyainHungary_amount()).toFixed());
				break;
			case "alex":
				alert(`Сумма покупки: ${alexinHungary_amount()}\nПерсональная скидка: ${alexDiscount()}%\nРегиональная скидка: ${hungaryDiscount()}%\nКоличественная скидка: ${discountQuantity(alexinHungary_amount())}%\n` + 
				'Итоговая сумма: ' + finalCost(alexDiscount())(hungaryDiscount())(discountQuantity(alexinHungary_amount()))(alexinHungary_amount()).toFixed());
				break;
			case "sveta":
				alert(`Сумма покупки: ${svetainHungary_amount()}\nПерсональная скидка: ${svetaDiscount()}%\nРегиональная скидка: ${svetaDiscount()}%\nКоличественная скидка: ${discountQuantity(svetainHungary_amount())}%\n` + 
				'Итоговая сумма: ' + finalCost(svetaDiscount())(hungaryDiscount())(discountQuantity(svetainHungary_amount()))(svetainHungary_amount()).toFixed());
				break;
			default:
				alert("Имя отсутствует. Повторите попытку");
		}
			break;
	default:
		alert("Регион отсутствует. Повторите попытку");
}

