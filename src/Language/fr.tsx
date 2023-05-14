import RandomFloat from "../Utility/RandomFloat";
import { Translation } from "./locale";

export const fr_translations: Translation = {
    about_me: "A propos...",
    second_section: "Section 2",
    AboutMePresentation: (
        <>
            <p>
                Oh non des nombres à virgule: <RandomFloat />!
            </p>
        </>
    ),
};
