import { LanguageContext } from "../Language/locale";
import { useContext } from "react";

export default function Home() {
    const locale = useContext(LanguageContext);

    return (
        <>
            <h1>{locale.translations("about_me")}</h1>

            <div>{locale.translations("AboutMePresentation")}</div>

            <h2>{locale.translations("second_section")}</h2>

            <div>{locale.translations("typical_text_english_only")}</div>

            <h2>{locale.translations("second_section_missing")}</h2>
        </>
    );
}
