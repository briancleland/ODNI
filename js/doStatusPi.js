vg.parse.spec("json/statusPiSpec.json", function (chart) {
  chart({
      el: "#statusPi",
      renderer: "svg"
    })
    .on("mouseover", function (event, item) {
      if (item) {
        console.log(item)
        var date = new Date(item.datum.Date_submitted);
        $('#tooltip').show();
        $('#tooltip').html(
          "<b>" + item.datum.Title + "</b><br>" +
          "Submitted: " + date.toLocaleDateString("en-GB")
        );
      } else {
        $('#tooltip').hide();
      }
    })
    .update();
});