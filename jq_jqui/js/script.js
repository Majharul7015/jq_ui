$(function () {

    $("#hide").click(function () {
        console.log("hide");

        $("#ex1").hide();
    });

    $("#show").click(function () {
        console.log("show");

        $("#ex1").show();
    });

    $("#fdin").click(function () {
        console.log("fadein");

        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    $("#fdout").click(function () {
        console.log("fadeout");

        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });

    $("#fdtoggle").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    $("#fdto").click(function () {
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });

    $("#slu").click(function () {
        $("#ex3").slideUp(3000);
    });

    $("#sld").click(function () {
        $("#ex3").slideDown(3000, function () {
            console.log("Logged via callback");
        });
    });

    $("#slt").click(function () {
        $("#ex3").slideToggle();
    });

    $("#stp").click(function () {
        $("#ex3").stop();
    });

    $("#draggable").draggable({ containment: ".canvas", scroll: false });

    $("#draggable2").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    $("#resizable").resizable();

    $("#selectable").selectable({
        stop: function () {
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function () {
                var index = $("#selectable li").index(this);
                result.append(" #" + (index + 1));
            });
        }
    });

    $( "#sortable" ).sortable();

    $( "#sortable" ).disableSelection();

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];

      $("#tags").autocomplete({
          source:availableTags
      });

      $( "#datepicker" ).datepicker({
        altField: "#alternate",
        altFormat: "DD, d MM, yy"
      });

      $( "#dialog" ).dialog();

      $( "#menu" ).menu();

      $( "#slider" ).slider();

      $( "#tabs" ).tabs();

});