// -- The Global Object
// - Similar to the window object in the browser, it is an object with methods
// - and properties we get with node out of the box

// console.log(global);
// setTimeout(() => {
//   console.log("I waiting 6 seconds");
//   clearInterval(int);
// }, 6000);

// const int = setInterval(() => {
//   console.log("I am every second");
// }, 1000);

console.log(__dirname); // Gives us the directory(path) of the current file we are working on
console.log(__filename); // Gives us the path of the file we are working on with the file name included
