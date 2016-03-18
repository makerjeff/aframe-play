/**
 * Random String Generators
 * Created by jeffersonwu on 3/14/16.
 *
 * TODO: make this both front / back end compatible.
 */

//MakeID namespace
var MakeId = {};

/**
 * Make and ID.
 * @param chars Number of characters to generate.
 * @returns {string} Returns a random string of characters based on 'chars'.
 */
MakeId.make = function(chars) {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < chars; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

//TODO MAYBE add persistent log of routes (text log)
//TODO: MAYBE add MongoDB support
