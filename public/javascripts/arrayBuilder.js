function arrayBuilder(input) {
    if (typeof input == 'string') {
        var endResult = input.split(",");
    } else if (typeof input == 'object') {
        console.log(input);
        var arrayLength = input.length;
        var endResult = []
        for (var i = 0; i < arrayLength; i++) {
            endResult.push(input[i].split(","))
        }
    }
    return endResult
}

module.exports = arrayBuilder;
