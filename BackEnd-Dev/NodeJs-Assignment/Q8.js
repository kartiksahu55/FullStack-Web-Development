const EventEmitter = require("events");

const event = new EventEmitter();

event.on("subscribe", (channelName)=>{
  console.log(`Thanks For Subscribing to ${channelName}`);
})

event.emit("subscribe", "College Wallah")