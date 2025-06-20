import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from '../icons';
import { Button } from '../ui/button';

interface ICopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  label?: string;
}

export const CopyButton: React.FC<ICopyButtonProps> = ({
  text,
  label = 'Копировать',
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <Button onClick={handleCopy} className="flex items-center gap-2" {...props}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      {label}
    </Button>
  );
};
