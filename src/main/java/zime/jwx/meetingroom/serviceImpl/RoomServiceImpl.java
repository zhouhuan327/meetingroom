package zime.jwx.meetingroom.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zime.jwx.meetingroom.dao.RoomDOMapper;
import zime.jwx.meetingroom.pojo.RoomDO;
import zime.jwx.meetingroom.service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {
	@Autowired
	private RoomDOMapper roomDOMapper;

	@Override
	public List<RoomDO> selectRoomDOs() {
		List<RoomDO> list=roomDOMapper.selectAllRooms();
		return list;
	}

	@Override
	public void addRoom(RoomDO roomDO) {
		// TODO Auto-generated method stub
		roomDOMapper.insertSelective(roomDO);
	}
	

}
