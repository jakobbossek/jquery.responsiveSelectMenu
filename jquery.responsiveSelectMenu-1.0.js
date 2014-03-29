/* 
 * jQuery plugin responsiveSelectMenu
 *  
 * @author: Jakob Bossek (http://www.jakobbossek.de/)
 * @version: 1.0
 *
 * Extracts all links from a navigation and generates a small select
 * field which reacts on change and should replace the navigation
 * on small screens.
 */
;(function($) {
	jQuery.fn.responsiveSelectMenu = function(arg) {
		var options = $.extend(
			{},
			$.fn.responsiveSelectMenu.defaults,
			arg
		);
		
		return this.each(function() {
      var menuContainer = $(this),
          links = $("a", menuContainer),
          responsiveMenu = $('<select size="1" id="' + options.ID + '"></select>');
      if (options.head) {
        responsiveMenu.append('<option>' + options.head + '</option>');
      }
      links.each(function() {
        linkTitle = $(this).html();
        linkHref = $(this).attr("href");
        responsiveMenu.append('<option value="' + linkHref + '">' + linkTitle + '</option>');
      });

      responsiveMenu.change(function() {
        var href = $("option:selected", responsiveMenu).val();
        if (!(href == options.head)) {
          window.location = href;  
        }
      });
			
      $(options.appendTo).append(responsiveMenu);
		});
	};
	
	$.fn.responsiveSelectMenu.defaults = {
    // Label for the additional option  
    head: "Menu",
    // DOM ID for easy CSS access
    ID: "responsiveSelectMenu",
    // To which element should the menu be appended?
    appendTo: "body"
	};
})(jQuery);
