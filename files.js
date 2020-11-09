const fs = require("fs");

// -- Reading Files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("last line");

// -- Writing Files
// fs.writeFile("./docs/blog1.txt", "Hello Darkness my old friend", () => {
//   console.log("The File was written");
// });

// fs.writeFile("./docs/blog2.txt", "Hello I am a new file created", () => {
//   console.log("The File was written");
// });

// -- Directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Directory was created!");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("The directory was deleted!");
//   });
// }

// -- Deleting Files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File was deleted!");
  });
}
