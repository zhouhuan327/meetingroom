<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会议室管理系统系统——登录</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/jquery.min.js"></script>
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/bootstrap/js/bootstrap.min.js"></script>
<link
	href="${pageContext.request.contextPath }/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" media="all">
  <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/style/admin.css" media="all">
  <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/style/login.css" media="all">
  
</head>
<body>
<div class="layadmin-user-login layadmin-user-display-show" id="LAY-user-login" style="display: none;">
	
    <div class="layadmin-user-login-main">
<h2>会议室管理系统系统——登录</h2>
      <div class="layadmin-user-login-box layadmin-user-login-header">
        <p>会议室管理系统系统</p>
      </div>
      <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
        <div class="layui-form-item">
          <input type="text" name="teacherId" id="LAY-user-login-teacherId" lay-verify="required" placeholder="教师管理账号" class="layui-input">
        </div>
        <div class="layui-form-item">
          <input type="password" name="password" id="LAY-user-login-password" lay-verify="required" placeholder="密码" class="layui-input">
        </div>
        <div class="layui-form-item" style="margin-bottom: 20px;">
          <a href="register.jsp" class="layadmin-user-jump-change layadmin-link" style="margin-top: 7px;">没有账号？点击注册</a>
        </div>
        
        <div class="layui-form-item">
          <button class="layui-btn layui-btn-fluid" id="login-btn" lay-submit lay-filter="LAY-user-login-submit">登 入</button>
        </div>
      </div>
    </div>
    
    <div class="layui-trans layadmin-user-login-footer">
      
      <p>© 2020 <a href="#" target="_blank">会议室管理系统</a></p>
    </div>
    
  </div>

  <script src="${pageContext.request.contextPath }/layui/layui.js"></script>  
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/login.js"></script>
</body>
</html>