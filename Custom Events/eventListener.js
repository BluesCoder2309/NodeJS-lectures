import { UserEvents } from "./customEvents.js";

// Create object using the class
const userEvent = new UserEvents();

function saveToDatabase() {
  console.log("Saving post to DB...");
}

function sendNotification() {
  console.log("Sending notifications...");
}

function updateTimeline() {
  console.log("Updating Timeline...");
}

userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeline);

userEvent.createPost("This is my first post.");
