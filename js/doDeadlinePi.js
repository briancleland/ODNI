vg.parse.spec("json/deadlinePiSpec.json", function (chart) {
  chart({
      el: "#deadlinePi",
      renderer: "svg"
    })
    .on("mouseover", function (event, item) {
      if (item) {
        console.log(item)
        var date = new Date(item.datum.Date_submitted);
        $('#tooltip').show();
        $('#tooltip').html(
          item.datum.Deadline_met
        );
      } else {
        $('#tooltip').hide();
      }
    })
    .update();
});