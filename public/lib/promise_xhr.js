/**
 * Created by jefferson.wu on 2/18/2016.
 */

// GET DATA FUNCTION
function getData(url) {
    return new Promise(function(resolve, reject) {

        //new XHR object
        var xhr = new XMLHttpRequest();

        //open
        xhr.open('GET', url);

        //same as readyStateChange
        xhr.onload = function() {
            if(xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        //handle network errors
        xhr.onerror = function() {
            reject(Error("Network error"));
        };

        //fire the lasers!
        xhr.send();
    });
}

