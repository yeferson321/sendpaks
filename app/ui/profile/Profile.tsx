"use client"
import Link from 'next/link';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
/* import { ProfileProps, SocialIcons } from '@/app/lib/definitions/definitions'; */
import { IconVideo, IconImage, IconAudio, IconFile, IconHeart } from '@/app/lib/icons/SocialIcons';
import Modal from '../modals/Modal';
import Pricing from '../pricing/Pricing';
import Sidebar from '../bar/Bar';
/* 
const platformIcons: SocialIcons = {
    Twitter: <IconTwitter />,
    Facebook: <IconFacebook />,
    Instagram: <IconInstagram />,
    Youtube: <IconYoutube />,
    Tiktok: <IconTiktok />,
}; */


import { useTranslations } from 'next-intl';

export type ProfileProps = {
    stats: {
        total_videos: number;
        total_images: number;
        total_mp3: number;
        total_docx: number;
        total_likes: number;
    };
};

export default function Profile({ stats }: ProfileProps) {
    const t = useTranslations('Profile');

    return (

        <div className="flex items-center flex-nowrap p-3">

            <ul className="flex space-x-3 text-sm font-medium">

                <li className="flex items-center text-neutral-500 dark:text-neutral-300">
                    <IconVideo className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                    <span className="ms-2">{stats.total_images}</span>
                </li>

                <li className="flex items-center text-neutral-500 dark:text-neutral-300">
                    <IconImage className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                    <span className="ms-2">{stats.total_videos}</span>
                </li>

                <li className="flex items-center text-neutral-500 dark:text-neutral-300">
                    <IconAudio className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                    <span className="ms-2">{stats.total_videos}</span>
                </li>

                <li className="flex items-center text-neutral-500 dark:text-neutral-300">
                    <IconFile className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                    <span className="ms-2">{stats.total_videos}</span>
                </li>

                <li className="flex items-center text-neutral-500 dark:text-neutral-300">
                    <IconHeart className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                    <span className="ms-2">{t('totalLikes', { value: stats.total_likes })}</span>
                </li>

            </ul>

        </div>

    )
};
