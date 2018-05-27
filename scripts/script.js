$(document).ready(function() {
    
    var followers = [];
    var url ="https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON (url, function (fccIsOnline) {
            // console.log(dataA);
           if (fccIsOnline.stream === null) { 
               $("#freeccStatus").addClass("text-danger").html("Currently offline");
           } else {
               $("#freeccStatus").addClass("text-success").html("Online");
           }
        });
        
    var followersUrl ="https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows/";
    $.getJSON(followersUrl, function(fccFollowers) {
        for (var i = 0; i < fccFollowers.follows.length; i++) {
        var followerName = fccFollowers.follows[i].user.display_name;
        followers.push(followerName);
        
        }
        followers.push("funmio4043");
        followers.push("brunofin");
        followers.push("esl_sc2");
        
        for (var i = 0; i < followers.length; i++) {
            var followersUrl2 = "https://wind-bow.glitch.me/twitch-api/streams/" + followers[i];
        
        $.getJSON(followersUrl2, function(fccFollowersOffline) {
            
            var logo;
            var statusofuser;
            var displayName;
            
            if (fccFollowersOffline.error) {
                // console.log(fccFollowersOffline.error);
                logo = '<p style="color:red"><i class="far fa-times-circle fa-sm"></i></p>';
                displayName = fccFollowersOffline.message;
                statusofuser = fccFollowersOffline.error;
                
                $("#followers").append("<div class='row'>" + "<div class='col-4'>" + logo
                + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + statusofuser + "</div></div>");
            }
            
            if (fccFollowersOffline.stream === null) {
                console.log(1);
            }
            $.getJSON(fccFollowersOffline._links.channel, function(fccFollowersOnline) {
                status = "Offline";
                logo = fccFollowersOnline.logo;
                name = fccFollowersOffline.display_name;
                
            if (logo === null) {
                logo = '<p style="color:green"><i class="far fa-circle fa-sm"></i></p>';
            }
             $("#followers").append("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
                + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + status + "</div></div>");
            
            
           
        });
            
         });
        }
        
        for (var i = 0; i < followers.length; i++) {
        // var followersOnlineUrl = "https://wind-bow.glitch.me/twitch-api/streams/" + followers[i];
        $.ajax({
 type: 'GET',
 headers: {
   'Client-ID': ' 6dkosy4qeyyw80sv3nqxi21ozs1tst',
   'Accept': 'application/vnd.twitchtv.v5+json'
 },
 url: "https://api.twitch.tv/kraken/streams/" + followers[i],
 success: function(followersOnline) {
   console.log(followersOnline);
     var logo = followersOnline.stream.channel.logo;
                 if (logo === null) {
                logo = '<p style="color:red"><i class="far fa-times-circle fa-sm"></i></p>';
            }
                var status = followersOnline.stream.channel.status;
                
                var displayName = followersOnline.stream.channel.display_name;
                
                console.log(status);
                $("#followers").prepend("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
                + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + status + "</div></div>");
            
 }
});
        
        
            //     var logo = followersOnline.stream[].channel.logo;
            //      if (logo === null) {
            //     logo = '<p style="color:red"><i class="far fa-times-circle fa-sm"></i></p>';
            // }
            //     var status = followersOnline.stream.channel.status;
                
            //     var displayName = followersOnline.stream.channel.display_name;
                
            //     console.log(status);
            //     $("#followers").prepend("<div class='row'>" + "<div class='col-4'>" + "<img src='" + logo + "'>"
            //     + "</div>" + "<div class='col-4'>" + displayName + "</div>" + "<div class='col-4'>" + status + "</div></div>");
            
        
    
        }
    });
});
