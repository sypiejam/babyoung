$(function(){
	//GNB
	var gnbUI = {
		click : function (target, speed) {
		var _self = this,
			$target = $(target);
		_self.speed = speed || 300;
		
		$target.each(function(){
			if(findChildren($(this))) {
				return;
			}
			//$(this).addClass('noDepth');
		});
		
		function findChildren(obj) {
			return obj.find('.gnb-depth1').length > 0;
		}
		
		$target.on('click','a', function(e){
			e.stopPropagation();
			var $this = $(this),
				$depthTarget = $this.next(),
				$siblings = $this.parent().siblings();
			
			$this.parent('.gnblist-depth1').find('.gnblist-depth2__item').removeClass('is-active');
			$siblings.removeClass('is-active');
			$siblings.find('.gnb-depth2').slideUp(250);
			
			if($depthTarget.css('display') == 'none') {
				_self.activeOn($this);
				$depthTarget.slideDown(_self.speed);
			} else {
				$depthTarget.slideUp(_self.speed);
				_self.activeOff($this);
			}
		})
		
		},
		activeOff : function($target) {
			$target.parent().removeClass('is-active');
		},
		activeOn : function($target) {
			$target.parent().addClass('is-active');
		}
	};
	
	// Call gnbUI
	$(function(){
		gnbUI.click('.l-gnb', 300)
	});
	
	//레이어 팝업
	if ($(['*[data-roll=popup-on]'].length)){
        var layerOn = '*[data-roll=popup-on]';
        var layerOff = '*[data-roll=popup-off]';

		$(layerOn).click(function(){
            var href = $(this).attr('data-link');

            $('body').css({overflow:"hidden"});
		    $('#'+href).addClass("is-active");
		    return false;
		});
		
		$(layerOff).click(function(){
          var isActive = $(this).parents('.popup-wrap');

		  isActive.removeClass('is-active');
          $('body').removeAttr("style");
		});
	}
	
	//검색영역
	if($(".togglebox__btn").length > 0) {
		$(".togglebox__btn").off('click').on('click',function(e){
			var tg = $(this);
			var tgWrap = tg.parents(".togglebox");
			var tgCont = tgWrap.find(".togglebox__cont");
			e.preventDefault();

			if(tgWrap.hasClass("is-open")){
				tg.text("open");
				tgWrap.removeClass("is-open");
				tgCont.slideUp();
			} else {
				tg.text("close");
				tgWrap.addClass("is-open");
				tgCont.slideDown();
			}
		});
	}

	//서비스URL
	$('.servicelistbox .btn-more').on('click',function(){
		var hid = $(this).parents('.servicelistbox').find('.servicelist__hid');
		var tglBtn = $(this).find('.toggle-txt');
		var state = $(this).is('.is-active');
		var tglTxt;

		if(!hid.is(':animated')){
			if(!state){
				$(this).addClass('is-active');
				hid.slideDown(500);
				tglTxt = tglBtn.text('닫기');
			}else {
				$(this).removeClass('is-active');
				hid.slideUp(500);
				tglTxt = tglBtn.text('더보기');
			}
		}
	});

	//달력
	$.datepicker.setDefaults({
		closeText: "닫기",
		prevText: "이전달",
		nextText: "다음달",
		currentText: "오늘",
		monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
		"7월", "8월", "9월", "10월", "11월", "12월"
		],
		monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
		"7월", "8월", "9월", "10월", "11월", "12월"
		],
		dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
		weekHeader: "주",
		dateFormat: "yy.mm.dd", // 날짜형태 예)yy년 m월 d일
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "년"
	})

	$(".datepicker").datepicker({
		minDate: 0
	})

	//시간선택 기능 추가
	$(function(){
		$(".datetimepicker").datetimepicker({
			showSecond: true,
			timeFormat:'HH:mm',
			controlType: 'select',
			oneLine: true
		});
	})

	var tgFile = $('#file'); 
	tgFile.on('change', function(){
		var cur=$(".filebox input[type='file']").val();
	  	$(".upload").val(cur);
	}); 
})


// 탭
$(document).on('click','[class*="tablist__item"] a', function(){
	var $this  = $(this);
	var $tabWrap = $this.closest('.tabwrap');
	var $tabCont = $tabWrap.children('.tabcont');
	var $tabCtr = $this.parent('li');
	var tabIdx = $tabCtr.index();

	if (!$tabCtr.is('.is-active')){
		$tabCtr.addClass('is-active').siblings('li').removeClass('is-active');
		$tabCont.removeClass('is-active').eq(tabIdx).addClass('is-active');
	}
});