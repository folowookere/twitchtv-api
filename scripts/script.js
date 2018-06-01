/* global $ */ 

$(document).ready(function() {
     var streams = ["ESL_SC2", "BlodgetTV", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var urlStreams = "https://wind-bow.glitch.me/twitch-api/streams/";
    var urlChannels = "https://wind-bow.glitch.me/twitch-api/channels/";
   
    $.getJSON ('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=6dkosy4qeyyw80sv3nqxi21ozs1tst').done(function (fccIsOnline) {
        
           if (fccIsOnline.stream === null) { 
               $("#freeccStatus").addClass("text-danger").html("FreeCodeCamp is Currently Offline");
           } else {
               $("#freeccStatus").addClass("text-success").html("Online");
           }
           });
           
   
    //not available channel for test for channel not found
  streams.push("notfounsklajldfjdsdfunmiksdj");
    
    for(var i = 0; i < streams.length; i++) {
         
           (function(i) {  
       var streamUrl = urlStreams + streams[i];
       var channelUrl = urlChannels + streams[i];
       
         $.getJSON(streamUrl).done(function(data){
                
                var logo = data.stream.channel.logo;
                var displayName = data.stream.channel.display_name;
                var channelURL = data.stream.channel.url;
                var statusOfUser = data.stream.channel.game;
                
                $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
                + "</div>" + "<div class='col-4'>" + "<a href ='" + channelURL + "'>" + displayName + "</a>" + "</div>" + "<div class='col-4'>" + '<p class="text-success text-center"><b>Currently Online Playing: </b></p>' + '<p class="text-center">' + statusOfUser + '</p>' + "</div></div>");
                
                $("img").addClass("img-thumbnail rounded mb-2 w-50");
                 });

        $.getJSON(streamUrl).done (function(data) {
            if (data.stream === null ) {
              $.getJSON(channelUrl).done (function(data){
                    var status = data.status;
                    var logo = data.logo;
                    var displayName = data.display_name;
                  
                    $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
                    + "</div>" + "<div class='col-4'>" + '<p class="text-light text-center"><b>' + displayName + '</b></p>' + '<p class="text-center">' + status + '</p>'  + "</div>" + "<div class='col-4'>" + '<p class="text-warning text-center"><b>Currently Offline</b></p>' + "</div></div>");
                     $("img").addClass("img-thumbnail rounded mb-2 w-50");
              
              });
            
            } else  
            
            
            //Here's the code I don't believe is running
            $.getJSON(channelUrl).done (function(data) {
                   
                  console.log(data);
})
                   
            .error(function() {  
                 var error = data.error;
                  var status = data.status;
                    var error = data.error;
                    var displayName = data.display_name;
                $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<i class='far fa-times-circle fa-5x p-3' style=color:red></i>"
                + "</div>" + "<div class='col-4'>" + error + "</div>" + "<div class='col-4'>" + '<p class="text-danger text-center"><b>Channel does not exist. </b></p>' + "</div></div>");
                         
                
            
                             });
                 
                         });
        }).call(this,i);        
    }
 });
                   
                   
                   
/* ignore everything below this line _____________________________
//           if (status === 404) {
        // $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<i class='far fa-times-circle fa-5x p-3' style='color:red'></i>"
        //             + "</div>" + "<div class='col-4'>" + message + "</div>" + "<div class='col-4'>" + '<p class="text-warning text-center"><b>Channel does not exist.</b></p>' + "</div></div>");
        //              $("img").addClass("img-thumbnail rounded mb-2 w-50");
        //           }
        //           else {
        
        //   if (status === 404) {
            //   $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<i class='far fa-times-circle fa-5x p-3' style='color:red'></i>"
            //         + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + '<p class="text-danger text-center"><b>Channel does not exist.</b></p>' + "</div></div>");
            //          $("img").addClass("img-thumbnail rounded mb-2 w-50");
            //         } else {
             //  $.getJSON(channelUrl).done (function(data){
                                   
            //                   
            //  $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<i class='far fa-times-circle fa-5x p-3' style='color:red'></i>"
            //         + "</div>" + "<div class='col-4'>" + error + "</div>" + "<div class='col-4'>" + '<p class="text-danger text-center"><b>Channel does not exist. </b></p>' + "</div></div>");
                        
            //      });
                                            // $("img").addClass("img-thumbnail rounded mb-2 w-50"); */
