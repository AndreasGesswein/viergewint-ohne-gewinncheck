// Import stylesheets
import "./style.css";

$(document).ready(function() {
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 7; x++) {
      $("section").append(`
      
      <div class="field">
        <div class="coin" id="coin-${y}-${x}">
        </div>
      
      
      `);
    }
  }

  let rotIstDran = false;
  $("div.coin").click(function() {
    let id = $(this).attr("id");
    // coin-1-2
    let x = parseInt(id.charAt(7));

    for (let yTest = 5; yTest >= 0; yTest--) {
      let feldSelektor = `div#coin-${yTest}-${x}`;
      console.log("Testing: " + feldSelektor);

      if (feldIstFrei($(feldSelektor))) {
        if (rotIstDran) {
          $(feldSelektor).addClass("red");
        } else {
          $(feldSelektor).addClass("yellow");
        }
        rotIstDran = !rotIstDran;
        yTest = -1;
      }
    }
  });
});

function feldIstFrei(feld) {
  if (feld.hasClass("red") || feld.hasClass("yellow")) {
    return false;
  }
  return true;
}
