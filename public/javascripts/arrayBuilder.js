function arrayBuilder(input) {
    if (typeof input == 'string') {
        
        var temp = input.split(";");
        var list = [];
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].charAt(0) == ',') {
                temp[i] = temp[i].slice(1)
            }
            list.push(temp)
        }
        endResult = list;
    } else if (typeof input == 'object') {
        var arrayLength = input.length;
        var endResult = []
        for (var i = 0; i < arrayLength; i++) {
            var temp = input[i].split(";")
            for (var j = 0; j  < temp.length; j++) {
                if (temp[j].charAt(0) == ',') {
                    temp[j] = temp[j].slice(1)
                }
            }
            endResult.push(temp);
        }
    }
    return endResult
}

module.exports = arrayBuilder;
