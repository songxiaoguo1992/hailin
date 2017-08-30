$(function(){
var h=$(window).height();
$("div#hlgq").height(h-60);
	$(window).resize(function(){
		var h=$(window).height();
		$("div#hlgq").height(h-60);
	})
})