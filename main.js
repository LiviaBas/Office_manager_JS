window.onload = function () {
  let roomCounter = 0;
  let meeting_room = new MeetingRoom("Room 1");

  LoadTextForObj();

  function LoadTextForObj() {
    // Occupied text
    let occupied = meeting_room.isOccupied();
    $("#is-available").text(occupied);

    // Room entry button
    let enterLeave = meeting_room.enterLeave();
    $("#enter-leave-button").text(enterLeave);

    // Room name
    let name = meeting_room.getName();
    $("#meeting-room-name").text(name);
  }

  // Click Events
  $("#enter-leave-button").click(function () {
    meeting_room.setOccupationStatus(!meeting_room.getOccupationStatus());
    LoadTextForObj();
  });
}
