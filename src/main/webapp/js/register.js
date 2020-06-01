$("#register-btn").click(function(){
    //2.发送AJAX请求，更新数据
    $.ajax({
        url : "http://localhost:8080/meetingroom/user/register",
        type : "POST",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        data : JSON.stringify({
            "teacherId":$("#LAY-user-login-teacherId").val(),
            "teacherName":$("#LAY-user-login-teacherName").val(),
            "password":$("#LAY-user-login-password").val()
        }),
        success : function(result) {
            if (result.code == 101) {
				location.href = "http://localhost:8080/meetingroom/login.jsp";
                console.log(dataInfo);
            }else {
            	alert(result.msg);
            }
        },
        error : function(result) {

        }
    });
});