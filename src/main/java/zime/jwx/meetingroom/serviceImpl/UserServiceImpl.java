package zime.jwx.meetingroom.serviceImpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zime.jwx.meetingroom.dao.UserDOMapper;
import zime.jwx.meetingroom.form.RegisterForm;
import zime.jwx.meetingroom.form.UpdateUserForm;
import zime.jwx.meetingroom.form.UpdateUserPasswordForm;
import zime.jwx.meetingroom.pojo.UserDO;
import zime.jwx.meetingroom.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDOMapper userDOMapper;

	@Override
	public UserDO selectById(Integer userId) {
		UserDO userDO=userDOMapper.selectByPrimaryKey(userId);
		return userDO;
	}

	@Override
	public boolean registerUser(RegisterForm user) {
		UserDO userDO=new UserDO();
		UserDO us=userDOMapper.selectByTeacherId(user.getTeacherId());
		if(us==null) {
			BeanUtils.copyProperties(user, userDO);
			userDOMapper.insertSelective(userDO);
			return true;
		}
		return false;
	}

	@Override
	public UserDO selectByTeacherId(Integer teacherId) {
		UserDO userDO=userDOMapper.selectByTeacherId(teacherId);
		return userDO;
	}

	@Override
	public boolean loginUser(Integer teacherId, String password) {
		UserDO userDO=userDOMapper.loginUser(teacherId, password);
		if(userDO!=null) {
			return true;
		}
		return false;
	}

	@Override
	public void updateUserInfo(UpdateUserForm updateUser) {
		UserDO userDO=userDOMapper.selectByPrimaryKey(updateUser.getUserId());
		BeanUtils.copyProperties(updateUser,userDO);
		userDOMapper.updateByPrimaryKey(userDO);
	}

	@Override
	public void updateUserPassword(UpdateUserPasswordForm updateUser) {
		UserDO userDO=userDOMapper.selectByPrimaryKey(updateUser.getUserId());
		userDO.setPassword(updateUser.getNewpassword());
		userDOMapper.updateByPrimaryKey(userDO);
	}

	@Override
	public boolean updatepassword(Integer userId, String password) {
		UserDO userDO=userDOMapper.loginUser(userId, password);
		if(userDO!=null) {
			return true;
		}
		return false;
	}

}
