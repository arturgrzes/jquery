'use strict'

jQuery( document ).ready( function() {
    
    
    //pobranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    //dodanie tekstu
    $(".paragraf").text(tekstParagrafuPierwszego);
    
    //dodanie html
    $(".paragrafnext").html("To jest <strong> paragraf</strong> z dodanym <br> HTML");
    
    
    //dodanie tresci na końcu selektora
    $(".paragrafnext").append("Treść na koncu selektora");
    
    //dodanie treści za selektorem
    $(".paragrafnext").after("Treść za selektorem");
    
    //Usuwanie elementu i jego zawartości
    $("strong").remove();
    
    
    // Usuwanie tylko jego zawartości
    $('.paragraf').empty();
    
    //Dodanie CSS
    $(".paragrafnext").css({'font-size': '3em', 'color': 'red'});
    
    //dodanie klasy
    $('h1').addClass('blue');
    
    //dodanie atrybutu
    $('h1').attr("imie", "Marcin");
    
    
    
});