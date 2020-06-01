package zime.jwx.meetingroom.service;

import zime.jwx.meetingroom.form.RegisterForm;
import zime.jwx.meetingroom.form.UpdateUserForm;
import zime.jwx.meetingroom.form.UpdateUserPasswordForm;
import zime.jwx.meetingroom.pojo.UserDO;

public interface UserService {
	UserDO selectById(Integer userId);
	
	UserDO selectByTeacherId(Integer teacherId);
	
	boolean registerUser(RegisterForm user);
	
	boolean loginUser(Integer teacherId,String password);
	
	boolean updatepassword(Integer userId,String password);
	
	void updateUserInfo(UpdateUserForm updateUser);
	
	void updateUserPassword(UpdateUserPasswordForm updateUser);
}
