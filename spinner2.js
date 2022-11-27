// spin with a default cycle of 2 and interval of 200ms
const spin = (cycle = 2, interval = 200) => {
  // default spinner characters
  const spinner = ["|", "/", "-", "\\"];
  // number of shapes is equivalent to the length of spinner array
  const shapes = spinner.length;
  // iterate until the number of cycle is reached, then add 1 for the initial spinner
  for (let i = 0; i < shapes * cycle + 1; i++) {
    setTimeout(() => {
      // since more than 1 cycle, use modulus to reiterate spinner elements
      process.stdout.write(`\r${spinner[i % shapes]}   `);
      // initial setTimeout timer is 100ms, then add interval multiplied by counter
    }, 100 + interval * i);
  }
};

// call the function, with or without parameters
spin();
// spin(5, 300);