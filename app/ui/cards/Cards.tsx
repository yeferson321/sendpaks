"use client"
import Image from 'next/image';
import Link from 'next/link';
import Multimedia from '../multimedia/Multimedia';
import { CardsProps } from '@/app/lib/definitions';
import { useState } from 'react';
import { copyUrlShare } from '@/app/lib/copyUrlShare';
import ModalOpcion from '../modals/ModalOpcion';

export default function Cards({ userPosts }: CardsProps) {
    //const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            {userPosts.map((post, index) => (
                <div key={index} className="sm:px-5 py-[24px] sm:py-4 sm:mt-6 border-b sm:border sm:rounded-xl dark:border-gray-600">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center flex-none space-x-3">
                            <Link href="#">
                                <Image src={post.profilePictureUrl} alt="Profile Picture" width={45} height={45} className="rounded-full" />
                            </Link>
                            <div className="flex flex-col space-y-1">
                                <Link href="#" className="text-base font-normal flex items-center text-gray-800 dark:text-white">
                                    <span className="whitespace-nowrap">{post.fullName}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 stroke-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </Link>
                                <p className="text-sm text-gray-600 dark:text-slate-300">{post.userName}</p>
                            </div>
                        </div>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 stroke-gray-500 dark:stroke-white hover:stroke-blue-600 dark:hover:stroke-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>

                        <ModalOpcion />
                    </div>

                    <div className="mt-3">
                        <p className="text-base text-gray-800 dark:text-white">{post.description}</p>
                    </div>

                    <Multimedia multimedia={post.multimedia} />

                    <div className="flex items-center justify-between px-3 mt-4">

                        <div className="flex items-center gap-3 small:gap-5 mr-3">

                            <button type="button" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 dark:stroke-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>

                            <button type="button" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:stroke-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>

                            <button type="button" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:stroke-slate-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            </button>

                        </div>

                        <button type="button" className="truncate-button overflow-hidden whitespace-nowrap flex items-center bg-blue-500 hover:bg-blue-500/90 text-white text-sm py-2.5 px-4 rounded-lg">
                            <span className="truncate">Suscríbete para ver</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 flex-none stroke-slate-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </button>

                    </div>

                    <div className="px-3 mt-2">
                        <p className="text-sm text-gray-600 dark:text-slate-300">{post.totalLikes} me gusta ~ {post.totalComments} comentarios</p>
                    </div>

                </div>
            ))}
        </>
    )
};