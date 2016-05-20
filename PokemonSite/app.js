var express = require('express');
var orm = require("orm");
var app = express();
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/pages", express.static(__dirname + '/pages'));
app.use("/images", express.static(__dirname + '/images'));


var monArr = [];
for (i = 0; i < 151; i++) {
    monArr.push([]);
}
var j = 0;
orm.connect("mysql://ayylmao:berningman123@mysql.hlaingfahim.com/w3pokedex", function (err, db) {
    if (err) throw err;

    var Monster = db.define("monster", {
        name: String,
        type1: String,
        type2: String,
        baseHp: Number,
        baseAtk: Number,
        baseDef: Number,
        baseSpAtk: Number,
        baseSpDef: Number,
        baseSpeed: Number,
        totalStats: Number,
        description: String

    });

    for (i = 0; i < 151; i++) {

        Monster.find({
            id: i + 1
        }, 1, function (err, monster) {
            monArr[j].push(monster[0].id);
            monArr[j].push(monster[0].name);
            monArr[j].push(monster[0].type1);
            monArr[j].push(monster[0].type2);
            monArr[j].push(monster[0].baseHp);
            monArr[j].push(monster[0].baseAtk);
            monArr[j].push(monster[0].baseDef);
            monArr[j].push(monster[0].baseSpAtk);
            monArr[j].push(monster[0].baseSpDef);
            monArr[j].push(monster[0].baseSpeed);
            monArr[j].push(monster[0].totalStats);
            monArr[j].push(monster[0].description);
            if(j === 150){
            console.log("All Pokemon Added");
//            console.log(monArr[j][1] + " " + monArr[j][0]);
            }
            j++;

        });
    }

});

//console.log(monArr[j][1] + " " + monArr[j][0]);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        monArr: monArr
    })
});

app.listen(3000);