class Location {
  constructor() {
    this.title = null;
    this.description = null;
    this.unlockCode = null;
    this.location = null;
    this.order = null;
    this.image = null;
    this.unlockQuestion = null;

  }

  setData(data) {
    let location = data.attributes;
    this.title = location.title;
    this.description = location.description;
    this.unlockCode = location.unlockCode;
    this.location = location.location;
    this.order = location.order;
    return this;
  }

}

export default new Location();
