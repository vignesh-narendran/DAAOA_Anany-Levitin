const JS_PREFIX = '/js/';
function loadJS(name) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	switch (name) {
		case 'greatest-common-divisor':
			script.src = fabricateLink('greatest-common-divisor');
			break;
		default:
			console.log('No JS file to add');
			break;
	}
	document.body.appendChild(script);
}

function fabricateLink(name) {
	return JS_PREFIX.concat(name).concat('.js');
}
