/**
 * base.js
 * Application-specific business logic goes here.
 * Guy Whorley
 */
$(document).ready(function() {
    //logEnabled=false;
    //log.debug("Start doc.ready().","text-transform: uppercase");

    // Build nav menu
    $(".professional").click(//hover(
        function() { buildMenu(lead, textCareer); }); //},
        //function() {}); // $(this).mouseout(clearTxt()); });
    //});

    $(".personal").click(
        function() { buildMenu(lead, textPersonal); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".dev-tools").click(
        function() { buildMenu(lead, textDevTech); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".qa-tools").click(
        function() { buildMenu(lead, textQATech); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".project-1").click(
        function() { buildMenu(lead, dummyText); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".project-2").click(
        function() { buildMenu(lead, dummyText);});
        //function() { $(this).mouseout(clearTxt()); });

    $(".linkedin").click(
        function() { buildMenu(lead, dummyText); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".github").click(
        function() { buildMenu(lead, gitHub); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".resume").click(
        function() { buildMenu(lead, dummyText); });
        //function() { $(this).mouseout(clearTxt()); });

    $(".contact-me").click(
        function() { buildMenu(lead, dummyText); });
        //function() { $(this).mouseout(clearTxt()); });

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
    function playDrop() { document.getElementById("openItem").play(); }

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
