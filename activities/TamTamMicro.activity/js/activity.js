var app;
var sound;

define(["sugar-web/activity/activity", "sugar-web/env", "tutorial", "webL10n"], function (activity, env, tutorial, webL10n) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {
		// Initialize the activity.
		activity.setup();

		// Create sound component
		sound = new TamTam.Audio();
		sound.renderInto(document.getElementById("audio"));

		// Launch main screen
		app = new TamTam.App({activity: activity});
		app.renderInto(document.getElementById("keyboard"));

		// Switch to full screen when the full screen button is pressed
		document.getElementById("fullscreen-button").addEventListener('click', function() {
			document.getElementById("main-toolbar").style.display = "none";
			document.getElementById("app_content").style.top = "0px";
			document.getElementById("app_content").style.height = "100%";
			document.getElementById("unfullscreen-button").style.visibility = "visible";
			app.computeSize();
		});

		//Return to normal size
		document.getElementById("unfullscreen-button").addEventListener('click', function() {
			document.getElementById("main-toolbar").style.display = "block";
			document.getElementById("app_content").style.top = "0px";
			document.getElementById("app_content").style.height = "50%";
			document.getElementById("unfullscreen-button").style.visibility = "hidden";
			app.computeSize();
		});
		
		//Run tutorial when help button is clicked
		document.getElementById("help-button").addEventListener('click', function(e) {
			tutorial.start();
		});

		// Stop sound at end of game to sanitize media environment, specifically on Android
		document.getElementById("stop-button").addEventListener('click', function (event) {
			sound.pause();
		});
	});

});
