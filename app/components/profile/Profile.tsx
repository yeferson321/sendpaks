import Image from 'next/image';
import Link from 'next/link';

interface Link {
    Tiktok?: string;
    Instagram?: string;
    Twitter?: string;
    Threads?: string;
    Youtube?: string;
};

interface ProfileProps {
    userData: {
        verified: boolean
        fullName: string;
        idUser: string;
        profilePictureUrl: string;
        bannerPictureUrl: string;
        description: string;
        country: string;
        socialLinks: Link[];
        userRank: number;
        totalLikes: number;
        totalPosts: number;
    };
};

export default function Home({ userData }: ProfileProps) {

    return (

        <div className="bg-white rounded-lg shadow-md w-full">

            <div className="relative">
                <img src={userData.bannerPictureUrl} alt="Banner Profile" className="w-full rounded-t-lg" />
                <img src={userData.profilePictureUrl} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white" />
            </div>

            <div className="flex items-center mt-4">
                <h2 className="text-xl font-bold text-gray-800">{userData.fullName}</h2>
                {userData.verified && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                )}
            </div>

            <p className="text-gray-700 mt-2.5">Cada uno de ustedes es especial para mi y agradezco su apoyo 💕 los quiero mucho y denle amor a todo mi contenido 😋</p>

            <div className="flex items-center mt-4 space-x-4">
                <Link href='#' className="flex items-center text-sm text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    Twitter
                </Link>
                <Link href='#' className="flex items-center text-sm text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    Instagram
                </Link>
                <div className="flex items-center text-sm text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Colombia
                </div>
            </div>

            <hr className="mt-4 border-t border-gray-300" />

            <div className="py-2 flex justify-evenly text-gray-600">
                <div className="text-center">
                    <span className="block font-bold text-lg">1.5k</span>
                    <span className="text-xs">Rango</span>
                </div>
                <div className="text-center">
                    <span className="block font-bold text-lg">120</span>
                    <span className="text-xs">Me gusta</span>
                </div>
                <div className="text-center">
                    <span className="block font-bold text-lg">350</span>
                    <span className="text-xs">Posts</span>
                </div>
            </div>

        </div>



    )
}
