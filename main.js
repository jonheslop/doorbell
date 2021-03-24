import * as PusherPushNotifications from "./push-notifications-esm.js";

const beamsClient = new PusherPushNotifications.Client({
  instanceId: "1c4b4b41-2d70-42eb-8108-c1dd8f51be22",
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("subscribe").addEventListener("click", (event) => {
    beamsClient
      .start()
      .then((beamsClient) => beamsClient.getDeviceId())
      .then((deviceId) =>
        console.log("Successfully registered with Beams. Device ID:", deviceId)
      )
      .then(() => beamsClient.addDeviceInterest("debug-hello"))
      .then(() => beamsClient.getDeviceInterests())
      .then((interests) => console.log("Current interests:", interests))
      .catch(console.error);
  });
});
