let num = 10;
for (i = 1; i <= num; i++) {
  let factors = 0;
  for (j = 1; j <= num; j++) {
    if (i % j == 0) {
      factors++;
    }
  }
  if (factors == 2) {
    console.log(i, "Prime");
  } else {
    console.log(i, "Not Prime");
  }
}