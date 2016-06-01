window.onload = function() {

	var notThere = document.getElementsByClassName( 'not-there' ),
			here = document.getElementById( 'no_here' ),
			trigger = document.getElementById( 'trigger' ),
			i = 0;


	// the fantastic getOffset function was stolen lock stock and barrel from http://stackoverflow.com/a/442474
	function getOffset( el ) {
	    var _x = 0;
	    var _y = 0;
	    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
	        _x += el.offsetLeft - el.scrollLeft;
	        _y += el.offsetTop - el.scrollTop;
	        el = el.offsetParent;
	    }
	    return { top: _y, left: _x };
	}

	trigger.onclick = function( event ) {
		event.preventDefault();
		if ( i < ( notThere.length - 1 ) ) {
			i++;
		} else {
			i = 0;
		}
		here.setAttribute( 'style', "transform: translate(" + getOffset( notThere[ i ] ).left + "px, "+ getOffset( notThere[ i ] ).top +"px); transition: transform 1s ease-in-out;");
	}

};
