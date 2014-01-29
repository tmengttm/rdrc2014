/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

(function($){
	$window = $(window);
	$slide = $('.homeSlide');
	$slideHalf = $('.homeSlideHalf')
	$slideTall = $('.homeSlideTall');
	$body = $('body');

	adjustWindow();

	function adjustWindow(){
		//init skrollr
		var s = skrollr.init();


		winH = viewportSize.getHeight();
		$slide.height(winH);
		$slideTall.height(winH*2);
		$slideHalf.height(winH*3/5);

		s.refresh($('.homeSlide'));
	}


})(jQuery);