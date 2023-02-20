const Client = require("./Structure/Client")
const bot = new Client();
const { token } = require("./config")

bot.start(token)

process.on("unhandledRejection", (reason, p) => {
console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
console.log(type, promise, reason);
});