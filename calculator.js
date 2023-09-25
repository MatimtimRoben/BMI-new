// const express = require("express");
// const app = express();

// app.get('/', function(req, res) {
//     res.send("Hello WD80!")
// });

// app.get('/about', function(req, res) {
//     res.send("Hello here's something about me!")
// });

// app.get('/contact', (req, res) => {
//     res.send("You can reach out to me with this number 09**-***-****")
// });

// app.get('/location', (req, res) => {
//     res.send("Taguig City")
// });

// app.listen(2000, () => {
//     console.log("server started on port 2000")
// })

const express = require ("express");
const app = express ();

app.use(express.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post ("/", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / (height * height);
    
    res.send("Your BMI is " + result);
});

//adding port
app.listen(5000, function(){
    console.log("Server is running on port 5000");
});