// hooks/useCopyButtons.ts
import { useEffect } from 'react';

export function useCopyButtons(htmlContent: string) {
  useEffect(() => {
    if (!htmlContent) return;

    const preBlocks = document.querySelectorAll('pre');
    const inlineCodeBlocks = document.querySelectorAll('p code:not(pre code)');

    const addedButtons: HTMLElement[] = [];

    // Для блоков кода <pre>
    preBlocks.forEach((block) => {
      if (!block.querySelector('.copy-btn')) {
        const button = createCopyButton(() => block.innerText);
        block.style.position = 'relative';
        block.appendChild(button);
        addedButtons.push(button);
      }
    });

    // Для инлайн-кода <code>
    inlineCodeBlocks.forEach((code) => {
      if (!code.querySelector('.inline-copy-btn')) {
        const wrapper = document.createElement('span');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        code.parentNode?.insertBefore(wrapper, code);
        wrapper.appendChild(code);

        const button = createCopyButton(() => code.textContent || '', true);
        wrapper.appendChild(button);
        addedButtons.push(button);
      }
    });

    return () => {
      addedButtons.forEach((btn) => {
        const id = btn.dataset.timeoutId;
        if (id) clearTimeout(parseInt(id));
        btn.remove();
      });
    };
  }, [htmlContent]);
}

function createCopyButton(getText: () => string, isInline = false): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = '📋';
  button.className = isInline ? 'inline-copy-btn' : 'copy-btn';
  button.style.cssText = `
    position: absolute;
    ${isInline ? 'right: -1.5rem; top: 0;' : 'right: 1rem; top: 0.5rem;'}
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
  `;
  button.onclick = () => {
    navigator.clipboard.writeText(getText());
    button.textContent = '✅';
    const timeout = setTimeout(() => {
      button.textContent = '📋';
    }, 800);
    button.dataset.timeoutId = timeout.toString();
  };
  return button;
}
