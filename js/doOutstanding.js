    vg.parse.spec("json/outstandingSpec.json", function (chart) {
      chart({
          el: "#outstanding",
          renderer: "svg"
        })
        .on("mouseover", function (event, item) {
        var temp = item;
          console.log(item);
          if (item) {
            $('#tooltip').show();
            $('#tooltip').html(
              "<b>" + item.datum.Title + "</b><br>" +
              "Status: " + item.datum.Status + "<br>" +
              "Can_publish: " + item.datum.Can_publish + "<br>" +
              "Response_outstanding_days: " + item.datum.Response_outstanding_days + "<br>");
          } else {
            $('#tooltip').hide();
          }
        })
        .update();
    });