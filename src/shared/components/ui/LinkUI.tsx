import { Link, LinkProps } from 'react-router-dom';

export const LinkUI: React.FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={`block bg-gray-900 text-white p-3 rounded hover:bg-cyan-600 transition duration-300 ${className}`}
    />
  );
};
