package zime.jwx.meetingroom.pojo;

public class RoomDO {
    private Integer roomId;

    private String location;

    private String storey;

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location == null ? null : location.trim();
    }

    public String getStorey() {
        return storey;
    }

    public void setStorey(String storey) {
        this.storey = storey == null ? null : storey.trim();
    }
}