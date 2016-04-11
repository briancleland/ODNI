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
          item.datum.Status_reason
        );
      } else {
        $('#tooltip').hide();
      }
    })
    .update();
});