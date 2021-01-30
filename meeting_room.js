class MeetingRoom {
  
  constructor(room_name) {
    this.occupied = false;
    this.occupied_by_us = false;
    this.name = room_name;
  }

  setOccupationStatus(value) {
    this.occupied = value;
    this.occupied_by_us = value;
  }

  getOccupationStatus() {
    return this.occupied;
  }

  getName () {
    return this.name;
  }

  isOccupied() {
    if (this.getOccupationStatus()) {
      return "yes";
    } else {
      return "no";
    }
  }

  enterLeave() {
    if (this.getOccupationStatus()) {
      return "Leave";
    } else {
      return "Enter";
    }
  }

}
