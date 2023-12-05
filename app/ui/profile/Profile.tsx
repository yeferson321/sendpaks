import Link from 'next/link';
import Image from 'next/image';
import { ProfileProps } from '@/app/lib/definitions';
import Navbar from '../navbar/Navbar';

export default function Profile({ userData }: ProfileProps) {
    return (

        <header>

            <Navbar fullName={userData.fullName} />

            <section className="sm:border sm:rounded-lg dark:border-gray-600">

                <Image src={userData.bannerPictureUrl} alt="Banner Profile" width={500} height={1500} priority={true} className="w-full rounded-lg" />

                <div className="px-3 sm:px-5">

                    <div className="flex items-center justify-between">

                        <Image src={userData.profilePictureUrl} alt="Profile Picture" width={100} height={100} priority={true} className="-mt-12 z-40 rounded-full border-4 border-white dark:border-neutral-900" />

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 stroke-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>

                    </div>

                    <div className="flex flex-col space-y-1 mt-3">
                        <div className="flex items-center">
                            <h2 className="text-base font-medium text-gray-800 dark:text-slate-100">{userData.fullName}</h2>
                            {userData.verified && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 stroke-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-slate-300">{userData.userName}</p>
                    </div>

                    <div className="mt-3.5">
                        <p className="text-sm text-gray-600 dark:text-slate-300">{userData.description}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-3.5">
                        {userData.socialLinks.map((link, index) => (
                            <Link key={index} href={link.url} target="_blank" rel="noopener" className="flex items-center text-xs text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1.5 stroke-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                {link.platform}
                            </Link>
                        ))}
                        <div className="flex items-center text-xs text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1.5 stroke-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {userData.country}
                        </div>
                    </div>

                    <hr className="border-t border-gray-300 dark:border-gray-600 mt-4" />

                    <div className="flex justify-evenly text-gray-800 dark:text-slate-100 p-2">
                        <div className="text-center">
                            <span className="block font-bold text-sm">{userData.userRank}</span>
                            <span className="text-xs">Rango</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold text-sm">{userData.totalLikes}</span>
                            <span className="text-xs">Me gusta</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-bold text-sm">{userData.totalPosts}</span>
                            <span className="text-xs">Posts</span>
                        </div>
                    </div>

                </div>

            </section>


            <main className="">

                <div className="mt-4 p-3 space-y-3 border rounded-2xl">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col space-y-1">
                                <b className="capitalize">Sofia Tabarez</b>
                                <time dateTime="06-08-21" className="text-gray-400 text-xs">06 Agosto, 09.15 PM
                                </time>
                            </div>
                        </div>
                        <button type="button" className="rounded-full p-1.5 hover:bg-black/10 dark:hover:bg-slate-100/10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-gray-600 dark:fill-slate-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-slate-300">Hola chicos, espero que les guste esta foto :)</p>

                    <Image src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Publication Picture" width={500} height={400} className="rounded-2xl" />

                    <div className="flex items-center justify-between px-3">

                        <div className="flex items-center space-x-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                        </div>

                        <button type="button" className="text-slate-100 bg-[#1da1f2] hover:bg-[#1da1f2]/90 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
                            Hablar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 stroke-slate-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>

                    </div>

                </div>

            </main>

        </header>
    )
};
