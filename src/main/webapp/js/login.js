$("#login-btn").click(function(){
    //2.发送AJAX请求，更新数据
    $.ajax({
        url : "http://localhost:8080/meetingroom/user/login",
        type : "POST",
        datatype:"application/json",
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        data : {
            "techerId":$("#LAY-user-login-teacherId").val(),
            "password":$("#LAY-user-login-password").val()
        },
        success : function(result) {
            if (result.code == 101) {
                sessionStorage.setItem("teacherName",result.data.teacherName);
				sessionStorage.setItem("userId",result.data.userId);
				location.href = "http://localhost:8080/meetingroom/index.jsp";
                console.log(dataInfo);
            }else {
            	alert(result.msg);
            }
        },
        error : function(result) {

        }
    });
});
