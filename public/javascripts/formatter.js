module.exports = {
    apa_style: function(list) {
        var name = list[0];
        var year = list[1];
        var title = list[2];
        var publisher = list[3];
        var journal = list[4];
        var pages = list[5];
        var city = list[6];
        var type = list.splice(-1);
        if (type == 'article') {
            var ref_text = `${name}. (${year}). ${title}. ${journal.italics()}, (pp ${pages}).` 
        } else if (type == 'book') {
            var ref_text = `${name}. (${year}). ${title.italics()}. ${publisher}.`
        } else if (type == 'chapter') {
            var ref_text = `${name}. (${year}). ${title}. In ${journal.italics()}, (pp ${pages}). ${publisher}, ${city}.`
        }
        //let ref_text = `${name}. (${year}). ${title.italics()}. ${publisher}`
        return ref_text;
    }
}
