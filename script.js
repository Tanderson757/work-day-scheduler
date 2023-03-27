var dayHours=["10" , "11", "12", "13", "14", "15", "16" ,"17"];

var notesArea= $(".notes")
var currentDay = $("#currentDay");
var testDiv= $("#testDiv");
var buttonEl= $('.saveBtn');

  for (i=0;i<dayHours.length;i++) {
    var row=$("div>");
    row.addClass("row time-block");
    var hour=$("<div>");
    if (dayHours[i]>12){
      hour.addClass ("hour col-1").text(dayHours[i] - 12 + ":00");
      row.append(hour);
    }else {
      hour.addClass("hour col-1").text(dayHours[i] + ".00");
      row.append(hour);
  } 

  var textarea= $("<textarea>");
  var getText= JSON.parse(localstorage.getItem(i = 1));

  if(moment().format("HH") > dayHours[i]) {
    textarea.addClass("past description col-10");
    
textarea.addClass("present description col-10");{
  }
  textarea.attr("data-button",i + 1);
  textarea.text(gettext);
  textarea.addClass("saveBtn fas fa-save col-1");
  row.append(textarea);

  var button =$("<button>");
  button.addClass("saveBtn fas fa-save col-1");
  button.addClass("line"+(i+1));


  currentDay.text(moment().format("MMMM Do YYYY"))

  
    var firstTextarea= JSON.parse(localStorage.getItem("0"));
    $("firstText").text(firstTextarea);

    $(".saveBtn").on("click", function (){
      var buttonIndex=$(this).attr("data-button");
      var textNotes= [];
      textNotes= $("textarea").val();
      localStorage.setItem(buttonIndex,JSON.stringify(textNotes));
    }
    )
  }
  
};
