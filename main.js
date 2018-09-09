
//задание 1
var a = 1, b = 1, c, d;

// префиксная форма сначала увеличивает a до 2, а потом возвращает
c = ++a; alert(c); // 2

// постфиксная форма увеличивает, но возвращает старое значение
d = b++; alert(d); // 1

// сначала увеличили a до 3, потом использовали в арифметике
c = (2+ ++a); alert(c); // 5

// увеличили b до 3, но в этом выражении оставили старое значение
d = (2+ b++); alert(d); // 4

// каждую переменную увеличили по 2 раза
alert(a); // 3
alert(b); // 3

// задание 2
var a = 2;
var x = 1+(a*=2) // 4
// отсюда x = 1+4= 5

//задание 3
console.log ('задание 3');
var a = +prompt( 'Введите число a' ),
    b = +prompt( 'Введите число b' );

if ( a >= 0 && b >= 0 ) {
    alert( a - b );
}
else if ( a < 0 && b < 0) {
    alert( a * b );
}
 else if (a > 0 && b < 0 || a < 0 && b > 0) {
 	alert (a + b);
}

//задание 4
console.log ('задание 4');
var a;
a = 10;
a= +prompt ('Введите число от 10 до 15');
switch (a) {
	case 10:
	alert ( 'Ваше число 10');
	break;
	case 11:
	alert ( 'Ваше число 11');
	break;
	case 12:
	alert ( 'Ваше число 12');
	break;
	case 13:
	alert ( 'Ваше число 13');
	break;
	case 14:
	alert ( 'Ваше число 14');
	break;
	case 15:
	alert ( 'Ваше число 15');
	break;	
	}
//задание 5
console.log ('задание 5');
function add ( a, b ) { //Сложение 
    return a + b;
}
function sub ( a, b ) { //Вычитание
    return a - b;
}
function div ( a, b ) { //Деление
    return a / b;
}
function mul ( a, b ) { //Умножение
    return a * b;
}

//задание 6
console.log ('задание 6');
function mathOperation ( arg1, arg2, operation ) {
	switch (operation) {
		case '-':
		return sub ( arg1, arg2);
		break;
	}

