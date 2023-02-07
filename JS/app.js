$(function(){

        $("#search").hide();

        $("#searchIcon").click(function(){
            $("#search").fadeToggle(400);
        });

        $("#slideBar").hide();

        $("#hamburgerMenu").click(function(){
            $("#slideBar").toggle(400);
        });



    });
