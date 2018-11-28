function platform(newPlatform) {
	window.localStorage.platform = newPlatform
	document.body.setAttribute('platform', newPlatform)
}
function main() {
	window.setTimeout(function() {
		document.body.classList.remove('is-preload')
	}, 50);
	platform(window.localStorage.platform || detectPlatform());
}


function detectPlatform() {
	var platform = window.navigator.platform.toLowerCase();
	return ['linux', 'mac', 'win'].find((a) => {
		return platform.indexOf(a) >= 0
	})
}

// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", main);
} else {  // `DOMContentLoaded` already fired
	main();
}


