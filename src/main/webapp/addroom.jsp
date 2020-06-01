<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会议室管理系统系统</title>
<meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/jquery.min.js"></script>
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/bootstrap/js/bootstrap.min.js"></script>
<link
	href="${pageContext.request.contextPath }/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">
  <link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" media="all">
</head>
<body>
<div class="container" style="width:80%; padding-right:200px;">
	<h2 style="padding:20px;">增加会议室</h2>
	<div class="layui-form-item">
	    <label class="layui-form-label" style="width:110px">会议室编号</label>
	    <div class="layui-input-block">
	      <input id="roomId" type="text" style="width:500px;" name="title" lay-verify="title" autocomplete="off" placeholder="请输入会议室编号" class="layui-input">
	    </div>
	 </div>
	 <div class="layui-form-item">
	    <label class="layui-form-label">楼名</label>
	    <div class="layui-input-block">
	      <input id="location" type="text" style="width:500px;" name="title" lay-verify="title" autocomplete="off" placeholder="请输入楼名" class="layui-input">
	    </div>
	 </div>
	 <div class="layui-form-item">
	    <label class="layui-form-label">楼层</label>
	    <div class="layui-input-block">
	      <input id="storey" type="text" style="width:500px;" name="title" lay-verify="title" autocomplete="off" placeholder="请输入楼层" class="layui-input">
	    </div>
	 </div>
	 <button class="layui-btn" style="margin-left:300px;" id="update">增加</button>
 </div>
 <script type="text/javascript"
	src="${pageContext.request.contextPath }/js/addroom.js"></script>
</body>
</html>