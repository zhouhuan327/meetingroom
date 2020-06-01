package zime.jwx.meetingroom.util;

public class ResponseEntityUtil {

	public static ResponseEntity<Object> success(Object object){
        ResponseEntity responseEntity=new ResponseEntity();
        responseEntity.setCode(101);
        responseEntity.setMsg("wodiaolimade");
        responseEntity.setData(object);
        return responseEntity;
    }

    public static ResponseEntity success(){
        return success(null);
    }

    public static ResponseEntity fail(Integer code,String msg){
        ResponseEntity responseEntity=new ResponseEntity();
        responseEntity.setCode(code);
        responseEntity.setMsg(msg);
        return responseEntity;
    }
    
    public static ResponseEntity fail(Integer code,String msg,Object object){
        ResponseEntity responseEntity=new ResponseEntity();
        responseEntity.setCode(code);
        responseEntity.setMsg(msg);
        responseEntity.setData(object);
        return responseEntity;
    }

}
