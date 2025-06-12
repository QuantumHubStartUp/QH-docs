import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';

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
};
