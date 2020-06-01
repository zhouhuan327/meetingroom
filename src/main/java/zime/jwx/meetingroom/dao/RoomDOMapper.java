package zime.jwx.meetingroom.dao;

import java.util.List;

import zime.jwx.meetingroom.pojo.RoomDO;

public interface RoomDOMapper {
    int deleteByPrimaryKey(Integer roomId);

    int insert(RoomDO record);
    
    List<RoomDO> selectAllRooms();

    int insertSelective(RoomDO record);

    RoomDO selectByPrimaryKey(Integer roomId);

    int updateByPrimaryKeySelective(RoomDO record);

    int updateByPrimaryKey(RoomDO record);
}