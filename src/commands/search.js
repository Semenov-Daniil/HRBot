import { getVacancies, getVacanciesByRegion } from "../api/vacancies.js";

export class SearchCommand {
    constructor(bot) {
        this.bot = bot;
    }

    exec() {
        this.bot.command("search", async (ctx) => {
            try {
                const { regionCode, ...query } = ctx.session.filter || {};

                const { vacancies } = regionCode 
                    ? await getVacanciesByRegion(regionCode, query) 
                    : await getVacancies(query);

                if (!vacancies.length) {
                    return ctx.reply("К сожалению, по вашему запросу, работы нет");
                }

                for (const { vacancy } of vacancies) {
                    ctx.replyWithMarkdown(buildMessage(vacancy));
                }
            } catch (error) {
                ctx.reply("К сожалению, у нашего разработчика нет рук!!!УЖЕ нет рук!!!")
            }
        })
    }
}

const buildMessage = (vacancy) => {
    return (
        `*${vacancy["job-name"]}*\n` +
        `ЗП -- ${vacancy.salary || "Не указано"}\n` +
        `Компания -- ${vacancy.company.name}\n\n` +
        `[Сайт](${vacancy.vac_url})`
    )
}