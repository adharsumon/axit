$(document).ready(function () {
	// STICKY MENU JS HERE

	window.addEventListener('scroll', function () {
		var header = this.document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY > 200);
	});

	// TAB JS HERE
	$('.tab_n_01').show();
	$('.tab_n_02').hide();
	$('.tab_n_03').hide();

	$('#tab_1').addClass('active');

	$('#tab_1').click(function () {
		$('.tab_n_01').show();
		$('.tab_n_02').hide();
		$('.tab_n_03').hide();

		$('#tab_1').addClass('active');
		$('#tab_2').removeClass('active');
		$('#tab_3').removeClass('active');
	});

	$('#tab_2').click(function () {
		$('.tab_n_01').hide();
		$('.tab_n_02').show();
		$('.tab_n_03').hide();

		$('#tab_1').removeClass('active');
		$('#tab_2').addClass('active');
		$('#tab_3').removeClass('active');
	});

	$('#tab_3').click(function () {
		$('.tab_n_01').hide();
		$('.tab_n_02').hide();
		$('.tab_n_03').show();

		$('#tab_1').removeClass('active');
		$('#tab_2').removeClass('active');
		$('#tab_3').addClass('active');
	});


});