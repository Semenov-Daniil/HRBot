export class SetupCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("setup", async (ctx) => {
            return ctx.scene.enter("pickFilter");
        })
    }
}
