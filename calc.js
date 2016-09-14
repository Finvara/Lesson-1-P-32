/**
 * Разработать логику работы калькулятора
 * Задача при n заданых чисел и при n-1 знаков, посчитать правильный результат выполнения всех операций
 * Важно соблюдать приоритетность выполнения операций
 */
var values = [16, 123, 454, 6434, 2222, 123, 434];
var operators = ["+","*","-","+","*","/"];
var buf;
var bufchar;
var result;

for(var i=0;i<operators.length;i++){
for(var j=0;j<operators.length;j++)
{
  
 switch (operators[j])
  {
    case "+":
       if(j!==operators.length-1){
       buf = values[j+2];
       values[j+2]=values[j+1];
       values[j+1]=buf;
       buf = operators[j];
       operators[j]=operators[j+1];
       operators[j+1]=buf;}
       break;
    case "-":
       if(j!==operators.length-1){
       buf = values[j+2];
       values[j+2]=values[j+1];
       values[j+1]=buf;
       buf = operators[j];
       operators[j]=operators[j+1];
       operators[j+1]=buf;}
       break;}
}
}
result=values[0];
for(var i=0;i<values.length-1;i++)
{
    switch (operators[i])
    {
    case "+":
        result+=values[i+1];
        break;
    case "-":
        result-=values[i+1];
        break;
    case "/":
        result/=values[i+1];
        break;
    case "*":
        result*=values[i+1];
        break;}
}
console.dir(values);
console.dir(operators);
console.log(result);