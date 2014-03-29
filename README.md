jquery.responsiveSelectMenu
===========================

This small jQuery based plugin transforms your navigation into a place-saving dropdown menu, i.e., a simple HTML select field, which could replace your possibly large navigation on small screens (for example smartphones). It is pretty easy to use and offers just a few customization options.

To apply the plugin to your site simply call the plugin via
```Javascript
$(document).ready(function() {
  $("#your_nav_id").responsiveSelectMenu({head: "Menu", appendTo: "body", ID: "responsiveSelectMenu"});
});
```
Pretty easy, huh? There are three optional parameters you can provide. ```head``` is the label of the upmost element of the dropdown menu indicating what it is for. ```appendTo``` lets you customize where the generated menu is going to be placed in your markup code and ```ID``` is the DOM-ID assigned to the dropdown.
