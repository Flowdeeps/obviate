window.onload = function() {

	var setUp = function() {

		var body = document.getElementsByTagName( 'body' );

		var notThereOrig = body[0].innerHTML,
				matchMe = "Lorem";
				matchRegEx = /Lorem/gi;

		var notThereNew = notThereOrig.replace( matchRegEx, "<blink>" + matchMe + "</blink>" );

		var reinsert = function(callback) {
			body[0].innerHTML = notThereNew;
			ready;
		}();

		var ready = function(callback) {

			var here = document.getElementById( 'no_here' ),
					trigger = document.getElementById( 'trigger' ),
					i = 0;

			var notThere = document.getElementsByTagName( 'blink' );
			// var notThere = document.getElementsByClassName( 'not-there' );

			var next = function() {

				if ( i < ( notThere.length - 1 ) ) {
					i++;
				} else {
					i = 0;
				}

				here.setAttribute( 'style', "transform: translate(" + getOffset( notThere[ i ] ).left + "px, "+ getOffset( notThere[ i ] ).top +"px); transition: transform 1s ease-in-out;");

			}

			trigger.onclick = function( event ) {
				event.preventDefault();
				next();
			}

		}();

	}();

	// the fantastic getOffset function was stolen lock stock and barrel from http://stackoverflow.com/a/442474
	function getOffset( el ) {

		var _x = 0,
    		_y = 0;

		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
	    _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }

		return { top: _y, left: _x };

	}

};
