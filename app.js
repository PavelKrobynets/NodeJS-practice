// const perf_hooks = require("perf_hooks")

const factorial = require("./factorial");

// const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
// 	console.log(items.getEntries);
// 	const entry = items.getEntriesByName('slow').pop();
// 	console.log(`${entry.name} ${entry.duration}`);
// 	observer.disconnect();
// })

// performanceObserver.observe({entryTypes: ["measure"]})

// function slow() {
// 	performance.mark('start')
// 	const arr = [];
// 	for (let i = 0; i < 10000000; i++) {
// 		arr.push(i);
// 	}
// 	performance.mark('end')
// 	performance.measure("slow", "start", "end");
// 	console.log(performance.getEntriesByName("slow"));
// }

// slow()
const factorial1 = require("./factorial");

const compute = (array) => {
  const arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i * i);
  }
  return array.map((el) => factorial(el));
};


const main = () => {
  performance.mark("start");
  const result = [
    compute([25, 20, 31]),
    compute([25, 20, 31]),
    compute([25, 20, 31]),
    compute([25, 20, 31]),
  ];
  console.log(result);

  performance.mark("end");

  performance.measure("main", "start", "end");
};

main();
