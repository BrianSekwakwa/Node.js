// -- NOTE -- //
// - Express runs from top to down
// - Put your catch all statements at the bottom of the code

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");

// -- Instantiating an express app
const app = express();

// -- Connection String to MongoDB
const dbURI = "mongodb+srv://briancodes:refiloe1994@cluster0.xaody.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// -- Register view engine
app.set('view engine', 'ejs');
// app.set("views", "./NameOfFolder") -- If name your folder something else

// -- Listening to requests


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

// -- Mongoose and Mongo sandox routes
// app.get("/add-blog", (req,res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     // Saving data to the database
//     blog.save()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// app.get("/all-blogs", (req,res) => {
//     // Getting all the data in a specific collection using find
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// app.get("/single-blog", (req,res) => {
//     Blog.findById('5fae44229d3d2675649831b1')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    // res.sendFile(__dirname + "/views/index.html"); -- This is one way to do it
    // res.sendFile("./views/index.html", { root: __dirname});

    res.redirect("/blogs")

})

app.get("/blogs", (req,res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
        console.log(err);
    })
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
