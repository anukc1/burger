//dependencies 
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");


//port

var PORT = process.env.PORT || 4000;

//public
app.use(express.static('public'))

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
  console.log("app listening in port: http://localhost:" + PORT)
});

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: "8889",
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });

//   connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
  
//     console.log("connected as id " + connection.threadId);
//   });
  

  // app.get("/", function(req, res) {
  //     connection.query("SELECT * FROM burgers;", function(err, data) {
  //         if(err) {
  //           console.log("error getting at app.")
  //         }
  //         console.log("the solution is: ", data);
         
  //         res.render("index", {burger: data})
  //     });
  // });

  // app.post("/api/burgers", function(req,res){

  //   connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [req.body.burger_name, req.body.devoured], 
  //   function(err, result){
  //     if(err) {
  //       console.log("error at post route");
  //     }
  //     res.json({ id: result.insertId});
  //     console.log({id:result.insertId});
  //   });

  // });
  


//routes

// app.post("/api/burgers", function(req, res){
//     console.log("you sent " + req.body.burgers)
// })
