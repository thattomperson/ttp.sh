function platform(newPlatform) {
	var platforms = ['macos', 'windows', 'linux'];
	window.localStorage.platform = newPlatform ? newPlatform : platforms[0];
	for (var i = 0, platform; platform = platforms[i]; i++) {
		document.body.classList.remove('platform-' + platform);
	}
	document.body.classList.add('platform-' + window.localStorage.platform);
}
function main() {
	window.setTimeout(function() {
		document.body.classList.remove('is-preload')
	}, 50);
	platform(window.localStorage.platform || detectPlatform());
}


function detectPlatform() {
	var platform = window.navigator.platform.toLowerCase();
	return platform.indexOf('mac') >= 0 
		? 'macos' 
		: platform.indexOf('win') >= 0 
			? 'windows' 
			: 'linux'
}

// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", main);
} else {  // `DOMContentLoaded` already fired
	main();
}


