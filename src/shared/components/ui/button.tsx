interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer ${className ?? ''}`}
    >
      {children}
    </button>
  );
};
