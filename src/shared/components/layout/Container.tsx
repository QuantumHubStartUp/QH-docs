interface IContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  css?: string;
}

export const Container: React.FC<IContainerProps> = ({ children, css }) => {
  return <div className={`container mx-auto p-4 ${css}`}>{children}</div>;
};
