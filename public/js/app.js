function getNotes() {
	$('#notes').empty();

	$.get('/api/notes')
		.then(function(res) {
			res.forEach(function(note) {
				$('#notes').append(`
					<div class="note">
						<h3>${note.title}</h3>
						<p>Count: ${note.count}</p>
						<p>${note.details}</p>
					</div>
				`);
			});
		});
}

function createNote() {
	var title = $('#title').val().trim();
	var count = $('#count').val().trim();
	var details = $('#details').val().trim();

	$.post('/api/notes', {
		title: title,
		count: count,
		details: details
	}).then(function(note) {
		console.log(note);
		getNotes();
	});
	
	$('form input, form textarea').val('');
	return false;
}

$('#submit').on('click', createNote);
getNotes();




