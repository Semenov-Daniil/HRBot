export class StartCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("start", async (ctx) => {
            await ctx.setMyCommands([
                {
                    command: '/start',
                    description: 'Запуск бота'
                },
                {
                    command: '/help',
                    description: 'Информация'
                },
                {
                    command: '/setup',
                    description: 'Указать фильтры'
                },
                {
                    command: '/search',
                    description: 'Искать вакансии'
                },
            ]);

            ctx.reply(buildMessage(ctx.from));
        })
    }
}

const buildMessage = (from) => {
    return (
        "Привет, " + 
        `${from?.first_name || from?.username || "user"}`
    );
}