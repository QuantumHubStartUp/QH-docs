import { useAtom } from "jotai"
import { stateThemeAtom } from "../store/state-theme.store";
import { useCallback } from "react";

import { ShowNowTheme } from "../ui/show-now-theme";


export const ThemeToggleBtn: React.FC = () => {
    const [nowTheme, setNowTheme] = useAtom(stateThemeAtom);

    const changeTheme = useCallback(() => {
        setNowTheme(nowTheme === "light" ? "dark" : "light");
    }, [nowTheme, setNowTheme]);

    return (
        <button 
            className="cursor-pointer"
            onClick={ changeTheme }
        >
            <ShowNowTheme nowTheme={ nowTheme } />
        </button>
    )
} 