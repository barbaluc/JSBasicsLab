(function(global) {
    'use strict';

    var JS_BASICS={};
    var toto;

    JS_BASICS.isNumberEven = function(i) {
        return i % 2 === 0;
    };

    JS_BASICS.getFileExtension = function(str) {
        return (str.lastIndexOf(".") === -1) ? false : str.substring(str.lastIndexOf(".") + 1, str.length);
    };

    JS_BASICS.longestString = function(arr) {
        var maxString, i, maxLength = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i].length > maxLength && typeof arr[i] == "string") {
                maxString = arr[i];
                maxLength = arr[i].length;
            }
        }
        return maxString;
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
        return str.split("").reverse().join("");
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
        /*for( var i = str.length; i > 0; i-- ){
            if(str[i] == str.charAt(str.length) - 1){
                return true;
            } else {
                return false;
            }
        }*/
        var cleaned = str.toLowerCase().match(/[a-z]/gi).reverse();
        return cleaned.join('') === cleaned.reverse().join('');

    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
