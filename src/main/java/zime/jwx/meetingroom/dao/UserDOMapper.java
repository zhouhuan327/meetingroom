package zime.jwx.meetingroom.dao;

import org.apache.ibatis.annotations.Param;

import zime.jwx.meetingroom.pojo.UserDO;

public interface UserDOMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(UserDO record);

    int insertSelective(UserDO record);
    
    UserDO selectByTeacherId(Integer teacherId);

    UserDO selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(UserDO record);

    int updateByPrimaryKey(UserDO record);
    
    UserDO loginUser(@Param("teacherId")Integer teacherId,@Param("password")String password);
    
    UserDO updatePassword(@Param("userId")Integer userId,@Param("password")String password);
}