const addContact = async () => {
	window.location.href = 'https://www.anderssöderberg.se/vcard';
};

const createSwipe = () => {
	window.mySwipe = new Swipe($('#slider')[0], {
		// startSlide: 0,
		speed: 400,
		// auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function (index, elem) { },
		transitionEnd: function (index, elem) { }
	});
};


$(() => {
	createSwipe();
	$('#add_contact').on('mousedown', addContact);
});