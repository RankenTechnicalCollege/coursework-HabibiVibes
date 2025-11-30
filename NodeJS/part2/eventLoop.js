console.log('start');

setTimeout(() => {
    console.log('TimeoutCallback');
}, 0);

setImmediate(() => {
    console.log('ImmediateCallback');
});

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('End');