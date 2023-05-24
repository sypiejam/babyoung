
var host = window.location.href;
var ioneJs = null;
var juiJs = null;

if(host.indexOf('PUB') >= 0){
	if(host.indexOf('guide') >= 0) {
		ioneJs = "../../js/lib/ionebank_dev.js";
		juiJs = "../../js/lib/jquery-ui.min.js";
	}else if(host.indexOf('old/') > -1){
		ioneJs = "../../../../../js/lib/ionebank_dev.js";
		juiJs = "../../../../../js/lib/jquery-ui.min.js";
	} else {
		ioneJs = "../../../../js/lib/ionebank_dev.js";
		juiJs = "../../../../js/lib/jquery-ui.min.js";
	}

	var jScript = "<script type='text/javascript' src='" + ioneJs + "'></script>";
	document.write(jScript);

	var jScript2 = "<script type='text/javascript' src='" + juiJs + "'></script>";
	document.write(jScript2);
}else{
	if(host.indexOf('old/') > -1) {
		ioneJs = "../../../../../js/lib/ionebank_dev.js";
		juiJs = "../../../../../js/lib/jquery-ui.min.js";
	} else {
		ioneJs = "../../../../js/lib/ionebank_dev.js";
    	juiJs = "../../../../js/lib/jquery-ui.min.js";
	}
    var jScript = "<script type='text/javascript' src='" + ioneJs + "'></script>";
	document.write(jScript);
	var jScript2 = "<script type='text/javascript' src='" + juiJs + "'></script>";
	document.write(jScript2);
}



/*window.blockMenuHeaderScroll = false;

$(window).on('touchstart', function(e){
	if($(e.target).closest('.sel_slide').length == 1){
		blockMenuHeaderScroll = true;
	}
});

$(window).on('touchend', function(){
	blockMenuHeaderScroll = false;
});

$(window).on('touchmove', function(e){
	if(blockMenuHeaderScroll){
		e.preventDefault();
	}
});*/

/*
document.addEventListener('touchstart', function(e){
	e.preventDefault()}, false);

document.addEventListener('touchmove', function(e){
	e.preventDefault()}, false);
*/





$(function(){
	
	/* 하단 슬라이드 팝업 */
	if ($(['*[data-roll=slide-btm-on]'].length)){

		var slide_Pop = function(){
			var slideOn = '*[data-roll=slide-btm-on]';
			var slideOff = '*[data-roll=slide-btm-off]';
			var dimm = '<div class="dim_wrap"></div>';

			$(slideOn).on('click', function(){
				var href = $(this).attr('data-link');
				if (!$('.dim_wrap').length){
					$('#container').append(dimm);	
					
					$('#'+href).addClass('is_active');
					//$('#'+href).fadeIn().addClass('is_active');
					$('body').css({overflow:"hidden", position:"relative", height:"100%"}); //임시코드
					//$('body').css({overflow:"hidden", height:"100%"});

					//$('.list_bul_wrap').css('filter','blur(2px)');
					//$('.bx_group').css('filter','blur(2px)');
				}
			});

			$(slideOff).on('click', function(){
				if ($('.dim_wrap').length){
					//var isActive = $(this).parents('.bx_slidebtm');
					var isActive = $('.bx_slidebtm');

					$('.dim_wrap').remove();
					
					isActive.removeClass('is_active');
					//isActive.fadeOut().removeClass('is_active');
					$('body').removeAttr("style"); //임시코드

					$('.list_bul_wrap').removeAttr("style");
					$('.bx_group').removeAttr("style");
				}
			})
		}()
	}

	

	// 레이어팝업
	if ($(['*[data-roll=layer-pop-on]'].length)){

		var layer_Pop = function(){
			var layerOn = '*[data-roll=layer-pop-on]';
			var layerOff = '*[data-roll=layer-pop-off]';
			var dimm = '<div class="dim_wrap"></div>';

			$(layerOn).on('click', function(){
				var href = $(this).attr('data-link');
				if (!$('.dim_wrap').length){
					$('#container').append(dimm);
					//$('#'+href).show();
					$('body').css({overflow:"hidden", position:"relative", height:"100%"}); //임시코드
					$('#'+href).addClass('is_active');
				}
			});

			$(layerOff).on('click', function(){
				if ($('.dim_wrap').length){
					var isActive = $(this).parents('.ly_popup_wrap');

					//isActive.hide();
					isActive.removeClass('is_active');
					$('.dim_wrap').remove();
					$('body').removeAttr("style"); //임시코드
				}
			})
		}()
	}

	/*$('.sel_slide_list').on('touchStart', function(e){
		console.log($(this).scrollTop());
	})*/

})



/*
	20190110 - input에 포커스 시 키패드가 올라오면서 fixed 속성의 요소를 밀고 올가가는 현상 처리
	1. 키패드가 올라오면 해당 속성을 hide 처리
	2. 해당 input 에서 blur 시 해당 속성 show 
	3. 원도우높이/2 보다 큰 위치에 해당 된 fixed 대상


$(function(){
	var bFixed = $('.fixed').length;
	var winHalf = $(window).height()/2;

	var input = $('input:not([readonly])').not(':checkbox').not(':radio');

	input.on('focus', function(){
		if(bFixed){
			var fixPosition = $('.fixed').offset().top;
			if(fixPosition > winHalf ){
				if($('.fixed').is(':visible')){
					$('.fixed').addClass('test');
					$('.fixed').hide();	
				}
			}
		}
	});

	$('input').on('blur', function(){
		if(bFixed){
			if($('.fixed').is('.test')){
				$('.fixed').removeClass('test');
				//$('.fixed').show();	
				$('.fixed').fadeIn('fast');
			}
		}
	});

})
*/

$(function(){

	$(document).mousedown(function(e){
		/*if($('.bx_slidebtm').is('.is_active')){

			var bx_slide_pos = $('.bx_slidebtm.is_active').offset();

			bx_slide_pos.right = parseInt(bx_slide_pos.left) + ($(this).width());
			bx_slide_pos.bottom = parseInt(bx_slide_pos.top) + ($(this).height());

			
			/*if((bx_slide_pos.left <= e.pageX && e.pageX <= bx_slide_pos.right)
				&& (bx_slide_pos.top <= e.pageY && e.pageY <= bx_slide_pos.bottom) ){

			}else{
				 slide_Pop();
			}

			// .bx_slidebtm 의 left, right, bottom이 #container 의 eft, right, bottom 같을 시
			if(bx_slide_pos.top > e.pageY)	slideOff($('.dim_wrap'));
		}*/


		$('.ly_popup_wrap').each(function(){
			var layer_id = $('#'+$(this).attr('id'));
			
			if(layer_id.css("display") == "block"){
				var $layer = layer_id.children('.ly_popup');
				var ly_popup_pos = $layer.offset();

				ly_popup_pos.right = parseInt(ly_popup_pos.left) + ($layer.width());
				ly_popup_pos.bottom = parseInt(ly_popup_pos.top) + ($layer.height());

				if((ly_popup_pos.left <= e.pageX && e.pageX <= ly_popup_pos.right)
				&& (ly_popup_pos.top <= e.pageY && e.pageY <= ly_popup_pos.bottom) ){

				}else{
					if ($('.dim_wrap').length){
						//layer_id.hide();
						layer_id.removeClass('is_active');
						$('.dim_wrap').remove();
					}
				}
			}
		})
	});
	
})


function slideOff(dim){
	if (dim.length > 0){
		var isActive = $('.bx_slidebtm');

		dim.remove();
		isActive.removeClass('is_active');
	}
}


