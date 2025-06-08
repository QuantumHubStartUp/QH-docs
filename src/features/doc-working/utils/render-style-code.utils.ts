

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import python from "highlight.js/lib/languages/python";

export const renderStyleCode = () => {
    /*
    Функция для регистрации языков программирования
    в библиотеке highlight.js для подсветки кода
    */

    const languages = { javascript, typescript, json, bash, python };

    Object.entries(languages).forEach(([name, lang]) => {
        hljs.registerLanguage(name, lang);
    });

    return hljs;
}


