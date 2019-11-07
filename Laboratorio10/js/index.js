$("document").ready(
    function () {
        
       $("p:last").html("<h1>ciao</h1>").addClass("red");
       const li = "<li>:last</li><li>:first</li><li>:even</li>";
       $("#jq_filters").html(li);
       $("#jq_filters li:not(li:gt(1))").css("color", "green");
       $("#jq_filters li:contains('s')").css("color", "red");
       $("li").click(function () {
           $(this).parent().next().next().css("font-size", "+=1em");
       });
       $("li:eq(1)").attr("id", "primo");
       $("#primo").css("background-color", "yellow");
       //$("li:eq(1)").prepend(" piatto vegetariano");


       $("button:last").click(function(){
        let nuovoLi = $("<li>");
        $(nuovoLi).text( $("#fldScelta").val() ).appendTo("#jq_filters");
        //$("p:last").hide(1500).show(2000);
       });

       $("p").text("lorem ipsum").after("#jq_filters");
       $("p").wrap( "<div class='red'></div>" );
       $("p").removeAttr("class");
       console.log($("p:last").width());
       console.log($("p:last").height());
       console.log($("li:eq(1)").offset());
       let collezione = $("li");
       $(collezione).each(function () {
           let check = $("<input>");
           $(check).attr("type", "checkbox");
          $(check).prependTo(this); 
       });

       $("#fldScelta").on("keypress", function(){
           console.log($(this).val());
       });

       $( window ).resize(function() {
        $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
      });
      $(":checked").each(function () {
          console.log($(this));
      });

      let img = $("<img>");
      $(img).attr("src", "https://cdn.iconscout.com/icon/premium/png-256-thumb/train-278-531525.png");
      $(img).css("position", "relative");
      $("p:last").append(img);
      $(img).on("mouseover mouseout click", function () {
         $(this).fadeTo("fast", 0.3); 
      });
      $("button:first").click(function () {
        $("img").animate({left:1000 }, 500,"swing");
      });
    } //fine document.ready()
);