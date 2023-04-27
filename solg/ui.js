
$(function(){
	var dimm = '<div class="dimmed"></div>';
	var popOff = '[data-role=pop-off]';
	var popOn  = '[data-role=slide-pop-on], [data-role=ly-pop-on]';
    var active = 'active';
	var dimmName = '.dimmed';
	var layerActive = 'data-link-active';

    /* dimm */
    var setDimmed = function(isDimmed, layer) {
        if(isDimmed){
        	// $('body').addClass(active)
            $('.wrap').addClass(active)
            $('.wrap').append(dimm);
        }else{
        	// $('body').addClass(active)
            $('.wrap').removeClass(active);
            $(dimmName).remove();
        }
        if(layer){
            layer.attr('data-link-active', isDimmed);
        }
    }

	var popupClose = function(){
		var $curLayer = $('[' + layerActive + '=true]');

		if($curLayer.hasClass('ly-pop_wrap')){
			$('.ly-pop_wrap').fadeOut(200);
		} else {
			$curLayer.removeClass(active);
		}
		setDimmed(false, $curLayer);
	}

    /* Popup */
    var popupOnOff = function(){
        var layerActive = 'data-link-active';

        $(popOn).on('click',function(){
            var $this = $(this),
                $curLayer = $('#' + $this.data('link'));

            if( !$('[' + layerActive + '=true]').length ){

                if( $this.data('role') == 'ly-pop-on' ){
                    $curLayer.fadeIn(300);
                } else {
                    $curLayer.addClass(active);
                }

                setDimmed(true, $curLayer);
            }
        })

        $(popOff).on('click', function(){
			popupClose();
		})

		// var touchEvent = ('ontouchstart' in window) ? 'touchstart.dim' : 'click.dim';

		// $(document).on(touchEvent, dimmName, function(e){
		// 	popupClose();
		// });
    }

    // popup
    if ( $(popOn).length ){
		popupOnOff();
    };

    //알아두세요 버튼 위치 조정
	notiboxPosSet();

    $(window).on('resize',function(){
		notiboxPosSet();
    });

    // 검색창 포커스 일때 위치 이동
    var inputPosSet = function(){
    	var $input = $('.bx-sch-pos').find('.inp-sch');

    	$input.on('focus', function(){		
    		$(this).parents('.bx-sch-pos').removeClass('pos-center').addClass('pos-top');
    		$(this).parents('.bx-sch-pos').siblings('.bx-dep1').css({'display':'none'});
    		$("body, html").stop().animate({scrollTop:0});
    	}) 
    }
    inputPosSet();

    // input focus line, title color
    var inputTextLine = function(){
        var $input = $('input:not([readonly])').not(':checkbox').not(':radio');
        var $clear = $(this).find('.clearable-btn');
        $input.add($clear).on('focus', function(){
            if(!$(this).attr('readonly')){
                $(this).parents('.inp-row').addClass('inp-line');
                // $(this).parents('.inp-row').siblings('.inp_tit').css({"color":"#4a90e2"});
            }
        });

        $input.on('blur', function(){
            $(this).parents('.inp-row').removeClass('inp-line');
            // $(this).parents('.inp-row').siblings('.inp_tit').removeAttr('style');
        });
    }

    inputTextLine();

	// 아코디언 (기본)
	if($('.accor-bx').length > 0) {
		$('.accor-bx').each(function(){ // 페이지 로드시 기본이 펼쳐진 상태인 경우
			if($(this).is('.on')){
				$(this).find('.accor-cont').slideDown();
			}
		});
		$('.accor-btn').click(function(e){
			e.preventDefault();
			var accorCtl = $(this);
			var accorBx = accorCtl.parents('.accor-bx');
			var accorBxP = accorBx.parents();
			var accorCont = accorBx.find('.accor-cont');
			if(accorBx.hasClass('on')){
				accorBx.removeClass('on');
				accorCont.stop().slideUp();
			} else {
				accorBx.addClass('on');
				accorCont.stop().slideDown();
			}

			if (accorBxP.hasClass("accor-bl-wrap")){ // 해당 아코디언 외 형제 영역 닫히고 스크롤
				var accorBxS = accorBx.siblings();
				var accorContS = accorBxS.find(".trans-cont");

				accorContS.stop().slideUp();
				accorBxS.removeClass("on");
				
				setTimeout(function(){
	            	var accorTop = accorCtl.parents('.accor-tit').siblings('.trans-cont').offset().top - 100;
	            	$('body, html').stop().animate({scrollTop: accorTop});
	            }, 400)
			}
		})
	}

	// 완료 페이지
	if($('.done-cont-wrap').length){
		var $doneContWrap = $('.done-cont-wrap');
		$('body').stop().animate({scrollTop : 0});
		$doneContWrap.find('.done-btn').on('click', function(){
			var doneBtnOffset = $('.done-btn-tit').offset().top;
			var doneBtnPos = $('.done-btn-tit').position().top;
			if($doneContWrap.hasClass('on')){
				$doneContWrap.removeClass('on');
				$('body, html').stop().animate({scrollTop : 0}) // 2019-11-06
				$('.floating-done-cont').stop().animate({scrollTop : 0})
			} else {
				$doneContWrap.addClass('on');				
				$('body, html').stop().animate({scrollTop : doneBtnOffset - 49}); // 2019-11-06
				$('.floating-done-cont').stop().animate({scrollTop : doneBtnPos - 10});
			}
		});
	}

	// slide popup 포커스일때 스크롤 이동
	var popFocusMove = function(){
		var $this = $(".slide-pop_wrap").find("input:not([readonly])").not(":checkbox").not(":radio");
		var contHid = $('.cont-hid');

		$this.on('focus', function(){
			var $scrollPos = $(this).parent('.inp-row').position().top;
			$(contHid).addClass('downsize');
			$(contHid).animate({scrollTop : $scrollPos - 20}, 0);
		})
		$this.on('blur', function(){
			$(contHid).removeClass('downsize');
		})
	}
	popFocusMove();

	//기간조회 확장
	if($('.sch-sort .bx-sch_open').length > 0) {
		$('.sch-sort .bx-sch_open').click(function(e){
			var tg = $(this);
			var tgTop = tg.offset().top;
			var tgWrap = tg.parents('.sch-history');
			var tgCont = tgWrap.find('.calendar-wrap');
			e.preventDefault();

			if(tgWrap.hasClass('open')){
				tg.prop('title','펼치기');
				tgWrap.removeClass('open');
				tgCont.slideUp();
			} else {
				tg.prop('title','접기');
				tgWrap.addClass('open');
				tgCont.slideDown();
			}
		});
	}

	// tab
	$(document).on('click','[class*="tab-list_li"] a', function(){
		var $this  = $(this);
		var $tabWrap = $this.closest('.tab-wrap');
		var $tabCont = $tabWrap.children('.tab-cont');
		var $tabCtr = $this.parent('li');
		var tabIdx = $tabCtr.index();

		if (!$tabCtr.is('.is-active')){
			$tabCtr.addClass('is-active').siblings('li').removeClass('is-active');
			$tabCont.removeClass('is-active').eq(tabIdx).addClass('is-active');
		}
	});

	//자세히 보기 Toggle : 카드 추가정보
	$('.toggle-more').on('click', function(){
		var $target = $(this).parent('.toggle-btn').siblings('.tbl-toggle').find('.tbl-toggle_hide');
		if (!$(this).hasClass('open')){
			$(this).addClass('open');
			$target.slideDown();
		} else {
			$(this).removeClass('open');
			$target.slideUp();
		}
	});

	if ($('[data-name="check-all"]').length){ // 약관 선택
		chkAll();
	};

	if ($('*[data-name=scroll-wrap]').length){ //검색영역 스티키
		stickyScroll();
	};

	if ($('.clearable-btn').length){ // input 텍스트 삭제(X) 버튼
		clearBtnShowHide();
	}	

	// checkbox + slide
	chkShow();

	//받는통장메모, 내통장메모
	$('.msg-modify-btn').on('click', function(){
		var popupCont = $(this).parents('.cont-hid'),
			popupContTop = popupCont.scrollTop(),
			popupContHeight = popupCont.outerHeight(),
			inp = $(this).prevAll(".refer input[type='text']");

		popupCont.addClass('downsize');
		inp.attr('readonly',false);
		inp.focus();
		popupCont.scrollTop(popupContHeight);
		$(this).parent('.inp-row').addClass('inp-line');
	});
	$('.slide-pop_cont.in-memo').find(".refer input[type='text']").on('focusout', function(){
		$(this).parents('.cont-hid').removeClass('downsize');
		$(this).attr('readonly', true);
		$(this).parent('.inp-row').removeClass('inp-line');
	});

	// floating fix menu
	$('.float-fix-menu').find('.btn-more').on('click', function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.dimmed').remove();
			$(this).text('열기');
			$('.float-menu-list').hide();
			$('.float-menu-list').removeClass('on');
		}else{
			$(this).addClass('open');
			$('.wrap').append(dimm);
			$(this).text('닫기');
			$('.float-menu-list').show();
			$('.float-menu-list').addClass('on')
		}
	});

	// 금융상품 > 알아두세요
	if($('.noti-wrap').length){
		var deviceH = window.innerHeight;
		var buttonH = $('.btn-wrap').outerHeight();
		var notiDefaultPos = deviceH - buttonH - 85;
		var floatingSlideH = $('.floating-wrap').outerHeight();
		var floatingNotiPos = floatingSlideH - buttonH - 105;
		$('.noti-wrap').css('top', notiDefaultPos);
		$('.floating-wrap').find('.noti-wrap').css('top', floatingNotiPos);
		$('.noti-wrap').find('.accor-btn').click(function(){
			var scrollPos = $('.noti-wrap').find('.noti-tit').offset().top;
			$('body, html').stop().animate({scrollTop : scrollPos - 60}, 300); // 2019-11-06 수정
		})
		$('.myclub-bx').find('.accor-btn').click(function(){ // floating 알아두세요
			var scrollPos = $('.noti-wrap').position().top;
			$('.myclub-bx').stop().animate({scrollTop : scrollPos - 10}, 300);
		})
	}

	//공과금 > 납부정보 상세보기
	if($('.detail-wrap .detail-btn').length > 0) {
		$('.detail-wrap .detail-btn').click(function(e){
			var tg = $(this);
			var tgTop = tg.offset().top;
			var tgWrap = tg.parents('.detail-wrap');
			var tgCont = tgWrap.find('.tbl-complte');
			e.preventDefault();

			if(tgWrap.hasClass('on')){
				tg.prop('title','상세내용 열기');
				tgWrap.removeClass('on');
				tgCont.slideUp();
			} else {
				tg.prop('title','상세내용 닫기');
				tgWrap.addClass('on');
				tgCont.slideDown();
			}
		});
	}

	// 환율 계산기, Refresh 버튼
	 $('.btn-calculator, .btn-refresh').on({
 		touchstart: function(e){
 			e.preventDefault();
			$(this).addClass('press');
 		},
 		touchend: function(){
	 		$(this).removeClass('press');
 		}
 	});

	//마이페이지 메인
	if($('.my-main').length){
		var $doneContWrap = $('.my-main');
		$('body').stop().animate({scrollTop : 0});
		$doneContWrap.find('.user-money_btn').on('click', function(){
			var doneBtnOffset = $('.user-money').offset().top;
			var doneBtnPos = $('.user-money').position().top;
			if($doneContWrap.hasClass('on')){
				$doneContWrap.removeClass('on');
				$('body, html').stop().animate({scrollTop : 0}) // 2019-11-06 수정
			} else {
				$doneContWrap.addClass('on');
				$('body, html').stop().animate({scrollTop : doneBtnOffset - 49}); // 2019-11-06 수정
			}
		});
	}

	// 해외송금 안내페이지
	if($('.or-visual-cont').length){
		var $visualCont = $('.or-visual-cont');
		$('.wrap').css('overflow','hidden');
		$('.btn-wrap_fix').hide();
		$visualCont.find('.btn-more').on('click', function(){
			var moreBtnOffset = $('.btn-more-wrap').offset().top;
			if($visualCont.hasClass('scroll-on')){ // 2019-11-06 수정 (.scroll-on)
				$visualCont.removeClass('scroll-on'); // 2019-11-06 수정 (.scroll-on)
				$('body, html').stop().animate({scrollTop : 0}); // 2019-11-06 수정
			} else {
				$visualCont.addClass('scroll-on'); // 2019-11-06 수정 (.scroll-on)
				$('body, html').stop().animate({scrollTop : moreBtnOffset + 10}); // 2019-11-06 수정
				$('.wrap').removeAttr('style');
			};
		});

		$(window).on('scroll', function(){
			var scrolled = $(this).scrollTop();
			var transContY = $('.trans-cont').offset().top;
			if(scrolled > transContY - 100){
				$('.btn-wrap_fix').fadeIn();
				$('.wrap').addClass('fix-wrap');	
			} else if(scrolled < transContY - 250) {
				$('.btn-wrap_fix').fadeOut();
				$('.wrap').removeClass('fix-wrap');
			}
		})
	}

	//header fixed => absolute
	fixHead();
	// fixNone();

});

