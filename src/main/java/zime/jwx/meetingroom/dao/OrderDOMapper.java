package zime.jwx.meetingroom.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import zime.jwx.meetingroom.pojo.OrderDO;
import zime.jwx.meetingroom.pojo.RoomDO;
import zime.jwx.meetingroom.vo.OrderVO;

public interface OrderDOMapper {
    int deleteByPrimaryKey(Integer orderId);

    int insert(OrderDO record);

    int insertSelective(OrderDO record);

    OrderDO selectByPrimaryKey(Integer orderId);

    int updateByPrimaryKeySelective(OrderDO record);

    int updateByPrimaryKey(OrderDO record);
    
    List<OrderVO> selectOrders(Integer userId);
    
    List<OrderDO> selectByOrders();
    
    List<OrderDO> selectByOrdersDate(@Param("beginTime")String beginTime,@Param("endTime")String endTime,@Param("roomId")Integer roomId);
}