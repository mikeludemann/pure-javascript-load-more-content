/*
	var ready = (callback) => {
		if (document.readyState != "loading") callback();
		else document.addEventListener("DOMContentLoaded", callback);
	}
*/

var parent = document.querySelector('.loadMoreElements'),
	items = parent.querySelectorAll('.element'),
	loadingMoreElementsBtn = document.querySelector('#loading'),
	maxItems = 4,
	hiddenClass = "visually--hidden";


[].forEach.call(items, function(item, idx){

	if (idx > maxItems - 1) {

		item.classList.add(hiddenClass);

	}

});

loadingMoreElementsBtn.addEventListener('click', function(){

	[].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, idx){

		/*if (idx < maxItems - 1) {

			item.classList.remove(hiddenClass);

		}*/

		if (idx < maxItems) {

			item.classList.remove(hiddenClass);

		}

		if ( document.querySelectorAll('.' + hiddenClass).length === 0) {

			loadingMoreElementsBtn.style.display = 'none';

		}

	});

});
