import { Scenes } from "telegraf";
import { pickFilterScene } from "./scenes/pickFilter.js";
import { setTextScene } from "./scenes/setText.js";
import { setRegionCodeScene } from "./scenes/setRegionCode.js";

export const SetupStage = new Scenes.Stage(
    [
        pickFilterScene, 
        setTextScene, 
        setRegionCodeScene
    ]
);
