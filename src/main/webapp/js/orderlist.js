var totalPage;
	var currPage;
	var userId;
		$(function() {
			showPage(1);
		});
		function showPage(n) {
			userId=sessionStorage.getItem("userId");
			$.ajax({
				url : "http://localhost:8080/meetingroom/order/info",
				data : "pn=" + n+"&userId="+userId,
				type : "GET",
				success : function(result) {
					build_room_table(result);
					//显示分页信息
					build_page_info(result);
					//显示页面的导航信息
					build_page_nav(result);
				}
			});
		}

		function build_room_table(result) {
			$("#order_table tbody").empty();
			var rooms = result.data.list;
			console.log(rooms);
			$.each(rooms, function(index, item) {
				var roomId = $("<td></td>").append(item.roomId);
				if(item.orderClass==1){
					var orderClass = $("<td></td>").append("上午1-2节");
				}
				if(item.orderClass==2){
					var orderClass = $("<td></td>").append("上午3-4节");
				}
				if(item.orderClass==3){
					var orderClass = $("<td></td>").append("下午1-2节");
				}
				if(item.orderClass==4){
					var orderClass = $("<td></td>").append("下午3-4节");
				}
				var location = $("<td></td>").append(item.location);
				var storey = $("<td></td>").append(item.storey);
				var createTime = $("<td></td>").append(item.createTime);
				var updateBtn = $("<button></button>").addClass(
				"btn btn-primary btn-sm update-btn").append(
				$("<span></span>").addClass(
						"glyphicon glyphicon-pencil")).append("修改");
				var editBtn = $("<button></button>").addClass(
						"btn btn-danger btn-sm delete-btn").append(
						$("<span></span>").addClass(
								"glyphicon glyphicon-pencil")).append("删除");
				editBtn.attr("delete-orderId",item.orderId);
				updateBtn.attr("update-orderId",item.orderId);
				updateBtn.attr("update-roomId",item.roomId);
				var editBtnTd = $("<td></td>").append(editBtn);
				var updateBtnTd=$("<td></td>").append(updateBtn);
				$("<tr></tr>").append(roomId).append(orderClass).append(location).append(storey).append(createTime).append(updateBtnTd).append(editBtnTd).appendTo(
								"#order_table tbody");
			});
		}
		function build_page_info(result) {
			$("#page_info_area").empty();
			$("#page_info_area").append(
					"当前第" + result.data.pageNum + "页/总共"
							+ result.data.pages + "页，总记录为"
							+ result.data.total + "条");
			totalPage=result.data.total;
			currPage=result.data.pageNum;
		}
		function build_page_nav(result) {
			$("#page_nav_area").empty();
			var ul = $("<ul></ul>").addClass("pagination");
			var firstPageLi = $("<li></li>").append(
					$("<a></a>").append("首页").attr("href", "#"));
			var previousPageLi = $("<li></li>").append(
					$("<a></a>").append("&laquo;").attr("href", "#"));

			if (result.data.hasPreviousPage == false) {
				firstPageLi.addClass("disabled");
				previousPageLi.addClass("disabled");
			} else {
				firstPageLi.click(function() {
					showPage(1);
				});
				previousPageLi.click(function() {
					showPage(result.data.pageNum - 1);
				});
			}

			var nextPageLi = $("<li></li>").append(
					$("<a></a>").append("&raquo;").attr("href", "#"));
			var lastPageLi = $("<li></li>").append(
					$("<a></a>").append("末页").attr("href", "#"));

			if (result.data.hasNextPage == false) {
				nextPageLi.addClass("disabled");
				lastPageLi.addClass("disabled");
			} else {
				nextPageLi.click(function() {
					showPage(result.data.pageNum + 1);
				});
				lastPageLi.click(function() {
					showPage(result.data.pages);
				});
			}

			ul.append(firstPageLi).append(previousPageLi);

			$.each(result.data.navigatepageNums, function(index, item) {
				var numLi = $("<li></li>").append(
						$("<a></a>").append(item).attr("href", "#"));
				if (result.data.pageNum == item) {
					numLi.addClass("active");
				}
				numLi.click(function() {
					showPage(item);
				});
				ul.append(numLi);
			});
			ul.append(nextPageLi).append(lastPageLi);
			var navElement = $("<nav></nav>").append(ul).appendTo(
					"#page_nav_area");
		}
		
