package zime.jwx.meetingroom.service;

import java.util.List;

import zime.jwx.meetingroom.form.OrderAdd;
import zime.jwx.meetingroom.form.UpdateOrder;
import zime.jwx.meetingroom.pojo.OrderDO;
import zime.jwx.meetingroom.vo.OrderVO;

public interface OrderService {
	List<OrderVO> selectOrders(Integer userId);
	
	void addOrder(OrderAdd add);
	
	void deleteOrder(Integer orderId);
	
	List<OrderDO> selectAllOrder();
	
	List<OrderDO> selectAllOrderDate(String beginTime,String endTime,Integer roomId);
	
	void updateOrder(UpdateOrder uporderOrder);
}
