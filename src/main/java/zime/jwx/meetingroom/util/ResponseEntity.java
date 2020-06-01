package zime.jwx.meetingroom.util;

import java.io.Serializable;

public class ResponseEntity<T> implements Serializable {


    private static final long serialVersionUID = 1152629969110727070L;

    private int code;

    private String msg;

    private T data;

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

    

}
