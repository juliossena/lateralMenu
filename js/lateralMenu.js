$(function(){
	var idSelected = "001";
	
	$("li").click(function(){
		alert('entrou');
		$("li").attr('class', '');
		$(this).attr('class', 'selected');
		$("#body_" + idSelected).attr('class', 'bodyLateralMenu');
		
		idSelected = $(this).attr("id");
		
		$("#body_" + idSelected).attr('class', 'bodyLateralMenuSelected');
		
		if ($(this).text() == '+ Nova Questao') {
			$(this).text('Questao ' + idSelected);
			$("ul").append("<li>+ Nova Questao</li>");
		}
		
	});
});
