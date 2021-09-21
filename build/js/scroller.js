
(function($){

	var counter = 0;

    $.blockScroller = function( el, elements, backButton, forwardButton, ScrollSpeed, direction, autoscroll, ElementsShiftRIGHT ){

		var $el = $( el );
        var base = this;
        var interval = 0;
        base.$el = $el;
        base.el = el;

        base.$el.data( "blockScroller", base );

        base.init = function(){

            if ( typeof direction == 'undefined' || typeof direction != 'string' || direction != 'vertical' ) {
            	direction = 'horizontal';
            }

            if ( typeof autoscroll == 'undefined' ) {
            	autoscroll = false;
            } else {
            	autoscroll = autoscroll? true: false;
            }

			var directionProp;
			var widthHeightProp;
			var widthHeightMethod;

			if ( direction == 'vertical' ) {
				directionProp = 'top';
				widthHeightProp = 'height';
				widthHeightMethod = 'outerHeight';
			} else {
				directionProp = 'left';
				widthHeightProp = 'width';
				widthHeightMethod = 'outerWidth';
			}

			var IE = false;
			if (!jQuery.support.opacity) { IE = true; }

			var elementsParent = elements.eq(0).parent().eq(0);
			var $previewLine = ( elementsParent.get(0) === $el.get(0) )? null: elementsParent;
			var previewLineRealWidth = 0;
			var previewLineRealWidthBeforeAutoscroll = 0;
			var scrollAnimated = false;
			var elementsDouble;
			var autoscrollingFunction;
			var scrollSpeed;

			var startCord = 0;

			if ( $previewLine == null ) {
				$previewLine = $( document.createElement( 'DIV' ) ).attr( 'id', 'js-scroller-block-'+(++counter) );
				$previewLine.insertBefore( elements.eq(0) );
				$previewLine = $( '#js-scroller-block-'+counter )
				elements.each( function( i, elem ){
					var $this = $( elem );
					$this.detach()
					$this.appendTo( $previewLine );
				});
			}

			$previewLine.css({
				'position': 'relative'
			});
			$previewLine.css( directionProp, '0px' );

			if ( autoscroll ) {
				elementsDouble = elements.clone( true );
				elementsDouble.insertAfter( elements.last() );
				elements = elements.add( elementsDouble );
			} else {
				autoscroll = false;
			}

			setLineRealWidth();

			if ( startCord > 0 ) {
				var wrapperWidth = $el[ widthHeightMethod ]();
				if ( startCord > ( previewLineRealWidth - wrapperWidth ) ) {
					startCord = ( previewLineRealWidth - wrapperWidth ) + ElementsShiftRIGHT;
				}
				$previewLine.css( directionProp, '-'+startCord+'px' );
			}

			checkScroll();

			$previewLine.find( 'img' ).each( function( i, elem ){
				var $this = $( elem );
				var newImage = $( document.createElement( 'img' ) );
					newImage.one( 'load', function(e){
						setLineRealWidth();
						checkScroll();
					});
					newImage.attr( 'src', $this.attr( 'src' ) );
			});

			if ( autoscroll ) {

				var animationSpeed = scrollSpeed;
				var navPressed = false;

				autoscrollingFunction = function( direction ){

					var k = ( previewLineRealWidthBeforeAutoscroll + ElementsShiftRIGHT ) / scrollSpeed;
					var animp = {};
					var pos;
					var cspeed;

					if ( direction > 0 ) {
						animp[directionProp] = '-'+( previewLineRealWidthBeforeAutoscroll + ElementsShiftRIGHT )+'px';
						pos = ( ( parseInt( $previewLine.css( directionProp ) ) * 2 ) / -2 ) - ( previewLineRealWidthBeforeAutoscroll + ElementsShiftRIGHT );
						cspeed = parseInt( pos )? Math.round( ( ( ( previewLineRealWidthBeforeAutoscroll + ElementsShiftRIGHT ) - pos ) / k ) - scrollSpeed ): scrollSpeed;
					} else {
						animp[directionProp] = 0;
						var realPos = parseInt( $previewLine.css( directionProp ) );
						pos = ( ( realPos - ( previewLineRealWidthBeforeAutoscroll + ElementsShiftRIGHT ) ) * 2 ) / -2;
						if ( ( pos + $el[ widthHeightMethod ]() ) > previewLineRealWidth ) {
							pos = pos - previewLineRealWidthBeforeAutoscroll;
						}
						cspeed = parseInt( pos )? Math.round( ( pos / k ) ): scrollSpeed;
					}

					if ( navPressed ) {
						cspeed = Math.round( cspeed / 10 );
					}

					$previewLine
						.stop()
						.css( directionProp, '-'+pos+'px' );

					$previewLine
						.animate( animp, cspeed, 'linear', function(){
							autoscrollingFunction( direction );
						});
				};

				autoscrollingFunction( 1 );

				$previewLine.bind({
					'mouseenter': function() {
						$previewLine.stop();
					},
					'mouseleave': function() {
						autoscrollingFunction( 1 );
					}
				});

				if ( backButton ) {
					backButton.bind({
						'mousedown': function(){
							navPressed = true;
							autoscrollingFunction( -1 );
						},
						'mouseup': function(){
							if ( navPressed ) {
								navPressed = false;
								autoscrollingFunction( 1 );
							}
						}
					});
				}

				if ( forwardButton ) {
					forwardButton.bind({
						'mousedown': function(){
							navPressed = true;
							autoscrollingFunction( 1 );
						},
						'mouseup': function(){
							if ( navPressed ) {
								navPressed = false;
								autoscrollingFunction( 1 );
							}
						}
					});
				}

			} else {

				if ( backButton ) {
					backButton.bind( 'click', function(e){
						setLineRealWidth();
						scrollPreviews( -1 );
					});
				}

				if ( forwardButton ) {
					forwardButton.bind( 'click', function(e){
						setLineRealWidth();
						scrollPreviews( 1 );
					});
				}
			}


			function setLineRealWidth() {
				previewLineRealWidth = 0;
				elements.each( function( i, elem ){
					var $this = $( elem );
					if ( elem.hasAttribute( 'data-start-marker' ) ) {
						startCord = previewLineRealWidth;
					}
					previewLineRealWidth += $this[ widthHeightMethod ]( true );
				});
				$previewLine.css( widthHeightProp, previewLineRealWidth+'px' );
				previewLineRealWidthBeforeAutoscroll = previewLineRealWidth / 2;
				scrollSpeed = previewLineRealWidthBeforeAutoscroll * 27.3;
			}

			function getLineRealWidth() {
				var _previewLineRealWidth = 0;
				elements.each( function( i, elem ){
					var $this = $( elem );
					_previewLineRealWidth += $this[ widthHeightMethod ]( true );
					if ( autoscroll ) {
						console.log( $this[ widthHeightMethod ]( true ) );
					}
				});
				return _previewLineRealWidth;
			}

			function checkScroll() {
				if ( autoscroll ) {
					if ( backButton ) backButton.fadeIn( 250 );
					if ( forwardButton ) forwardButton.fadeIn( 250 );
					return true;
				}
				var leftTopPosition = parseInt( $previewLine.css( directionProp ) );
					leftTopPosition = leftTopPosition - ( leftTopPosition*2 );
				if ( leftTopPosition > 0 ) {
					if ( backButton ) backButton.fadeIn( 250 );
				} else {
					if ( backButton ) backButton.fadeOut( 150 );
				};
				if ( ( $previewLine[ widthHeightMethod ]() - ( leftTopPosition + $el[ widthHeightMethod ]() ) + ElementsShiftRIGHT ) > 0 ) {
					if ( forwardButton ) forwardButton.fadeIn( 250 );
				} else {
					if ( forwardButton ) forwardButton.fadeOut( 150 );
				}
				return true;
			}

			function scrollPreviews( dir, shift ) {
				if ( scrollAnimated === false ) {
					$previewLine.stop();
					var viewPort = $el[ widthHeightMethod ]();
					var leftTopPosition = parseInt( $previewLine.css( directionProp ) );
						leftTopPosition = leftTopPosition - ( leftTopPosition*2 );
					var freeSpace = ( $previewLine[ widthHeightMethod ]() - ( leftTopPosition + viewPort ) ) + ElementsShiftRIGHT;

					var NEWleftTopPosition = null;

					if ( dir < 0 ) {
						if ( leftTopPosition > viewPort ) {
							NEWleftTopPosition = -( parseInt( leftTopPosition - viewPort ) + ElementsShiftRIGHT );
						} else if ( leftTopPosition > 0 ) {
							NEWleftTopPosition = 0;
						}
					} else if ( dir > 0 ) {
						if ( freeSpace > viewPort ) {
							NEWleftTopPosition = -( parseInt( leftTopPosition + viewPort ) - ElementsShiftRIGHT );
						} else if ( freeSpace > 0 ) {
							NEWleftTopPosition = -( parseInt( leftTopPosition + freeSpace ) );
						}
					}

					if ( NEWleftTopPosition !== null ) {
						if ( typeof shift !== 'undefined' && parseInt( shift ) > 1 ) {
							if ( dir < 0 ) {
								NEWleftTopPosition = NEWleftTopPosition + ( ( viewPort - ElementsShiftRIGHT ) * ( parseInt( shift ) - 1 ) );
							} else if ( dir > 0 ) {
								NEWleftTopPosition = NEWleftTopPosition - ( ( viewPort - ElementsShiftRIGHT ) * ( parseInt( shift ) - 1 ) );
							}
							if ( NEWleftTopPosition > 0 ) {
								NEWleftTopPosition = 0;
							} else if ( NEWleftTopPosition < -( ( $previewLine[ widthHeightMethod ]() - viewPort ) + ElementsShiftRIGHT ) ) {
								NEWleftTopPosition = -( ( $previewLine[ widthHeightMethod ]() - viewPort ) + ElementsShiftRIGHT );
							}
						}
						scrollAnimated = true;
						var animp = {};
						animp[directionProp] = ''+NEWleftTopPosition+'px';
						$previewLine.animate( animp, ScrollSpeed, ( jQuery.easing.easeOutQuad )? 'easeOutQuad': 'swing', function(){
							checkScroll();
							scrollAnimated = false;
						});
					}
				}
			}
        };

		if ( typeof elements == 'string' ) {
			elements = $( elements );
		} else {
			if ( typeof elements != 'object' || !elements.length ) {
				elements = null;
			}
		}
		if ( typeof backButton == 'string' ) {
			backButton = $( backButton );
		} else if ( backButton == null || typeof backButton == 'undefined' || typeof backButton != 'object' || !backButton.length ) {
			backButton = null;
		}

		if ( typeof forwardButton == 'string' ) {
			forwardButton = $( forwardButton );
		} else if ( forwardButton == null || typeof forwardButton == 'undefined' || typeof forwardButton != 'object' || !forwardButton.length ) {
			forwardButton = null;
		}

		if ( ScrollSpeed == null || typeof ScrollSpeed == 'undefined' || !ScrollSpeed ) {
			ScrollSpeed = 0;
		}
		ScrollSpeed = parseInt( ScrollSpeed );
		if ( isNaN( ScrollSpeed ) || ScrollSpeed < 0 ) {
			ScrollSpeed = 600;
		}
		ElementsShiftRIGHT = parseInt( ElementsShiftRIGHT );
		if ( isNaN( ElementsShiftRIGHT ) ) {
			ElementsShiftRIGHT = 0;
		}

		if ( elements ) {
			if ( $el.is( ':visible' ) ) {
				base.init();
			} else {
		        interval = setInterval( function(){
					if ( $el.is( ':visible' ) ) {
						clearInterval( interval );
						base.init();
					}
		        }, 100 );
			}
		}
	};

	$.fn.blockScroller = function( elements, backButton, forwardButton, ScrollSpeed, direction, autoscroll, ElementsShiftRIGHT ){
		return this.each( function(){
			( new $.blockScroller( this, elements, backButton, forwardButton, ScrollSpeed, direction, autoscroll, ElementsShiftRIGHT ) );
		});
	};

})(jQuery);




$(document).ready(function() {
	$('.banners-2-scroller').blockScroller(
			$('.section-partners .banners-2-scroller').find( 'a' ),
			'.section-partners > .left',
			'.section-partners > .right',
			900, 'horizontal', true, -2
	);
});