function chkAll(){
	/*
	** 전체선택 checkbox 속성1 : data-name="check-all"
	** 전체선택 checkbox 속성2 : data-chk-group="group-name"
	** 선택 checkbox 그룹 속성 : data-group="group-name" (해당 영역별 name 지정, 전체선택과 매칭, input이 아닌 상위에 속성을 줄 것)
	*/
	$(document).off('change.checkboxAll').on('change.checkboxAll','[data-name="check-all"], [data-group] input:checkbox', function(ev){
		var $el = $(ev.target);

		var upCheckboxAll = function($el){
			var state = $el.prop('checked');
			var groupName = $el.data('chkGroup');
			var $items = $('[data-group=' + groupName + ']').find('input:checkbox');

			$items.each(function(){
				// 전체동의 하위에 전체 동의가 있는경우 trigger 에 의해 전체동의 checkbox 가 두번 처리 됨
				if ($el.parents('.page_all_check').length || $el.parents('.terms-wrap').find('.page_all_check').length){
					$(this).prop('checked', state).trigger('change');
				} else {
					$(this).prop('checked', state);
				}
			});
		}

		var downCheckboxAll = function($el){
			var groupName = $el.closest('[data-group]').data('group');
			var $all = $('[data-chk-group='+ groupName +']');
			var $items = $('[data-group='+ groupName +']').find('input:checkbox');
			var itemLen = $items.length;
			var state = (itemLen == $items.filter(':checked').length);

			$all.prop('checked', state)
			return {
				$all : $all
			}
		}

		if ($el.data('name') == 'check-all'){
			if ($el.closest('[data-group]').length){
				//전체, 부분선택
				upCheckboxAll($el);
				downCheckboxAll($el);
			} else {
				//전체만 선택
				upCheckboxAll($el);
			}
		}  else {
			var allchk = downCheckboxAll($el)
				downCheckboxAll(allchk.$all)
		}
	})
};

