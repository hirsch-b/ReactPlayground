import RandomFloat from "../Utility/RandomFloat";
import { Translation } from "./locale";

export const en_translations: Translation = {
    about_me: "About me",
    typical_text_english_only: "Hello World!",
    second_section: "2nd Section",
    AboutMePresentation: (
        <>
            <p>
                Wanna see random numbers ? Look <RandomFloat />!
            </p>
        </>
    ),
};
