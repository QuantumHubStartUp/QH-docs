
interface IContainerProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            {children}
        </div>
    );
}