function stickyScroll(){
	var sticky = $('*[data-name=smooth-scroll-nav]'),
	stickyArea = sticky.closest('[data-name=scroll-wrap]'),
	stickyTop = stickyArea.offset().top,
	fixedName = 'sticky';

	$(window).on('scroll', function(){
		var curScroll = $(this).scrollTop();

		if ( (curScroll >= stickyTop) ){
			stickyArea.addClass(fixedName);
		} else {
			stickyArea.removeClass(fixedName);
		}
	})
};

function clearBtnShowHide(){
	//input text clear
	$(document).on('focusin', '.clearable', function(e){
		var $input = $(this).find('input:not([readonly]), textarea');
		var $clear = $(this).find('.clearable-btn');

		// $clear.attr('role', 'button');
		$input.on('focus input', function(){
			if(!$(this).attr('readonly')){
				if(!!this.value) {
					$clear.attr('role', 'button');
					$clear.addClass('is-active');	
				}
			}else{
				$clear.removeAttr('role', 'button');
				$clear.removeClass('is-active');
			}
		});

		$clear.click(function() {
			$input.val('').text('');
			$clear.removeClass('is-active');
			$input.focus(); //다시 입력창에 포커스 보내기
		});

		$input.on('blur', function(){
			// $input.parents().removeAttr('style');
			// $(this).parent('.inp-row').removeClass('inp-line');
			setTimeout(function(){
				$clear.removeClass('is-active');
				$clear.removeAttr('role', 'button');
			}, 300)
		});

	});
};

