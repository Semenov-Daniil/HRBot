import { Scenes } from "telegraf";

export const setRegionCodeScene = new Scenes.BaseScene("setRegionCode");

setRegionCodeScene.enter((ctx) => {
    ctx.reply("Укажте код региона, например -- 77, 78, 64");
});

setRegionCodeScene.on("message", (ctx) => {
    ctx.session.newFilter.regionCode = ctx.message.text;

    ctx.reply(`Ок, код региона -- ${ctx.message.text}`);

    return ctx.scene.enter("pickFilter")
})