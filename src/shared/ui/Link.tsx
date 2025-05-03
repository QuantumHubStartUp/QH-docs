


interface ILinkProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
}

export const Link: React.FC<ILinkProps> = ({ children, ...props }) => {
    return (
        <a {...props } className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-cyan-600 transition duration-300">
            {children}
        </a>
    )
}