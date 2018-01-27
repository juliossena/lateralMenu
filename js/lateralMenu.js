$(function(){
	var idSelected = "001";
	
	$("li").click(function(){
		$("li").attr('class', '');
		$(this).attr('class', 'selected');
		$("#body_" + idSelected).attr('class', 'bodyLateralMenu');
		
		idSelected = $(this).attr("id");
		
		$("#body_" + idSelected).attr('class', 'bodyLateralMenuSelected');
		
		
	});
});
