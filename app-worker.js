const { resolve } = require("path");
const { Worker } = require("worker_threads");


const compute = ({ array }) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData: { array } });

    worker.on("message", (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on("error", (err) => {
      reject(err);
    });

    worker.on("exit", () => {
      console.log("Worker has exited");
    });
  });
};

const main = async () => {
	try {
		performance.mark("start");
  const result = await Promise.all([
    compute([25, 20, 31]),
    compute([25, 20, 31]),
    compute([25, 20, 31]),
    compute([25, 20, 31]),
  ]);
  console.log(result);

  performance.mark("end");

  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main").pop());
	} catch (error) {
		console.error(error.message);
	}
};

main();
