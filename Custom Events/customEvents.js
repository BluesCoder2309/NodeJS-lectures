import * as Events from "events";

export class UserEvents extends Events.EventEmitter {
  //event
  createPost(content) {
    console.log("Post is Created.");
    this.emit("postCreated");
  }
}