// checkbox + slide show
function chkShow(){
	var $chkShow = $('*[data-role=chk-show]');
	$chkShow.on('change', function(){
		var $parents = $(this).parents('.bx-chk-slide');
		var $chkBtn = $parents.find('.chk-big-bx');
		var $Len = $(this).parent().find('input:checkbox:checked').length;
		var chkCont = $('.chk-slide-cont');
		if($Len == true){
			$chkBtn.siblings(chkCont).slideUp(300);
		} else {
			$chkBtn.siblings(chkCont).slideDown(300);
		}
	});
}; 

// flicking slide 
function flickingSlide(){ // 2019-09-16
	var flickSlide = document.getElementById('flickSlide');
	var fs = new Hammer(flickSlide);
	var dimm = '<div class="dimmed"></div>';
	fs.get('pan').set({direction:Hammer.DIRECTION_ALL});

	$('.wrap').on('touchmove touchstart', function(){
		$('.flick-slide-wrap').removeClass('on').css({'max-height':'170px'}); // 2019-11-11 수정
		$('.flick-slide-wrap').addClass('off');
		$('.dimmed').remove();
		$('.wrap').removeClass('active');
	})

	$('.flick-slide-wrap').on('click', function(){ // 2019-11-13 추가
		$('.flick-slide-wrap').toggleClass('on');

		if($('.flick-slide-wrap').hasClass('on')){
			$('.dimmed').remove();
			$('.wrap').append(dimm);
			$('.dimmed').css({'z-index':'999'});
			$('.wrap').addClass('active');
			$('.flick-slide-wrap').css({'max-height':'100%'});
			$('.flick-slide-wrap').removeClass('off');
			$('.flick-slide-wrap').addClass('on');
		} else {
			$('.flick-slide-wrap').css({'max-height':'170px'});
			$('.wrap').removeClass('active');
			$('.flick-slide-wrap').removeClass('on');
			$('.flick-slide-wrap').addClass('off');
			$('.dimmed').remove();
		}
	})

	fs.on("panup pandown", function(ev) {
		if (ev.type == 'panup'){
			$('.dimmed').remove();
			$('.wrap').append(dimm);
			$('.dimmed').css({'z-index':'999'});
			$('.wrap').addClass('active');
			$('.flick-slide-wrap').css({'max-height':'100%'});
			$('.flick-slide-wrap').removeClass('off');
			$('.flick-slide-wrap').addClass('on');
		};
		if (ev.type == 'pandown'){
			$('.flick-slide-wrap').css({'max-height':'170px'}); // 2019-11-11 수정
			$('.wrap').removeClass('active');
			$('.flick-slide-wrap').removeClass('on');
			$('.flick-slide-wrap').addClass('off');
			$('.dimmed').remove();
		};
	});
}