$(document).on("click",".delete-btn",function () {
	var orderId=$(this).attr("delete-orderid");
	if(window.confirm('你确定要删除吗？')){
		$.ajax({
	        url : "http://localhost:8080/meetingroom/order/delete?orderId="+orderId,
	        type : "DELETE",
	        datatype:"application/json",
	        contentType:"application/json;charset=utf-8",
	        success : function(result) {
	            if (result.code == 101) {
	                window.location.reload();
	            }else {
	                console.log(result.msg)
	            }
	        },
	        error : function(result) {

	        }
	    });
    }else{
        return false;
    }
});

var roomId;
var orderId;
$(document).on("click",".update-btn",function() {
	$("#date-info tr").empty();
	roomId=($(this).attr("update-roomid"));
	orderId=($(this).attr("update-orderid"));
	var curDate = new Date();
//	alert(getNow(dateTime.setDate(dateTime.getDate())));
	var i=0;
	$("#date-info tr").each(function(){
		$(this).append("<th></th>");
		var nextDate = new Date(curDate.getTime() + i*24*60*60*1000);
	    $(this).children("th:first-child").text(getNow(nextDate));
	    $(this).append("<th class='order-an' style='cursor:pointer;' order-class='1'>可预约</th>");
	    $(this).append("<th class='order-an' style='cursor:pointer;' order-class='2'>可预约</th>");
	    $(this).append("<th class='order-an' style='cursor:pointer;' order-class='3'>可预约</th>");
	    $(this).append("<th class='order-an' style='cursor:pointer;' order-class='4'>可预约</th>");
	   var j=i;
	    $.ajax({
			url : "http://localhost:8080/meetingroom/order/InfoDate?times="+getNow(nextDate)+"&roomId="+roomId,
			type : "GET",
			success : function(result) {
				if (result.code == 101) {
	                var dataInfo=result.data;
	                $.each(dataInfo, function (index, item) {
	                    $("#date-info").children("tr:nth-child("+(1+j)+")").children("th:nth-child("+(item.orderClass+1)+")").css("color","red").text("已预约").removeClass("order-an");
	                })
	            }else {

	            }
			}
		});
	    
	    i=i+1;
	});
	//3.显示模态框
	$('#orderModal').modal({
		backdrop : "static"
	});
});
var userId=sessionStorage.getItem("userId");
$(document).on("click",".order-an",function() {
	
	if(window.confirm('确定修改预约信息吗？')){
		var orderClass=$(this).parents("tr").find("th:eq(0)").text();
		
		$.ajax({
	        url : "http://localhost:8080/meetingroom/order/update",
	        type : "PUT",
	        datatype:"application/json",
	        contentType:"application/json;charset=utf-8",
	        data : JSON.stringify({
	            "orderId":orderId,
	            "orderClass":$(this).attr("order-class"),
	            "createTime":orderClass
	        }),
	        success : function(result) {
	            if (result.code == 101) {
					alert("预约成功！");
					location.reload();
	            }else {
	            	alert(result.msg);
	            }
	        },
	        error : function(result) {

	        }
	    });
//		location.href = "http://localhost:8080/meetingroom/login.jsp";
    }else{
        return false;
    }
	
});
function getNowFormatDate() {//获取当前时间
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + date.getSeconds();
	return currentdate;
}
function getNow(times) {//获取当前时间
	var date = new Date(times);
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate;
	return currentdate;
}