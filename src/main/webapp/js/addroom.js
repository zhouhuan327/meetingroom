$(document).on("click","#update",function() {
		if(sessionStorage.getItem("userId")==1){	
		$.ajax({
	        url : "http://localhost:8080/meetingroom/room/add",
	        type : "POST",
	        datatype:"application/json",
	        contentType:"application/json;charset=utf-8",
	        data : JSON.stringify({
	            "roomId":$("#roomId").val(),
	            "location":$("#location").val(),
	            "storey":$("#storey").val()
	        }),
	        success : function(result) {
	            if (result.code == 101) {
					alert("成功！");
					top.location = "http://localhost:8080/meetingroom/index.jsp";
	            }else {
	            	alert(result.msg);
	            }
	        },
	        error : function(result) {

	        }
	    });
		}
		else{
			alert("您没有权限！");
		}
	
});

        
         