var orm = require("orm");
var monArr = [];
orm.connect("mysql://ayylmao:berningman123@mysql.hlaingfahim.com/w3pokedex", function (err, db) {
    if (err) throw err;

    var monster = db.define("monster", {
        name: String,
        number: String,
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

    var weakness = db.define("weakness", {
        name: String
    });

    var ability = db.define("ability", {
        name: String,
        description: String
    });

//    monster.hasMany("weaknesses", weakness)
            monster.hasMany("abilities", ability)

    monster.sync(function (err) {
            if (err) throw err;

//            monster.get(1, function (err, pokemon) {
//                    weakness.find({
//                            name: 'Fire'
//                        },
//                        function (err, result) {
//                            console.log("hh");
//                            pokemon.addWeaknesses([result],
//                                function (err) {
//                                    // ...
//                            });
//                    });
            });
    });
