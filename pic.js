/***
*	Version: A 0.03
*	A quick gallery module using jQuery
*	Rather ad hoc for karlherler.com
*
*	Written by: Karl Herler
*
*	Give me a shout at hi@karlherler.com if you have any questions, if you feel like it.
*	
*	Fork me at GitHub: http://github.com/karlherler/pictr
*
*	Licence: GPL v3
*
***/
(function($) {
	$.fn.pictr = function(settings) {
		
 		var config = {'foo': 'bar'};
		if (settings) $.extend(config, settings);
		
		this.each(function() {
   			$(this).html('<div class="pic_c" style="position: absolute;"><span class="pic pic_header">Image <span class="pic_current">1</span> of <span class="pic_total">'+settings.length+'</span>.</span>');
			$(this).append('<span class="pic pic_prev_hitarea"><span class="pic_prev">&laquo; prev</span></span>');
			$(this).append('<span class="pic pic_next_hitarea"><span class="pic_prev">next &raquo;</span></span>');
			for (var i=0;i<settings.length;i++) {
				if (i>0) {
					$(this).append("<img class='pic_img "+(i+1)+"' style='display: none;' src='"+settings[i]+"' />");
				} else {
					$(this).append("<img class='pic_img "+(i+1)+"' src='"+settings[i]+"' />");
				}
			}
			$(this).append("</div>");
			$(this).find(".pic").hide();
		
			$(this).hover(function() {
				$(this).find(".pic").fadeIn(200)
			}, function() {
				$(this).find(".pic").fadeOut(200);
			});
			
			$(this).find(".pic_next_hitarea").click(function(){
				var curr = $(this).parent().find(".pic_current").html();
				var tot = $(this).parent().find(".pic_total").html();
				if (curr<tot) {
					$(this).parent().find("."+curr).css("display", "none");
					curr++;
					$(this).parent().find("."+curr).css("display", "inherit");
					$(this).parent().find(".pic_current").html(curr);
				}
			});
			$(this).find(".pic_prev_hitarea").click(function() {
				var curr = $(this).parent().find(".pic_current").html();
				if (curr>1) {
					$(this).parent().find("."+curr).css("display", "none");
					curr--;
					$(this).parent().find("."+curr).css("display", "inherit");
					$(this).parent().find(".pic_current").html(curr);
				}
			});
 		});

	return this;
	};
})(jQuery);