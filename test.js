function maxMin(operations, x) {
  const results = [];
  let currentMin = Infinity;
  let currentMax = -Infinity;

  for (let i = 0; i < operations.length; i++) {
    console.log(`Processing operation: ${operations[i]}, Value: ${x[i]}`);
    if (operations[i] === "push") {
      currentMin = Math.min(currentMin, x[i]);
      currentMax = Math.max(currentMax, x[i]);
    } else if (operations[i] === "pop") {
      results.push(currentMax - currentMin);
      console.log(`Pushing result: ${currentMax - currentMin}`);
    }
  }

  return results;
}

maxMin();
