// JavaScript Documentc
$( document).ready(function(e) {
	var h=$(window).height()-170;
	if($(window).width()<=1366){
		
		$(".wrap .lunbo>li").height(h);
		$(".side_menu").height(h);
	}
 var a=true;
 $("#rain_y").click(function(){
 if(a){
	 $("#rain_4").css("display","block");
		a=false;
	}else{
	 $("#rain_4").css("display","none");
	 a=true;
	}
 })
 
  var b=true;
 $("#rain_s").click(function(){
 if(b){
	 $("#rain_5").css("display","block");
		b=false;
	}else{
	 $("#rain_5").css("display","none");
	 b=true;
	}
 })
   var c=true;
 $("#rain_q").click(function(){
 if(c){
	 $("#rain_6").css("display","block");
	
		c=false;
	}else{
	 $("#rain_6").css("display","none");
	 
	 c=true;
	}
 })
    var d=true;
 $("#rain_l").click(function(){
 if(d){
	 $("#rain_7").css("display","block");
		d=false;
	}else{
	 $("#rain_7").css("display","none");
	 d=true;
	}
 })
 $('.duty').click(function(e) {
		var as=$(".aboluo-w-700").css("display");
			 if(as=="block"){
				  $('.aboluo-w-700').stop().slideUp();
				 }
				 else if(as=="none")
				 {
					$('.aboluo-w-700').stop().slideDown(); 
					 }
		
    });
});
$(function(){
	$("#prevention").click(function(){
		  	hide();
	   $(this).addClass('current');
	     $("#prevention_content").addClass('current');
		$("#prevention_content").css({'left':'650px',"display":"block"}).stop().animate({'left':'0'},500);
		})
	$("#drought").click(function(){
		  	hide();
			  $(this).addClass('current');
			  $("#drought_content").addClass('current');
		$("#drought_content").css({'left':'650px',"display":"block"}).stop().animate({'left':'0'},500);
		})	
	$("#weater").click(function(){
		  	hide();
		$(this).addClass('current');
		$("#weater_content").addClass('current');
		$("#weater_content").css({'left':'650px',"display":"block"}).stop().animate({'left':'0'},500);
		})
	$("#duty").click(function(){
		hide();
		$(this).addClass('current');
		$("#duty_content").addClass('current');
		$("#duty_content").css({'left':'650px',"display":"block"}).stop().animate({'left':'0'},500);
		})
		$("#home_main").click(function(){
      	hide();
		$(this).addClass('current');
		$("#main_content").addClass('current');
		$("#main_content").css({'left':'650px',"display":"block"}).stop().animate({'left':'0'},500);
		})
		function hide(){
			$('.footer>ol>li').each(function(index, element) {
            $(this).removeClass('current');
        });
         $("#main_content,#drought_content,#weater_content, #duty_content,#prevention_content").css("display","none");
		 $("#main_content,#drought_content,#weater_content, #duty_content,#prevention_content").removeClass('current');
			}
	})

/*	$(function(){
		var zInd = 11;
		$('.footer>ol>li').click(function(e) {
			$('.wrap .lunbo>li').eq(0).removeClass('current');
			zInd++;
            $(this).addClass('current').siblings().removeClass('current');
			var myIndex = $(this).index();
			$('.wrap .lunbo>li').eq(myIndex).css({'left':'650px','z-index':''+zInd+''}).stop().animate({'left':'0'},500);
        });
	})*/
//	$('.wrap .lunbo').height(window.screen.height*0.7);
	//$('.wrap .lunbo>li').height(window.screen.height*0.7);
	$('.recent').click(function(e) {
        openwind();
    });
	function openwind() { 
	window.open ('近期整体汛情较为平.pdf','','width='+window.screen.width+',height='+window.screen.height+',top=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,');
	}
	function show_map() { 
	window.open ('http://192.168.0.228/shyj_hlxj/index.htm','','width='+window.screen.width+',height='+window.screen.height+',top=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,');
	}
	$('.opp').click(function(e) {
        openwin();
    });
	function openwin() { 
	window.open ('第33期.pdf','','width='+window.screen.width+',height='+window.screen.height+',top=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,');
	}