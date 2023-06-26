const addContact = async () => {
	window.location.href = 'https://arnt.hopto.org/vcard';
}

$(() => {
	$('#add_contact').on('mousedown', addContact)
})