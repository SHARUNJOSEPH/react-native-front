import { Platform } from "react-native";

let baseURL = "http://390412b804d8.ngrok.io";

{
  Platform.OS == "android"
    ? (baseURL = "http://390412b804d8.ngrok.io")
    : (baseURL = "http://localhost:3000");
}

export default baseURL;
