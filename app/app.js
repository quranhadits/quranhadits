$('.cari').click(function(){
	input_cari = ".input_cari"
	output_cari = ".output_cari .list-group-item"

	// yang_mau_dicari = location.hash.split('#magic')[1]
	yang_mau_dicari = $(this).attr('href').split('#magic')[1]

	$(input_cari).val(yang_mau_dicari)
	$(output_cari).filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(yang_mau_dicari.toLowerCase()) > -1)
	});
	$('html, body').animate({
		scrollTop: $('.judul_cari').offset().top - 70
	}, 500)
})

$('.jumbotron').click(function(){
	location.href = '/'
})

$('.theia').theiaStickySidebar({
	additionalMarginTop: 50,
	additionalMarginBottom: 0
})
$('.theia_2').theiaStickySidebar({
	additionalMarginTop: 70,
	additionalMarginBottom: 0
})
 
$('.tulisan_lainnya a').each(function(){
	if ($(this).attr('href') == ''){
		$(this).slideUp()
	}
})