//buttons news
$(document).ready(function() {
        $('#art-2').hide();
        $('#art-3').hide();
        $('#show-less-news').hide();
        $('#show-more-news').click( function () {
            $('#art-2').show("slow", function(){
                // Animation Complete
            });
            $('#art-3').show("slow", function(){
                // Animation Complete
            });
            $('#show-less-news').show();
            $('#show-more-news').hide();
    });
        $('#show-less-news').click( function () {
            $('#art-2').hide("slow", function(){
                // Animation Complete
            });
            $('#art-3').hide("slow", function(){
                // Animation Complete
            });
            $('#show-more-news').show();
            $('#show-less-news').hide();
    });
});
