var x = 0;
var y = 1;
var z;

fib[0] = 0;
fib[1] = 1;

for (i = 2; i <= 10; i++) {
  alert(x + y);
  fib[i] = x + y;
  x = y;
  z = y;
}
