//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0wyMkFhK1JDc1VpUERGNll4TDBmaGd2MGxwZzZSSG1rSDhmNVIrV3JIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkVMdkowT3dzcUFGdGJqMGUwZGVNb2k2WlhXS1JLdkVtaVRnTVVsU3pXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTUZMMmtKTW5jUEp2TDd5L29sajJXZ1JzTlB0ZGtsZENDOGdWSFN1emtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR002UVZHSXFhVTVYOWtpUG1PTWxMVUVnbCtPV0w0amJXTys5cEpRcFI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHell0QUs5cWNlV3hvY2cyTWJyZHRsV25oeDNFSmVON0xpSGMzQWd1bjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh2NERiaFlDRG1YdEpyc2xQK1F3eWM3MGdQRVpTSlh3WVFjTHhlSkpWd3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZUVDBBemFuTGVmelZkYXVXTXYreFNTaGgyY3QxZnJTUndBdUlJUHNGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dkd3Bvbmg2OUVpZEQ0THVKSUFnMk9hb3dGYXNLMTZ0SkNZVGpTL3BEWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMUjhmeEF5V0p3SEpoaFc2WEMxUUd3dllNMStRSDVVa0RnN0JWMVVvakpuU0N6VVZzVUU1TjU0WEt1M0pkSGt6NWxjSGFwR2lwMHE4alNBK08rb2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJOYjcrTkFuMGFTVnpvS0liamMwYlNtelE0d3hyYm5ESkVJVkFzTmV3M25FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1Nzc4OTI3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQUQwNTk1NENGNzA4MDUxRDRDQTYyNzgyOUZDMkJBQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzOTk0OTgzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyNTc3ODkyNzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEFEMTgwMzJENzRCM0RBQTM5QkFFMUVGMDUxMDc2QzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzk5NDk4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT1lQT2xwZTZTZi1yalhvLW80aElRUSIsInBob25lSWQiOiIxYzU4OWQ5Yy0xZjQzLTQ0YTEtOTk4Yy1iNWMwNGFjMWFjNDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnkxQThhQi9XUlFtM0dEZm9MbHlqOXdjdVp3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRGWUsxbnF4WVFaaXBsT0N6cDNzQVNhaXl3dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5UkZRUEdTMSIsIm1lIjp7ImlkIjoiMjMzMjU3Nzg5MjcyOjUxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkq7wnZK28J2TiPCdk4rwnZOA8J2RkiDwnZKw8J2SuPCdkr3wnZK+8J2SvfCdkrYg8J+MmSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjNHK0VBUTE2YUl0Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic05hc0c1OWdvRkkzVWkvRXFNTGVkRTNDQ1RwYXFyR3VGQnlNYUFOVXRraz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjl4bEQ1a1huTElqaVBacHNOMy9UbHRoU20yVTFyVTNpbEVGa1Z4QnF5b2x6d0pSMURMMkQ1bHp2REpYNGc0L1lxUmRJR1o4aWc0VGhtWHBTdDlrREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImpaZDJERXJGS1QrRlh2cjFid01sNk5SS2tBa0tJQWFJRExidEpqaHZkTW5NVUFNNlM4a2pmV1ZZZEVNY1dqYlM5N3dabitjNmNsbWxPL1l1dE9kOWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjU3Nzg5MjcyOjUxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJEV3JCdWZZS0JTTjFJdnhLakMzblJOd2drNldxcXhyaFFjakdnRFZMWkoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM5OTQ5ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmdGIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> Kobby Md",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "Kobby md",
  ownername: process.env.OWNER_NAME || "Sasuke",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "SASUKE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
