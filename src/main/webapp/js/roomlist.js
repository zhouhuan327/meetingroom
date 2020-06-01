var totalPage;
	var currPage;
		$(function() {
			showPage(1);
		});
		function showPage(n) {
			$.ajax({
				url : "http://localhost:8080/meetingroom/room/info",
				data : "pn=" + n,
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
			$("#stu_table tbody").empty();
			var rooms = result.data.list;
			console.log(rooms);
			$.each(rooms, function(index, item) {
				var roomId = $("<td></td>").append(item.roomId);
				var location = $("<td></td>").append(item.location);
				var storey = $("<td></td>").append(item.storey);
				var editBtn = $("<button></button>").addClass(
						"btn btn-primary btn-sm order-btn").append(
						$("<span></span>").addClass(
								"glyphicon glyphicon-pencil")).append("预约")
				editBtn.attr("edit-roomId",item.roomId);
				var editBtnTd = $("<td></td>").append(editBtn);
				$("<tr></tr>").append(roomId).append(location).append(storey).append(editBtn).appendTo(
								"#stu_table tbody");
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
		
		
		var roomId;
		$(document).on("click",".order-btn",function() {
			$("#date-info tr").empty();
			roomId=($(this).attr("edit-roomId"));
			var curDate = new Date();
//			alert(getNow(dateTime.setDate(dateTime.getDate())));
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
			if(window.confirm('确定预约此会议室吗？')){
				var orderClass=$(this).parents("tr").find("th:eq(0)").text();
				
				$.ajax({
			        url : "http://localhost:8080/meetingroom/order/add",
			        type : "POST",
			        datatype:"application/json",
			        contentType:"application/json;charset=utf-8",
			        data : JSON.stringify({
			            "roomId":roomId,
			            "userId":userId,
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
//				location.href = "http://localhost:8080/meetingroom/login.jsp";
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