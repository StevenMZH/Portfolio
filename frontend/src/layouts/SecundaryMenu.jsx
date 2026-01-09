import Reveal from "../components/anims/Reveal";
import CV from "../components/header/CV";
import { ThemeSwitch } from "../components/header/ThemeSwitch";

export function SecundaryMenu() {    
    return (
        <Reveal className="header-card row gap10">
            <CV/>
            <ThemeSwitch />
        </Reveal>
    );
}

export default SecundaryMenu