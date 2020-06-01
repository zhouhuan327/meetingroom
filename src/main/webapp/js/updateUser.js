var userId;
$('#update').click(function () {
	
                $.ajax({
                    url: "http://localhost:8080/meetingroom/user/update",
                    type: "PUT",
                    datatype: "application/json",
                    contentType: "application/json;charset=utf-8",
                    data :JSON.stringify({
                        "userId":userId,
                        "teacherName":$('#teacherName').val(),
                        "phone":$('#phone').val(),
                        "department":$('#department').val()
                    }),
                    success: function (result) {
                        if (result.code == 101) {
                            alert("修改成功")
                        } else {
                            alert("修改失败")
                        }
                    },
                    error: function (result) {

                    }
                });
  })
        
$(function() {
	userId=sessionStorage.getItem("userId");
	$.ajax({
        url : "http://localhost:8080/meetingroom/user/info?userId="+userId,
        type : "GET",
        datatype:"application/json",
        contentType:"application/json;charset=utf-8",
        success : function(result) {
            if (result.code == 101) {
                var dataInfo=result.data;
                $('#teacherName').val(dataInfo.teacherName);
                $('#phone').val(dataInfo.phone);
                $('#department').val(dataInfo.department);
            }else {

            }
        },
        error : function(result) {

        }
    });
});
        
         