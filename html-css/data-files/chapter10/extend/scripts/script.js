/*
    Student Name: Dillon Anderson
    File Name: script.js
    Date: 09/22/2025
*/

/* jQuery hide and show method */
$(document).ready(function(){
    $("#hide").click(function(){
        $("article p").hide();
    });
    $("#show").click(function(){
        $("article p").show();
    });
});