//툴팁
function tooltip(el){
	var $this = $(el);
	var tooltipBox = $this.closest('.tooltip-wrap');

	if (!tooltipBox.is('.on')){
		$('.tooltip-wrap').each(function(){
			if($(this).is('.on')){
				$('.tooltip-wrap').removeClass('on');
			}
		});
		tooltipBox.addClass('on');
	} else {
		tooltipBox.removeClass('on');
	}
}

//카드 조회설정
function inpselect(el){
	var $this = $(el);
	var inpselectBox = $this.closest('.inp-select');
	var inpselectCon = '.inp-select-cont';

	if (!inpselectBox.is('.open')){
		inpselectBox.find(inpselectCon).fadeIn(200);
		//inpselectBox.find(inpselectCon).slideDown(200);
		inpselectBox.addClass('open');
	} else { 
		inpselectBox.removeClass('open');
		inpselectBox.find(inpselectCon).fadeOut(200);
		//inpselectBox.find(inpselectCon).slideUp(200);
	}
} 
  
function notiboxPosSet(){
	if($('.notify-wrap').length > 0){
		var notify = '.notify-wrap',
			fixbtn = '.btn-wrap_fix',
			notiDefaultTop = 36, //default margin top
			notiChangeTop  = notiDefaultTop;

		$(notify).css({ 'marginTop' : notiChangeTop });

		var contentH = $('.content').outerHeight(),
			contentinH = $('.container').outerHeight() - $('.header').outerHeight(),
			bottomPos = contentinH + parseInt($('.content').css('paddingBottom')) - 5,
			fixbtnH = $(fixbtn).outerHeight();
			//console.log(contentinH);
		if( contentH <= contentinH ){
			var notiCurTop = $(notify).offset().top;

			//fixed button 유무
			if( $(fixbtn).length ){ 
				bottomPos = bottomPos - fixbtnH * 2;
			}
			notiChangeTop = bottomPos - notiCurTop;
		}
		if(notiDefaultTop != notiChangeTop){
			$(notify).css({ 'marginTop' : notiChangeTop })
		}
	}
}


//ios만 적용
function fixHead(){
	var $input = $('input:not([readonly])').not(':checkbox').not(':radio').not('.slide-pop_wrap input').not('.bx-sel input').not('.btn-select').not('.bx-sch-pos .inp-sch').not('.btm-fix-srch input').not('.inp-certi input');
	$input.each(function(){
		$(this).bind('focus', function(){
			//$("html, body").animate({scrollTop:$(this).offset().top-90}, 200);
			$('body, .wrap').addClass('h-auto')
			$('.container').addClass('h20')
			$('.header, .btn-wrap_fix').css('position','absolute')
			$('.slide-pop_wrap').addClass('hid')
		});
		$(this).bind('blur', function(){
			$('body, .wrap').removeClass('h-auto')
			$('.container').removeClass('h20')
			$('.header, .btn-wrap_fix').css('position','fixed')
			$('.slide-pop_wrap').removeClass('hid')
		});
	});
}