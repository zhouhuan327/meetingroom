package zime.jwx.meetingroom.serviceImpl;

import java.beans.Beans;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zime.jwx.meetingroom.dao.OrderDOMapper;
import zime.jwx.meetingroom.form.OrderAdd;
import zime.jwx.meetingroom.form.UpdateOrder;
import zime.jwx.meetingroom.pojo.OrderDO;
import zime.jwx.meetingroom.service.OrderService;
import zime.jwx.meetingroom.vo.OrderVO;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderDOMapper orderDOMapper;

	@Override
	public List<OrderVO> selectOrders(Integer userId) {
		
		return orderDOMapper.selectOrders(userId);
	}

	@Override
	public void addOrder(OrderAdd add) {
		OrderDO orderDO=new OrderDO();
		BeanUtils.copyProperties(add, orderDO);
		orderDOMapper.insertSelective(orderDO);
	}

	@Override
	public void deleteOrder(Integer orderId) {
		orderDOMapper.deleteByPrimaryKey(orderId);
		
	}

	@Override
	public List<OrderDO> selectAllOrder() {
		return orderDOMapper.selectByOrders();
		
	}

	@Override
	public List<OrderDO> selectAllOrderDate(String beginTime, String endTime,Integer roomId) {
		
		return orderDOMapper.selectByOrdersDate(beginTime, endTime,roomId);
	}
	@Override
	public void updateOrder(UpdateOrder updateOrder) {
		OrderDO orderDO=orderDOMapper.selectByPrimaryKey(updateOrder.getOrderId());
		BeanUtils.copyProperties(updateOrder,orderDO);
		orderDOMapper.updateByPrimaryKey(orderDO);
	}
	

}
