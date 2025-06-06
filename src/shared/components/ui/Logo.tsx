import { Link } from "react-router-dom";


interface ILogoProps extends React.HTMLProps<HTMLAnchorElement> {
    title: string;
}

export const Logo: React.FC<ILogoProps> = ({ title }) => {

    

    return (
        <Link to="/" className="flex items-center justify-center h-16 bg-gray-900 rounded-xl p-3">

                <img 
                    src = "/logo.jpg" 
                    className="w-8 h-8 mr-2 rounded-full"
                />
                <h1 className="text-xl font-bold  bg-gradient-to-r from-blue-600 via-black-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    { title }
                </h1>
            
        </Link>
    );
}