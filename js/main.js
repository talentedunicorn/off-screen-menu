init();

function init()
{
	toggleMenu('menu', 'site-wrap', 'nav');
}

// Toggle menu
function toggleMenu(menuId, siteWrapClass, navId) {
	var menu = document.getElementById(menuId),
		menuIcon = menu.childNodes[0],
		nav = document.getElementById(navId),
		bodyWrap = document.getElementsByClassName(siteWrapClass)[0];

	// Hide nav
	nav.style.display = 'none';

	// On click of menu
	menu.onclick = function() {
		if (nav.style.display == 'none')
		{
			// Show nav
			nav.style.display = '';
			menuIcon.className = 'icon-close'; // Change menu icon
		}
		else
		{
			// Close nav
			nav.style.display = 'none';
			menuIcon.className = 'icon-menu';
		}
	};

}