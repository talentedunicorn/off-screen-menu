$(function() {
	function init()
	{
		toggleMenu('menu', 'site-wrap', 'nav');
	}

	// Toggle menu
	function toggleMenu(menuId, siteWrapClass, navId) {
		var menu = $('#' + menuId),
			menuIcon = menu.find('.icon*'),
			nav = $('#' + navId),
			bodyWrap = $('.' + siteWrapClass);

		// Hide nav
		nav.hide();

		// On click of menu
		menu.click(function() {
			if(nav.css('display') === 'none')
			{
				nav.show('slow');
			} else {
				nav.hide('slow');
			}

			menuIcon.toggleClass('icon-close', 'icon-menu'); // Change menu icon
		});
	}

	// Run stuff
	init();

});

