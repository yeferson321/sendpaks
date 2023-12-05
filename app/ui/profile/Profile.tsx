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

                <div className="mt-4 sm:border sm:rounded-lg dark:border-gray-600">
                    <ul className="flex justify-evenly text-sm font-medium text-center" role="tablist">
                        <li>
                            <button className="inline-block p-2 hover:text-gray-800 border-b-2 hover:border-amber-600" type="button" aria-selected="false">Todo</button>
                        </li>
                        <li>
                            <button className="inline-block p-2 hover:text-gray-800 border-b-2 hover:border-amber-600" type="button" aria-selected="false">Fotos</button>
                        </li>
                        <li>
                            <button className="inline-block p-2 hover:text-gray-800 border-b-2 hover:border-amber-600" type="button" aria-selected="false">Gifs</button>
                        </li>
                        <li>
                            <button className="inline-block p-2 hover:text-gray-800 border-b-2 hover:border-amber-600" type="button" aria-selected="false">Videos</button>
                        </li>
                    </ul>
                </div>

                <div className="mt-4 p-4 sm:border sm:rounded-lg dark:border-gray-600">

                    <div className="flex items-center justify-between">
                        <div className="gap-3.5	flex items-center ">
                            <img src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                            <div className="flex flex-col">
                                <b className="mb-2 capitalize">sofia müller</b>
                                <time dateTime="06-08-21" className="text-gray-400 text-xs">06 August at 09.15 PM
                                </time>
                            </div>
                        </div>
                        <div className="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                    </div>

                    <div className="whitespace-pre-wrap mt-7">Hello guys ?</div>

                    <div className="flex justify-center  flex-wrap">
                        <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo" />
                    </div>

                    <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                        <div className="flex gap-5">
                            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                        <div className="flex">
                            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                        </div>
                    </div>
                    <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>


                </div>
                {/* <div id="default-tab-content">
                    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div>
 */}


            </main>

            <main className="flex items-center justify-center">
                <div className="border max-w-screen-md  mt-6 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="gap-3.5	flex items-center ">
                            <img src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                            <div className="flex flex-col">
                                <b className="mb-2 capitalize">sofia müller</b>
                                <time dateTime="06-08-21" className="text-gray-400 text-xs">06 August at 09.15 PM
                                </time>
                            </div>
                        </div>
                        <div className="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                    </div>

                    <div className="whitespace-pre-wrap mt-7">Hello guys ?</div>

                    <div className="mt-5 flex gap-2	justify-center border-b pb-4 flex-wrap">
                        <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo" />
                    </div>

                    <div>

                    </div>

                </div>

            </main >

        </header>
    )
};
