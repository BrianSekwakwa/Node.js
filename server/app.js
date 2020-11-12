// -- NOTE -- //
// - Express runs from top to down
// - Put your catch all statements at the bottom of the code

const { static } = require("express");
const express = require("express");
const morgan = require("morgan");

// -- Instantiating an express app
const app = express();

// -- Register view engine
app.set('view engine', 'ejs');
// app.set("views", "./NameOfFolder") -- If name your folder something else

// -- Listening to requests
app.listen(3000);

// -- Using Middlewares
// app.use((req,res, next) => {
//     console.log('New request made:')
//     console.log('Host:', req.hostname)
//     console.log('Path:', req.path)
//     console.log('Method:', req.method)
//     next();
// })

// app.use((req,res,next) => {
//     console.log("I was next in line")
//     next();
// })

// -- Using 3rd Party Middleware called Morgan
app.use(morgan('dev'));

// -- Serving static Files from the server
app.use(express.static('public'));

app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    // res.sendFile(__dirname + "/views/index.html"); -- This is one way to do it
    // res.sendFile("./views/index.html", { root: __dirname});

    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur"}
    ]

    // -- Using ejs
    res.render("index", { title: "Home", blogs});

})

app.get("/about", (req, res) => {
    // res.send("<p>about Page</p>");
    // res.sendFile("./views/about.html", { root: __dirname});
    res.render("about",  { title: "About"});
})

app.get("/blogs/create", (req,res) => {
    res.render('create',  { title: "Create A New Blog"});
})

// -- Redirecting
// app.get("/about-us", (req,res) => {
//     res.redirect("/about");
// })

// 404 Page
app.use((req, res) => {
    // res.status(404).sendFile("./views/404.html", { root: __dirname});
    res.status(404).render("404",  { title: "404"});
})
