module.exports = {
    apa_style: function(list) {
        var last_name = list[0];
        var first_name = list[1];
        var year = list[2];
        var title = list[3];
        var publisher = list[4];


        let ref_text = `${last_name}. ${first_name}. (${year}). ${title}.italics(). ${publisher}`
        //let ref_text = list[0] + '. ' list[1] + '(' + list[2] + ')' + list[3].italics() + list[4];
        return ref_text;
    }
}
