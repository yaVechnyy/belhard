let choice = Number(prompt("Выберите многогранник:\nКуб(1)\nПараллелепипед(2)\nПрямоугольный параллелепипед(3)\nПризма(4)\nПирамида(5)"));
let s, d, sBase, sSide, h, v;
switch(choice)
{
	case 1:
		let a = prompt("Введите ребро куба: ");
		s = 6 * a**2;
		d = a * Math.sqrt(3);
		alert("Объём куба: " + a**3 + "\nПлощадь поверхности куба: " + s + "\nДлина диагонали куба: " + d);
		break;
	case 2:
	  sBase = Number(prompt("Введите площадь основания параллелепипеда: "));
		sSide = Number(prompt("Введите боковую площадь параллелепипеда: "));
		h = Number(prompt("Введите высоту параллелепипеда: "));
		v = sBase * h;
	  s = 2*sBase + sSide;
		alert("Объём параллелепипеда: " + v + "\nПлощадь поверхности параллелепипеда: " + s);
		break;
	case 3:
	 let length = Number(prompt("Введите длину прямоугольного параллелепипеда: "));
	 let width = Number(prompt("Введите ширину прямоугольного параллелепипеда: "));
		h = Number(prompt("Введите высоту прямоугольного параллелепипеда: "));
		v = length * width * h;
		s = 2*length*width + 2*length*h + 2*width*h;
		d = Math.sqrt(length**2 + width**2 + h**2);
		alert("Объём прямоугольного параллелепипеда: " + v + "\nПлощадь поверхности прямоугольного параллелепипеда: " + s + "\nДлина диагонали прямоугольного параллелепипеда: " + d);
		break;
	case 4:
		sBase = Number(prompt("Введите площадь основания призмы: "));
		sSide = Number(prompt("Введите боковую площадь призмы: "));
		h = Number(prompt("Введите высоту призмы: "));
		v = sBase * h;
		s = 2*sBase + sSide;
		alert("Объём призмы: " + v + "\nПлощадь поверхности призмы: " + s);
		break;
	case 5:
		sBase = Number(prompt("Введите площадь основания пирамиды: "));
		sSide =Number( prompt("Введите боковую площадь пирамиды: "));
		h = Number(prompt("Введите высоту пирамиды: "));
		v = (1/3 * sBase) * h;
		s = 2*sBase + sSide;
		alert("Объём пирамида: " + v + "\nПлощадь поверхности пирамида: " + s);
		break;
}