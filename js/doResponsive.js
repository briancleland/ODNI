
vg.parse.spec("json/responsiveSpec.json", function (chart) {
      chart({
          el: "#responsive",
          renderer: "svg"
        })
        .on("mouseover", function (event, item) {
        var temp = item;
          console.log(item);
          if (item) {
            $('#tooltip').show();
            $('#tooltip').html(
              "Avg Response: " + item.datum.mean_Response_outstanding_days + " days"
            );
          } else {
            $('#tooltip').hide();
          }
        })
        .update();
    });