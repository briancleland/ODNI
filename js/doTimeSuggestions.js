vg.parse.spec("json/timeSuggestionsSpec.json", function (chart) {
  chart({
      el: "#timeSuggestions",
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

Date.prototype.format = function(){
    return (this.getMonth() + 1) + 
    "/" +  this.getDate() +
    "/" +  this.getFullYear();
}