package zime.jwx.meetingroom.enums;

public enum ErrorEnum {
	LOGIN_EMPTY(100,"用户不存在"),
	LOGIN_USERNAME_ERROR(101,"账号有误"),
	LOGIN_PASSWORD_ERROR(102,"账号或密码有误"),
	PARAM_ERROR(103,"参数不正确");
	
	private Integer code;
    private String label;

	public Integer getCode() {
		return code;
	}

	public String getLabel() {
		return label;
	}
	private ErrorEnum(Integer code, String label) {
        this.code=code;
        this.label=label;
    }
}
