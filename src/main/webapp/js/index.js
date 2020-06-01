$(function() {
	var teacherName=sessionStorage.getItem("teacherName");
	$("#teacherName-show").text(teacherName);
});
$(document).on("click","#homepage-quit",function () {
	if(window.confirm('你确定要注销账号吗？')){
		sessionStorage.removeItem("teacherName");
		sessionStorage.removeItem("userId");
		location.href = "http://localhost:8080/meetingroom/login.jsp";
    }else{
        return false;
    }
});
$(document).on("click","#head-quit",function () {
	if(window.confirm('你确定要注销账号吗？')){
		//sessionStorage.removefItem("teacherName");
		//sessionStorage.removeItem("userId");
		location.href = "http://localhost:8080/meetingroom/login.jsp";
    }else{
        return false;
    }
});
$(document).on("click","#update-user",function () {
	$('#right-iframe',window.parent.document).empty();
    $('#right-iframe',window.parent.document).append(" <iframe class=\"rightframe update\" src=\"updateUser.jsp\" style=\"width: 100%; height: 880px;\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
});
$(document).on("click","#update-password",function () {
	$('#right-iframe',window.parent.document).empty();
    $('#right-iframe',window.parent.document).append(" <iframe class=\"rightframe update\" src=\"updateUserPassword.jsp\" style=\"width: 100%; height: 880px;\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
});
$(document).on("click","#allrooms",function () {
	$('#right-iframe',window.parent.document).empty();
    $('#right-iframe',window.parent.document).append(" <iframe class=\"rightframe allrooms\" src=\"roomlist.jsp\" style=\"width: 100%; height: 880px;\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
});
$(document).on("click","#my-order",function () {
	$('#right-iframe',window.parent.document).empty();
    $('#right-iframe',window.parent.document).append(" <iframe class=\"rightframe allrooms\" src=\"orderlist.jsp\" style=\"width: 100%; height: 880px;\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
});
$(document).on("click","#addrooms",function () {
	$('#right-iframe',window.parent.document).empty();
    $('#right-iframe',window.parent.document).append(" <iframe class=\"rightframe addrooms\" src=\"addroom.jsp\" style=\"width: 100%; height: 880px;\" scrolling=\"NO\" frameborder=\"0\"></iframe>")
});