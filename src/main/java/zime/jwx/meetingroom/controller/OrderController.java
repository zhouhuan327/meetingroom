package zime.jwx.meetingroom.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import zime.jwx.meetingroom.form.OrderAdd;
import zime.jwx.meetingroom.form.UpdateOrder;
import zime.jwx.meetingroom.pojo.OrderDO;
import zime.jwx.meetingroom.pojo.RoomDO;
import zime.jwx.meetingroom.service.OrderService;
import zime.jwx.meetingroom.util.ResponseEntity;
import zime.jwx.meetingroom.util.ResponseEntityUtil;
import zime.jwx.meetingroom.vo.OrderVO;

@Controller
@CrossOrigin
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@ResponseBody
	@GetMapping("/info")
	public ResponseEntity getOrder(@RequestParam(value="pn",defaultValue="1") Integer pageNum,@RequestParam("userId") Integer userId) {
		//在查询之前调用静态方法设置起始页和页面大小
		PageHelper.startPage(pageNum, 8);
		//startPage后面紧跟着的查询就是分页查询
		List<OrderVO> orderDOs=orderService.selectOrders(userId);
		//使用PageInfo包装查询后的结果，并将pageInfo存入map中
		PageInfo<OrderVO> pageInfo=new PageInfo<OrderVO>(orderDOs,8);
		return ResponseEntityUtil.success(pageInfo);
	}
	
	@ResponseBody
	@GetMapping("/allInfo")
	public ResponseEntity getAllOrder() {
		List<OrderDO> orderDOs=orderService.selectAllOrder();
		return ResponseEntityUtil.success(orderDOs);
	}
	
	@ResponseBody
	@GetMapping("/InfoDate")
	public ResponseEntity getOrderDate(@RequestParam("times") String times,@RequestParam("roomId") Integer roomId) {
		List<OrderDO> orderDOs=orderService.selectAllOrderDate(times+" 00:00:00", times+" 23:59:59",roomId);
		return ResponseEntityUtil.success(orderDOs);
	}
	
	@ResponseBody
	@PostMapping("/add")
	public ResponseEntity saveInfo(@Valid @RequestBody OrderAdd orderAdd) {
		orderService.addOrder(orderAdd);
		return ResponseEntityUtil.success();
	}
	
	@ResponseBody
	@DeleteMapping("/delete")
	public ResponseEntity deleteInfo(@RequestParam("orderId") Integer orderId) {
		orderService.deleteOrder(orderId);
		return ResponseEntityUtil.success();
	}
	@ResponseBody
	@PutMapping("/update")
	public ResponseEntity updatePerson(@Valid @RequestBody UpdateOrder updateOrder) {
		orderService.updateOrder(updateOrder);
		return ResponseEntityUtil.success();
	}


}
