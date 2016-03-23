(function($){
    $(document).ready(function(){
        if(!$.fn.popover){
            //Requires Bootstrap 3.x popover
            return;
        }
        $('[data-toggle="popover"]').popover({
            "placement":"bottom",
            "trigger":"hover"
        })
    });
})(jQuery);