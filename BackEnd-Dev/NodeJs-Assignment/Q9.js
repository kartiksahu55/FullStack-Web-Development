const EventEmitter = require("events");

const event = new EventEmitter();

const SubscribeMe = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

console.log("Calling event listner before removing");
event.addListener("subscribe", SubscribeMe);
event.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing");
event.removeListener("subscribe", SubscribeMe);
event.emit("subscribe", "College Wallah");