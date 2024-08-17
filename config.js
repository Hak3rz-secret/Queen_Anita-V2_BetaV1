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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBwblU5Zm9tRHVYbUx6dWR3b0RLMmx4MjZsUk5wSGdLSG12QVVFTlFIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDZ5M0RZNXNBaFhBclFUSWhuUW9Lb3g2Slh1RVdBMitMa3BSNDRZdFNTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRXVvL1VDUDBPSWNkdE9GaVZSQWIvNmc2bmZFamlLd01zTXhabmdCY25vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NENiZGN4RGRsUWIxVzQwQUpoVUdZSEtSeUVxbUdtb1RNRGFyT0FQdUVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCYXJDL05Qc0pmZGhBYVFFOHlpWFkwbjh4c1hUeVRJNjhiSWVBdXdtazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRORW41b015Rzk2dVcxYzNZZmRlb0xUc29KakhBSCtMRkdZbURGQ2tjMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUh1OFY3SW1OY1laOXc5Vkk4ZncxazlHK0xzeTQ0emhMTC9yVVdFYlFsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhXNG0vQUJHZlhRLzVQQURjcDZlV1ExYmlEc0tXait2UmlhQVFYVjUzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JR0VtYWR6ZHdBSEpjKzJ5NTRsOUlpMXRqV3YrWElrRjdLamNmRVBTVjVaYUZrOFcyU2hpU2ZxSndXNjl3WHFtNStML3k3K2xacFcvUzNyOHZsUUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJOeXI3T2gxaHlTMWVXMzYzUWkrMDNubHNzRnlyd1FDZDVkdFpRUWVoNldVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI1Nzc4OTI3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNjIxM0NBRTA1OUFCQjAxMTUwNkFGQUFGNzIzQkJEOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODk5NTE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyNTc3ODkyNzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTUyRjhGOUY0Q0Y1N0I0MkIyMTAwQTlEMzZFQ0JEQjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzg5OTUxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSGJleUJVSjBSWGlGY2dSaVRRM1RwUSIsInBob25lSWQiOiI2ZDVlZWIyMi02MDk3LTQ4MGYtYjI3Yi1iYzE2MDhlMDU4MzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRndza0xib1ZlZlBtRWhrdkpHazNVWGo3KzJ3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRxWXJCZklZWXRRK0dIK2FML1dwalYza2Uxdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHSFJYTUVHNCIsIm1lIjp7ImlkIjoiMjMzMjU3Nzg5MjcyOjUwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkq7wnZK28J2TiPCdk4rwnZOA8J2RkiDwnZKw8J2SuPCdkr3wnZK+8J2SvfCdkrYg8J+MmSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpHK0VBUTdMeUN0Z1lZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic05hc0c1OWdvRkkzVWkvRXFNTGVkRTNDQ1RwYXFyR3VGQnlNYUFOVXRraz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmFrNXdocHJsNEdERTdqRWZPclNEWVBYR3AyWVZ3a1FTSmsvMjBQanRORHg1Vy9nQktid1dFQ2l3M045clhBMXJHd2plbm52ZW8xUUNjMFNPRm52QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1tbnpTNmxZc3dhZHZmaWdadVgyclZtdmNQOWJsVmdDdnFjS2w5bklISGIvaGlFZ2tFV3VNMWcxRWZYMmt1VnJUc1NzQmZNaFJ2Ny9xWGVxelV2T0FnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjU3Nzg5MjcyOjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJEV3JCdWZZS0JTTjFJdnhLakMzblJOd2drNldxcXhyaFFjakdnRFZMWkoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4OTk1MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTER5In0="
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
