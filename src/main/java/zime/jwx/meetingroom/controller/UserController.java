package zime.jwx.meetingroom.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import zime.jwx.meetingroom.enums.ErrorEnum;
import zime.jwx.meetingroom.form.RegisterForm;
import zime.jwx.meetingroom.form.UpdateUserForm;
import zime.jwx.meetingroom.form.UpdateUserPasswordForm;
import zime.jwx.meetingroom.pojo.UserDO;
import zime.jwx.meetingroom.service.UserService;
import zime.jwx.meetingroom.util.ResponseEntity;
import zime.jwx.meetingroom.util.ResponseEntityUtil;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@ResponseBody
	@GetMapping("/info")
	public ResponseEntity getPerson(@RequestParam("userId")Integer userId) {
		UserDO userDO;
		userDO = userService.selectById(userId);
		return ResponseEntityUtil.success(userDO);
	}
	
	@ResponseBody
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity personRegister(@RequestBody @Valid RegisterForm user, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return ResponseEntityUtil.fail(ErrorEnum.PARAM_ERROR.getCode(),
					bindingResult.getFieldError().getDefaultMessage());
		}
		boolean flag=userService.registerUser(user);
		if(flag==false) {
			return ResponseEntityUtil.fail(102,"注册失败");
		}
		UserDO userDO=userService.selectByTeacherId(user.getTeacherId());
		return ResponseEntityUtil.success(userDO);
		
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity login(@RequestParam("techerId") Integer teacherId, @RequestParam("password") String password) {
		boolean flag=userService.loginUser(teacherId, password);
		if(flag==false) {
			return ResponseEntityUtil.fail(102,"账号或密码错误！");
		}
		UserDO userDO=userService.selectByTeacherId(teacherId);
		return ResponseEntityUtil.success(userDO);
		
	}
	
	@ResponseBody
	@PutMapping("/update")
	public ResponseEntity updatePerson(@Valid @RequestBody UpdateUserForm updateUserForm) {
		userService.updateUserInfo(updateUserForm);
		return ResponseEntityUtil.success();
	}
	
	@ResponseBody
	@PutMapping("/updatepassword")
	public ResponseEntity updatePassword(@Valid @RequestBody UpdateUserPasswordForm updateUserForm) {
		boolean flag=userService.loginUser(updateUserForm.getUserId(), updateUserForm.getOldpassword());
		if(flag==false) {
			return ResponseEntityUtil.fail(102,"密码错误");
		}
		userService.updateUserPassword(updateUserForm);
		return ResponseEntityUtil.success();
	}

}
