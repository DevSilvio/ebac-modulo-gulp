const gulpjs = require('gulp');

function funcaoPadrao(callback){
    console.log("Executando via gulp");
    callback();
}

function dizOi(callback){
    console.log("Olá gulp");
    dizTchau();
    callback();
}

function dizTchau (){
    console.log("Tachau gulp");
}

exports.default = gulpjs.series(funcaoPadrao,dizOi);
exports.dizOi = dizOi;