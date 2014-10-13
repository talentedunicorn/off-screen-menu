init();

function init()
{
	toggleMenu('menu', 'site-wrap', 'nav', '200px');
}

// Toggle menu
function toggleMenu(menuId, siteWrapClass, navId, navWidth) {
	var menu = document.getElementById(menuId),
		menuIcon = menu.childNodes[0],
		nav = document.getElementById(navId),
		bodyWrap = document.getElementsByClassName(siteWrapClass)[0];

	// Hide nav
	nav.style.display = 'none';
	bodyWrap.style.marginLeft = '0px';

	// On click of menu
	menu.onclick = function() {
		if (nav.style.display == 'none')
		{
			// Show nav
			nav.style.display = '';
			bodyWrap.style.marginLeft = navWidth;

			// Change menu icon
			menuIcon.className = 'icon-close';
		}
		else
		{
			// Close nav
			nav.style.display = 'none';
			bodyWrap.style.marginLeft = '0px';
			menuIcon.className = 'icon-menu';
		}
	};

}