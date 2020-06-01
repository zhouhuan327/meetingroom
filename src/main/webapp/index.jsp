<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会议室管理系统系统——主页</title>
<meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/jquery.min.js"></script>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/layui/css/layui.css" media="all">
  <link rel="stylesheet" href="${pageContext.request.contextPath }/css/index.css" media="all">
</head>
<body>
<ul class="layui-nav">
    <li class="layui-nav-item" style="color:#F88DCC;">
		会议室管理系统
    </li>
    <li class="layui-nav-item" lay-unselect="" style="float: right; margin-right: 100px;">
        <a href="javascript:;" id="teacherName-show"><img src="img/head.jpg" class="layui-nav-img">我</a>
        <dl class="layui-nav-child">
            <dd><a href="javascript:;" id="head-quit">退出</a></dd>
        </dl>
    </li>
</ul>
<div class="left-bar">
	<ul class="layui-nav layui-nav-tree layui-inline" id="left-area" lay-filter="demo" style="margin-right: 10px; height: 880px;">
	    <li class="layui-nav-item layui-nav-itemed">
	        <a href="javascript:;">查看会议室</a>
	        <dl class="layui-nav-child">
	             <dd><a href="javascript:;" id="addrooms">增加会议室</a></dd>
	            <dd><a href="javascript:;" class="layui-this" id="allrooms">预约会议室</a></dd>

	        </dl>
	    </li>
	    <li class="layui-nav-item layui-nav-itemed">
	        <a href="javascript:;">个人中心</a>
	        <dl class="layui-nav-child">
	            <dd><a href="javascript:;" id="my-order">我的预约</a></dd>
	            <dd><a href="javascript:;" id="update-user">修改资料</a></dd>
	            <dd><a href="javascript:;" id="update-password">修改密码</a></dd>
	        </dl>
	    </li>
	    <!--<li class="layui-nav-item"><a id="update-user">修改资料</a></li>
	    <li class="layui-nav-item"><a id="update-password">修改密码</a></li>-->
	    <li class="layui-nav-item"><a id="homepage-quit">退出</a></li>
	</ul>
	<div id="right-iframe">
		<iframe src="roomlist.jsp" frameborder="0" id="iframe-homepage" class="iframe-right" style="width: 100%; height: 880px;"></iframe>
	</div>
</div>
<script src="layui/layui.js" charset="utf-8"></script>
<script>
    layui.use('element', function(){
        var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

        //监听导航点击
        element.on('nav(demo)', function(elem){
            //console.log(elem)
        });
    });
</script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/index.js"></script>
</body>
</html>