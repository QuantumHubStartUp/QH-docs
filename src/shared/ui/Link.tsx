


interface ILinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
}

export const Link: React.FC<ILinkProps> = ({ children, ...props }) => {
    return (
        <a {...props } className="block bg-gray-900 text-white p-3 rounded hover:bg-cyan-600 transition duration-300">
            {children}
        </a>
    )
}