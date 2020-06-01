var userId;
$('#update').click(function () {
	userId=sessionStorage.getItem("userId");
                $.ajax({
                    url: "http://localhost:8080/meetingroom/user/updatepassword",
                    type: "PUT",
                    datatype: "application/json",
                    contentType: "application/json;charset=utf-8",
                    data :JSON.stringify({
                        "userId":userId,
                        "oldpassword":$('#oldpassword').val(),
                        "newpassword":$('#newpassword').val()
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
        
         