$(document).ready(function() {
  // leggo JSon

  const COLORS = ["#FFA69E", "#FF686B", "#FC9E4F", "#F4845F"];

  $.get("js/Vacca.json", function(io) {
    // console.log(io.skill[0].linguaggio);
    for (const comp of io.skill) {
      console.log(comp);
      skiller(
        comp.linguaggio,
        comp.voto,
        COLORS[Math.floor(Math.random() * COLORS.length)]
      );
    }
  });

  $("#elevator img").animate({ left: "200px", top: "200px" }, 1000);
  /*.animate({ left: "200px" }, 1000)
    .animate({ top: "200px" }, 1000);*/
});

function skiller(linguaggio, voto, background) {
  const barra = $("<div>");

  $(barra)
    .css({
      height: "3em",
      "background-color": background,
      color: "white",
      padding: "0.5em",
      marginBottom: "10px",
      fontSize: "1.3rem",
      boxShadow: "3px 3px 8px grey",
      textAlign: "right"
    })
    .text(linguaggio)
    .animate({ width: voto + "%" }, 1000)
    .appendTo("#skill");
}
