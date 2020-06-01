package zime.jwx.meetingroom.service;

import java.util.List;

import zime.jwx.meetingroom.pojo.RoomDO;

public interface RoomService {
	List<RoomDO> selectRoomDOs(); 
	
	void addRoom(RoomDO roomDO);
}
