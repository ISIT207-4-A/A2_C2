//Tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
        


    $(document).ready(function(){
          $("#hide").click(function(){
            $("p.intro").hide("fast", function(){ alert("The paragraph is hidden"); }
            );
          });

          $("#show").click(function(){
            $("p.intro").show("fast", function(){ alert("The paragraph is shown"); }
            );
          });

          //fill table
          $("#fill").click(function(){
              let value = $("#text").val();
              $("#table1 td").text(value);
              $("#table1 th").text(value);
          });

          //append row
          $("#append").click(function(){
              $("#table2").append('<tr><td></td><td></td><td></td></tr>');
          });
          //remove row
          $("#remove").click(function(){
              $("#table2 tr:last").remove();
          });

          //toggle row color
          var even = true;
          $("#toggle").click(function(){
              if(even){
                $("#table3 tr:even").css("background-color","yellow");
                $("#table3 tr:odd").css("background-color","white");
                even = false;
              }else{
                $("#table3 tr:odd").css("background-color","yellow");
                $("#table3 tr:even").css("background-color","white");
                even = true;
              }
          });


          //change image
          $("#changeImage").click(function(){
            let link = $("#imageLink").val();
            $("#image1").attr('src', link);
            var txt="";
            txt+= "Width of image: "+$("#image1").width() + "</br>";
            txt+= "Height of image: "+$("#image1").height() + "<br /><br />";
            $("#sizeImg").html(txt);
          });
        });
//offset
$(document).ready(function(){
  $("#offsetImg").click(function(){
    var x = $("#image1").offset();
    alert("x = " + x.top + ", y = " + x.left);
  });
});

//position
$(document).ready(function(){
  $("#positionImg").click(function(){
    var x = $("#image1").position();
    alert("Top position: " + x.top + ", Left position: " + x.left);
  });
});

//animate()
$(document).ready(function(){
  $("#bigger").click(function(){
    $("#mario").animate({height: "300px"});
  });
  $("#smaller").click(function(){
    $("#mario").animate({height: "100px"});
  });
});

//fade
$(document).ready(function(){
$("#character3").fadeToggle();
  $("#hideseek").click(function(){
    $("#character3").delay("fast").fadeToggle();
    $("#character2").delay("slow").fadeToggle("slow");
    $("#character1").delay("1000").fadeToggle(3000);
  });
});

//finish
$(document).ready(function(){
  $("#startWater").click(function(){
    $("#waterBar").animate({
      height: "0px"
    }, {
      duration: 5000,
      easing: "linear",
      step: function(x) {
        $("#percent").text(Math.round(x * 100 / 400)  + "%");  
      }
    });
  });
    $("#stopWater").click(function(){
        $("#waterBar").stop();
    }); 
    $("#finishWater").click(function(){
        $("#waterBar").finish();
    }); 

});

//slide
$(document).ready(function(){
  $("#rolling").click(function(){
    $("#curtain").slideToggle("slow");
  });
});

//queue
$(document).ready(function(){
    var boxQ = $("#boxQueue");
    setInterval(function(){ $("#numQueue").text(boxQ.queue().length);  }, 1);
  $("#startQueue").click(function(){
 
    boxQ.animate({opacity: 100, width: '500px', right: '250px'}, 05000);
    boxQ.css("background-color", "#1E90FF");
    boxQ.animate({opacity: 100, width: '100px', left: '250px'}, 3000);
    
  });
  $("#stopQueue").click(function(){
    boxQ.clearQueue();
    $("#numQueue").text(boxQ.queue().length);  
  });
});


//addClass
$(document).ready(function(){
  $("#changeCSS").click(function(){
    $("#changeCSS").addClass("button");
  });
});