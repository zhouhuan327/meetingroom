package zime.jwx.meetingroom.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import zime.jwx.meetingroom.pojo.RoomDO;
import zime.jwx.meetingroom.pojo.UserDO;
import zime.jwx.meetingroom.service.RoomService;
import zime.jwx.meetingroom.util.ResponseEntity;
import zime.jwx.meetingroom.util.ResponseEntityUtil;

@Controller
@CrossOrigin
@RequestMapping("/room")
public class RoomController {
	@Autowired
	private RoomService roomService;

	@ResponseBody
	@GetMapping("/info")
	public ResponseEntity getPerson(@RequestParam(value="pn",defaultValue="1") Integer pageNum) {
		//鍦ㄦ煡璇箣鍓嶈皟鐢ㄩ潤鎬佹柟娉曡缃捣濮嬮〉鍜岄〉闈㈠ぇ灏�
		PageHelper.startPage(pageNum, 8);
		//startPage鍚庨潰绱ц窡鐫�鐨勬煡璇㈠氨鏄垎椤垫煡璇�
		List<RoomDO> roomDOs=roomService.selectRoomDOs();
		//浣跨敤PageInfo鍖呰鏌ヨ鍚庣殑缁撴灉锛屽苟灏唒ageInfo瀛樺叆map涓�
		PageInfo<RoomDO> pageInfo=new PageInfo<RoomDO>(roomDOs,8);
		return ResponseEntityUtil.success(pageInfo);
	}

	@ResponseBody
	@PostMapping("/add")
	public ResponseEntity saveInfo(@Valid @RequestBody RoomDO roomDO) {
		roomService.addRoom(roomDO);
		return ResponseEntityUtil.success();
	}
}
