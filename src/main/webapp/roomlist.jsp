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
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/bootstrap/js/bootstrap.min.js"></script>
<link
	href="${pageContext.request.contextPath }/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">
  
	<link href="${pageContext.request.contextPath }/css/roomlist.css" rel="stylesheet">
</head>
<body>
<div class="modal fade bs-example-modal-lg" id="orderModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel">
		<div class="modal-dialog modal-lg" role="document" style="margin-left:300px;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">预约列表</h4>
				</div>
				<div class="modal-body">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>时间</th>
								<th>上午1-2节课</th>
								<th>上午3-4节课</th>
								<th>下午1-2节课</th>
								<th>下午3-4节课</th>
							</tr>
						</thead>
						<tbody id="date-info">
							<tr>
							</tr>
							<tr>
							</tr>
							<tr>
							</tr>
							<tr>
							</tr>
							<tr>
							</tr>
							<tr>
							</tr>
							<tr>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
					<button type="button" class="btn btn-primary" id="save_btn">保存</button>
				</div>
			</div>
		</div>
	</div>
	
<div class="container" style="width:80%; padding-right:200px;">
		<!-- Title -->
		<div class="row">
			<div class="col-md-12">
				<h2>显示所有会议室信息</h2>
			</div>
		</div>
		<!-- Room Data -->
		<div class="row">
			<table class="table table-hover" id="stu_table">
				<thead>
					<tr>
						<th>会议室编号</th>
						<th>位置</th>
						<th>楼层</th>
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
		</div>
		<!-- Paging Info -->
		<div class="row">
			<div class="col-md-6" id="page_info_area"></div>
			<div class="col-md-6" id="page_nav_area"></div>
		</div>
	</div>
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/roomlist.js"></script>
</body>
</html>