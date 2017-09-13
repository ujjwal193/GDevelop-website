var lang = "en";

$(document).ready(function(){
    $('body').scrollspy({ target: '.nav-page' });

    //Smooth scrolls
    var $root = $('html, body');
	$('a[role="section-link"]').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
	lang = $('html').attr('lang');
	console.log("Language: " + lang);

	//Side menu show/hide
	var sideMenu = $(".side-menu");
	var sideMenuButton = $('.side-menu-button button');
	sideMenuButton.click(function() {
		if (!sideMenu.hasClass('visible')) {
			window.showMenu();
		} else {
			window.hideMenu();
		}
	});

	window.showMenu = function() {
		sideMenu.addClass('visible');
		sideMenuButton.addClass('active');
	}
	window.hideMenu = function() {
		sideMenu.removeClass('visible');
		sideMenuButton.removeClass('active');
	}

	//Carousels
	$('.games-carousel').slick({
		centerMode: true,
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 1,
				slidesToScroll: 2
			  }
			}
		]
	});

	//Feedbacks
	$('.user-feedback').slick({
		centerMode: true,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});

	//OS detection
	if (platform.os.family.indexOf("iOS") !== -1 ||
		platform.os.family.indexOf("Android") !== -1 ||
		platform.os.family.indexOf("Windows Phone") !== -1) {
		$('#download a[href="#gdevapp-link"]').tab('show')
	} else if (platform.os.family.indexOf("Windows") !== -1) {
		$('#download a[href="#win-dl"]').tab('show')
	} else if (platform.os.family.indexOf("Ubuntu") !== -1 ||
		platform.os.family.indexOf("Debian") !== -1) {
		$('#download a[href="#ubuntu-dl"]').tab('show')
	} else if (platform.os.family.indexOf("OS X") !== -1) {
		$('#download a[href="#osx-dl"]').tab('show')
	} else if (platform.os.family.indexOf("Fedora") !== -1 ||
		platform.os.family.indexOf("Red Hat") !== -1 ||
		platform.os.family.indexOf("SuSE") !== -1 ||
		platform.os.family.indexOf("Linux") !== -1) {
		$('#download a[href="#linux-dl"]').tab('show')
	}
});

//Track downloads:
var downloaded = false;
function onWinDl(alternateDl) {
	if (downloaded) return;
	downloaded = true;

	console.log("Windows", alternateDl);
	window.ga('send', 'event', "download-" + lang, "click", "win-" + (alternateDl ? "archive" : "installer"));
}

function onUbuntuDl() {
	if (downloaded) return;
	downloaded = true;

	console.log("Ubuntu");
	window.ga('send', 'event', "download-" + lang, "click", "ubuntu");
}

function onLinuxDl(flavour) {
	if (downloaded) return;
	downloaded = true;

	console.log("Linux", flavour);
	window.ga('send', 'event', "download-" + lang, "click", "linux-"+flavour);
}

function onOSXDl() {
	if (downloaded) return;
	downloaded = true;

	console.log("OSX");
	window.ga('send', 'event', "download-" + lang, "click", "osx");
}

function onTryOnline() {
	console.log("Try online");
	window.ga('send', 'event', "gd5-" + lang, "click", "webapp");
}

function onGD5WinDl() {
	console.log("GD5 Windows");
	window.ga('send', 'event', "gd5-" + lang, "click", "windows");
}

function onGD5LinuxDl() {
	console.log("GD5 Linux");
	window.ga('send', 'event', "gd5-" + lang, "click", "linux");
}

function onGD5MacOSDl() {
	console.log("GD5 macOS");
	window.ga('send', 'event', "gd5-" + lang, "click", "macOS");
}

function onGitHubOpened() {
	console.log("GitHub");
	window.ga('send', 'event', "github", "opened");
}
