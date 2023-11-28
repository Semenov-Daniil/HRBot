import { Telegraf, session } from "telegraf";
import { getConfig } from "./config.js";
import { HelpCommand } from "./commands/help.js";
import { StartCommand } from "./commands/start.js";

class Bot {
    constructor() {
        this.config = getConfig();
        this.bot = new Telegraf(this.config.tg_token)
    
        this.bot.use(session());

        this.bot.catch((err, ctx) => {
            console.log("Error", err)
        });
    }

    init () {
        this.commands = [new StartCommand(this.bot), new HelpCommand(this.bot)];

        for (const command of this.commands) {
            command.exec();
        }

        this.bot.launch();
    }
}

const bot = new Bot();
bot.init();

console.log("Bot has been started!");