(function(global) {
    'use strict';

    var JS_BASICS={};

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
        return str.split("").reverse().join("");
    };

    JS_BASICS.isPalindrome = function(str) {
        str = str.replace(/ /g,"");
        str = str.toLowerCase();
        var i1 = 0;
        var i2 = str.length - 1;
        while (i2 > i1) {
            if (str[i1] != str[i2]) {
                return false;
            }
            ++i1; --i2;
        }
        return true;
    };

    JS_BASICS.nestedSum = function(arr) {
        var count = 0;
        for(var i=0, n=arr.length; i < n; i++) { 
            if (typeof arr[i] == "object") {
                count += JS_BASICS.nestedSum(arr[i]);
            }
            if (typeof arr[i] === "number") {
                count += arr[i]; 
            }
        }
        return count;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
