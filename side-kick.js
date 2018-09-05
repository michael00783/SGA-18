// 1grid

var windowWidth=$(window).width();
var percent2 =parseFloat((50/100) * windowWidth);
var ratio=parseFloat(windowWidth / 3);
var percent =parseFloat((33.33333333333333/100) * windowWidth);
if (ratio < 300	) {
	var width=percent2+'px';
	$('.gridImg>li').css({
		width: width,
		height: '200px'
	});
	for (var i = 0; i < $('.gridImg>li').length; i++) {
		var gridHeight=$('.gridImg>li').eq(i).height();
		var gridImgHeight=$('.gridImg>li>img').eq(i).height();
		if (gridImgHeight < gridHeight) {
			$('.gridImg>li>img').eq(i).css({
				width: 'initial',
				height: '100%'
			});
			if ($('.gridImg>li>img').eq(i).width() > $('.gridImg>li').eq(i).width()) {
				var diff=parseFloat($('.gridImg>li>img').eq(i).width() - $('.gridImg>li').eq(i).width());
				var intersct=parseFloat(diff/2);
				$('.gridImg>li>img').eq(i).css('transform', 'translateX(-'+intersct+'px)');
			}
		} else if (gridImgHeight > gridHeight) {
			var diff=parseFloat($('.gridImg>li>img').eq(i).height() - $('.gridImg>li').eq(i).height());
			var intersct=parseFloat(diff/2);
			$('.gridImg>li>img').eq(i).css('transform', 'translateY(-'+intersct+'px)');
		}
	}
} else {
	var width=ratio+'px';
	$('.gridImg>li').css({
		width: width,
		height: '300px'
	});
	for (var i = 0; i < $('.gridImg>li').length; i++) {
		var gridHeight=$('.gridImg>li').eq(i).height();
		var gridImgHeight=$('.gridImg>li>img').eq(i).height();
		if (gridImgHeight < gridHeight) {
			$('.gridImg>li>img').eq(i).css({
				width: 'initial',
				height: '100%'
			});
			if ($('.gridImg>li>img').eq(i).width() > $('.gridImg>li').eq(i).width()) {
				var diff=parseFloat($('.gridImg>li>img').eq(i).width() - $('.gridImg>li').eq(i).width());
				var intersct=parseFloat(diff/2);
				$('.gridImg>li>img').eq(i).css('transform', 'translateX(-'+intersct+'px)');
			}
		} else if (gridImgHeight > gridHeight) {
			var diff=parseFloat($('.gridImg>li>img').eq(i).height() - $('.gridImg>li').eq(i).height());
			var intersct=parseFloat(diff/2);
			$('.gridImg>li>img').eq(i).css('transform', 'translateY(-'+intersct+'px)');
		}
	}
}
$('.gridImg>li').click(function() {
	$('.gridImg').addClass('gridInactive');
	$('.gridImg>li').removeClass('gridactive');
	$(this).addClass('gridactive');
	
});

$('.activateButton').click(function() {
	$(this).toggleClass('active');
});