var fs = require('fs');
var routesArr = "";
for (var i = 0; i <= 50; i++) {
    routesArr = routesArr + "posts/" + i + "\n";
    console.log(routesArr);
}
fs.writeFile('routes.txt', routesArr, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("Routes generated!");
    }
});
