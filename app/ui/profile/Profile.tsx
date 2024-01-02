"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProfileProps, SocialIcons } from '@/app/lib/definitions/definitions';
import { IconTwitter, IconFacebook, IconInstagram, IconYoutube, IconTiktok } from '@/app/lib/icons/SocialIcons';
import ModalImage from '../modals/ModalImage';

const platformIcons: SocialIcons = {
    Twitter: <IconTwitter />,
    Facebook: <IconFacebook />,
    Instagram: <IconInstagram />,
    Youtube: <IconYoutube />,
    Tiktok: <IconTiktok />,
};

export default function Profile({ userData }: ProfileProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    return (
        <section className=" dark:border-gray-600">

            <div className="w-full overflow-hidden relative h-[180px] rounded-xl sm:rounded-t-lg">
                <Image src={userData.bannerPictureUrl} onClick={() => openModal(userData.bannerPictureUrl)} alt="Banner Profile" width={1440} height={990} priority={true} className="absolute block left-0 w-full h-full top-0 object-cover" />

                {isModalOpen && (
                    <ModalImage image={selectedImage} closeModal={setIsModalOpen} />
                )}
            </div>

            <div className="flex px-4 sm:px-5">

                <div className="relative -mt-12  rounded-full border-4 border-white dark:border-gray-950 flex-none">
                    <Image src={userData.profilePictureUrl} onClick={() => openModal(userData.profilePictureUrl)} alt="Profile Picture" width={96} height={96} priority={true} className="rounded-full" />
                    <span className="bottom-2.5 right-1 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-950 rounded-full"></span>
                </div>

                {isModalOpen && (
                    <ModalImage image={selectedImage} closeModal={setIsModalOpen} />
                )}
                
            </div>

            <div className="sm:px-5 mt-2.5">

                <div className="flex flex-col space-y-1">

                    <div className="flex items-center">
                        <h2 className="text-lg font-medium whitespace-nowrap text-gray-800 dark:text-white">{userData.fullName}</h2>
                        {userData.verified && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 flex-none stroke-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-slate-300">{userData.userName} - Ahora mismo</p>
                </div>

                <div className="mt-3.5">
                    <p className="text-base text-gray-800 dark:text-white">{userData.description}</p>
                </div>

                <div className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] mr-1 fill-gray-400 dark:fill-slate-500">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-slate-300">{userData.country}</span>
                </div>    const [isModalOpen, setIsModalOpen] = useState(false);

               {/*  <div className="mt-5">
                    <ul className="scrollbar flex whitespace-nowrap space-x-2 overflow-x-auto touch-pan-x">
                        {userData.socialLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url} target="_blank" rel="noopener" className="text-gray-600 dark:text-white bg-black/10 hover:bg-blue-500 dark:bg-white/5 dark:hover:bg-blue-500 focus:outline-none font-medium rounded-full text-xs pr-2 pl-1.5 py-1.5 text-center inline-flex items-center">
                                    <div className="bg-blue-500 rounded-full p-1 mr-2">
                                        {platformIcons[link.platform as keyof SocialIcons]}
                                    </div>
                                    {link.platform}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div> */}

                <div className="flex justify-evenly mt-4 py-1.5 border-y sm:border-y-0 sm:border-t dark:border-gray-600 text-gray-800 dark:text-slate-300 ">
                    <div className="text-center">
                        <span className="block text-sm font-medium">{userData.userRank}</span>
                        <span className="text-sm">Rango</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-medium">{userData.totalLikes}</span>
                        <span className="text-sm">Me gusta</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-medium">{userData.totalPosts}</span>
                        <span className="text-sm">Posts</span>
                    </div>
                </div>

            </div>

        </section>
    )
};
