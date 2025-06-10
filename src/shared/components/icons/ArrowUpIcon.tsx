
interface IArrowUpIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

export const ArrowUpIcon: React.FC<IArrowUpIconProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" { ...props } >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
    )
}