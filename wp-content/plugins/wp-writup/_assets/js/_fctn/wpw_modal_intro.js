var $ = jQuery.noConflict();
$(document).ready(function($){
	//check if a .wpw_modal_intro_cd-tour-wrapper exists in the DOM - if yes, initialize it
	$('.wpw_modal_intro_cd-tour-wrapper').exists() && initTour();

	function initTour() {
		var tourWrapper = $('.wpw_modal_intro_cd-tour-wrapper'),
			tourSteps = tourWrapper.children('li'),
			stepsNumber = tourSteps.length,
			coverLayer = $('.wpw_modal_intro_cd-cover-layer'),
			tourStepInfo = $('.wpw_modal_intro_cd-more-info'),
			tourTrigger = $('#wpw_modal_intro_cd-tour-trigger');

		//create the navigation for each step of the tour
		createNavigation(tourSteps, stepsNumber);


		tourTrigger.on('click', function(){
			//start tour
			if(!tourWrapper.hasClass('active')) {
				//in that case, the tour has not been started yet
				tourWrapper.addClass('active');
				showStep(tourSteps.eq(0), coverLayer);
                $("#wpw_help_box").addClass('wpw_hide');
                
			}
		});

		//change visible step
		tourStepInfo.on('click', '.wpw_modal_intro_cd-prev', function(event){
			//go to prev step - if available
			( !$(event.target).hasClass('inactive') ) && changeStep(tourSteps, coverLayer, 'prev',stepsNumber);
		});
		tourStepInfo.on('click', '.wpw_modal_intro_cd-next', function(event){
			//go to next step - if available
			( !$(event.target).hasClass('inactive') ) && changeStep(tourSteps, coverLayer, 'next',stepsNumber);
		});

		//close tour
		tourStepInfo.on('click', '.wpw_modal_intro_cd-close', function(event){
			closeTour(tourSteps, tourWrapper, coverLayer);
		});
        
		tourStepInfo.on('click', '.wpw_modal_intro_bt-close', function(event){
			closeTour(tourSteps, tourWrapper, coverLayer);
		});
        //detect swipe event on mobile - change visible step
		tourStepInfo.on('swiperight', function(event){
			//go to prev step - if available
			if( !$(this).find('.wpw_modal_intro_cd-prev').hasClass('inactive') && viewportSize() == 'mobile' ) changeStep(tourSteps, coverLayer, 'prev',stepsNumber);
		});
		tourStepInfo.on('swipeleft', function(event){
			//go to next step - if available
			if( !$(this).find('.wpw_modal_intro_cd-next').hasClass('inactive') && viewportSize() == 'mobile' ) changeStep(tourSteps, coverLayer, 'next',stepsNumber);
		});

		//keyboard navigation
		$(document).keyup(function(event){
			if( event.which=='37' && !tourSteps.filter('.is-selected').find('.wpw_modal_intro_cd-prev').hasClass('inactive') ) {
				changeStep(tourSteps, coverLayer, 'prev',stepsNumber);
			} else if( event.which=='39' && !tourSteps.filter('.is-selected').find('.wpw_modal_intro_cd-next').hasClass('inactive') ) {
				changeStep(tourSteps, coverLayer, 'next',stepsNumber);
			} else if( event.which=='27' ) {
				closeTour(tourSteps, tourWrapper, coverLayer);
			}
		});
	}

	function createNavigation(steps, n) {
        //<div class="wpw_modal_intro_cd-nav"><span><b class="wpw_modal_intro_cd-actual-step">1</b> of '+n+'</span><ul class="wpw_modal_intro_cd-tour-nav"><li><a href="#0" class="wpw_modal_intro_cd-prev">&#171; Previous</a></li><li><a href="#0" class="wpw_modal_intro_cd-next">Next &#187;</a></li></ul></div>
		var tourNavigationHtml = '<div class="wpw_modal_intro_cd-nav"><span><b class="wpw_modal_intro_cd-actual-step">1</b> sur '+n+'</span><ul class="wpw_modal_intro_cd-tour-nav"><li><a href="#0" class="wpw_modal_intro_cd-prev">&#171; Précedent</a></li><li><a href="#0" class="wpw_modal_intro_cd-next">Suivant &#187;</a></li></ul></div><a href="#0" class="wpw_modal_intro_cd-close">Close</a>';

		steps.each(function(index){
			var step = $(this),
				stepNumber = index + 1,
				nextClass = ( stepNumber < n ) ? '' : 'inactive',
				prevClass = ( stepNumber == 1 ) ? 'inactive' : '';
			var nav = $(tourNavigationHtml).find('.wpw_modal_intro_cd-next').addClass(nextClass).end().find('.wpw_modal_intro_cd-prev').addClass(prevClass).end().find('.wpw_modal_intro_cd-actual-step').html(stepNumber).end().appendTo(step.children('.wpw_modal_intro_cd-more-info')).end().find('.wpw_modal_intro_cd-next.inactive').html('Fermer').end().find('.wpw_modal_intro_cd-next.inactive').addClass('wpw_modal_intro_bt-close').end();
		});
        
	}

	function showStep(step, layer) {
		step.addClass('is-selected').removeClass('move-left');
		smoothScroll(step.children('.wpw_modal_intro_cd-more-info'));
		showLayer(layer);
	}

	function smoothScroll(element) {
		(element.offset().top < $(window).scrollTop()) && $('body,html').animate({'scrollTop': element.offset().top}, 100);
		(element.offset().top + element.height() > $(window).scrollTop() + $(window).height() ) && $('body,html').animate({'scrollTop': element.offset().top + element.height() - $(window).height()}, 100); 
	}

	function showLayer(layer) {
		layer.addClass('is-visible').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			layer.removeClass('is-visible');
		});
	}

	function changeStep(steps, layer, bool,Number) {
		var visibleStep = steps.filter('.is-selected'),
			delay = (viewportSize() == 'desktop') ? 300: 0; 
		visibleStep.removeClass('is-selected');

		(bool == 'next') && visibleStep.addClass('move-left');

		setTimeout(function(){
			( bool == 'next' )
				? showStep(visibleStep.next(), layer)
				: showStep(visibleStep.prev(), layer);
		}, delay);

	}

	function closeTour(steps, wrapper, layer) {
		steps.removeClass('is-selected move-left');
		wrapper.removeClass('active');
		layer.removeClass('is-visible');
        $.ajax({
            url : $("#wpw_modal_intro").attr('wpw_url_ajax'),
            type : 'POST',
            data: "action=wpw_update_clhlp",
            success : function(data){}
        });
	} 

	function viewportSize() {
		/* retrieve the content value of .wpw_modal_intro_cd-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.wpw_modal_intro_cd-tour-wrapper'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}
});
//check if an element exists in the DOM
$.fn.exists = function(){ return this.length > 0; }