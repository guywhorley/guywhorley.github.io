/**
 * base.js
 * Application-specific business logic goes here.
 * Guy Whorley
 */
$(document).ready(function() {
    //logEnabled=false;
    //log.debug("Start doc.ready().","text-transform: uppercase");


    $(".dropdown-menu").click(function() {
        playDrop();
    });

    $(".dropdown-toggle").click(function() {
        playDrop();
    });


    $("#AtWork").click(
    function() { buildMenu(lead, textCareer); }); //},

    $("#AtHome").click(
        function() { buildMenu(lead, textPersonal); });

    $(".dev-tools a").click(
        function() { buildMenu(lead, textDevTech); });

    $(".qa-tools a").click(
        function() { buildMenu(lead, textQATech); });

    $(".project-1 a").click(
        function() { buildMenu(lead, dummyText); });

    $(".project-2 a").click(
        function() { buildMenu(lead, dummyText);});

    $(".linkedin a").click(
        function() { buildMenu(lead, dummyText); });

    $(".github a").click(
        function() { buildMenu(lead, gitHub); });

    $(".resume a").click(
        function() { buildMenu(lead, dummyText); });

    $(".contact-me a").click(
        function() { buildMenu(lead, dummyText); });

    $("#menu").menu({position: {my:"left top", at: "left-1 top:+35", } });

    displayFactoid(factoid);

    // fade-in message and fade-out
    function displayFactoid() {
        var aside = "#aside";
        //log.debug("displayFactoid()...");
        if (loadFactoid) {
            $(aside).html();
            loadFactoid = false;
            var msgIndex = Math.floor(Math.random() * (factoid.length));
            //log.debug("factoid is: " + factoid[msgIndex]);
            $(aside).hide().html("<div class='fact'>" + factoid[msgIndex] + "</div>").fadeIn(tmrXL).show();
            $(aside).fadeTo(tmrSavorIt, 1.0, function() { loadFactoid = true; });
        } else {} //factoid not finished loading yet...
        //log.debug("...diplayFactoid().");
    } //marqueeMessage

    // play menu click
    function playDrop() {
        var audio = document.getElementById("openItem");
        audio.volume = 0.05;
        audio.play(); //document.getElementById("openItem").play();
    }

    // set text, fade-in, play click
    function buildMenu(sel, content) {
        $(sel).hide().html(content);
        $(sel).show("scale", tmrShort, playDrop());
        displayFactoid();
    } //buildMenu


    // clear out content panel by fade-out
    //function clearTxt() {
        //$("#lead-content").hide("scale", tmrShort);
        //$("#content-panel h1").html("");
    //} //clearTxt
    //log.debug("End doc.ready().","text-transform: uppercase;");
  }); //end document.ready()
