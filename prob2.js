var num1 = 1;
var num2 = 2;
var num3 = num1+num2;
var counter = 2;

while(num3<4000000)
{

	if(num3%2===0){

		counter+=num3;
	}

	var newNum = num2+num3;
	num2=num3;
	num3=newNum;
	
}

console.log(counter);