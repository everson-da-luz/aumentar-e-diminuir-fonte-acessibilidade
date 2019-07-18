/**
 * Functions copied from W3Schools, all merit and right for them. 
 *
 * https://www.w3schools.com/js/js_cookies.asp
 */

/**
 * Function that stores the name of the visitor in a cookie variable
 */
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Function that returns the value of a specified cookie
 */
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	
	for (var i = 0; i < ca.length; i ++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
	
		if (c.indexOf(name) == 0) {
	  		return c.substring(name.length, c.length);
		}
	}

	return "";
}

/**
 * Function that checks if a cookie is set.
 *
 * If the cookie is set it will display a greeting.
 *
 * If the cookie is not set, it will display a prompt box, asking for the name of the user, 
 * and stores the username cookie for 365 days, by calling the setCookie function:
 */
function checkCookie() {
	var username = getCookie("username");
	
	if (username != "") {
		alert("Welcome again " + username);
	} else {
		username = prompt("Please enter your name:", "");
		
		if (username != "" && username != null) {
	  		setCookie("username", username, 365);
		}
	}
}
