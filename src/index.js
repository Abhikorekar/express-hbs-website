/* const express = require("express");
const path = require("path");
const app = express();
const port = 8000;


console.log(path.join(__dirname));

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");


app.use(express.static(staticPath));


// To set the view engine.
app.set('view engine', 'hbs');

// To change the name of views folder.
app.set("views", templatePath);    // 

app.get("/", (req,res) =>
{
    res.render('index');
});

app.listen(port, () => 
{
    console.log("Successfully completed");
    
})



*/


const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const requests = require("requests");

const app = express();
const port = 8000;

// Paths
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// View engine setup
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Serve static files
app.use(express.static(staticPath));

// Routes
app.get("/", (req, res) => {
  res.render("index", { dynamic : "handlebar"});
});


// 404 Page (keep this LAST)
app.use((req,res) => 
{
    res.status(404).render('404', {errorComment: "Error page 404 not found"})
})


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


