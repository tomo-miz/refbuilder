var formatter = require('./formatter.js');

function saveToFile(list) { 
    var text = [];
    for (var i = 0; i < list.length; i ++) {
        var formated = formatter.apa_style(list[i]);
        text.push(formated);
    }

    //var blob = (text, {type: "text/plain;charset=utf-8"});
    //FileSaver.saveAs(blob, "test.txt");
    return text
}

module.exports = saveToFile;
