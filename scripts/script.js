$(document).ready(function() {
    
    var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    $.getJSON ('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=6dkosy4qeyyw80sv3nqxi21ozs1tst').done(function (fccIsOnline) {
        
           if (fccIsOnline.stream === null) { 
               $("#freeccStatus").addClass("text-danger").html("FreeCodeCamp is Currently Offline");
           } else {
               $("#freeccStatus").addClass("text-success").html("Online");
           }   
           
    });


    for (var i = 0; i < streams.length; i++) {
        
        $.ajax ({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/" + streams[i],
            headers: { 'client-ID': '6dkosy4qeyyw80sv3nqxi21ozs1tst'
            },
            success: function(dataI) {
        
                console.log(dataI);
                var logo = dataI.stream.channel.logo;
                var displayName = dataI.stream.channel.display_name;
                var statusofuser = dataI.stream.channel.status;
                
                $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
                + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + "Online " + statusofuser + "</div></div>");
            },
           error: function(error) {
             
}
          
});
}

});
