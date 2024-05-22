'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ClassProps } from '@/app/lib/definitions/definitions';
import { IconApp, IconEllipsis, IconUser } from '@/app/lib/icons/SocialIcons';
import ModalSidebar from '../modals/ModalSidebar';
import Header from '../sidebar/Sidebar';
import { Popover } from '@headlessui/react';
/* import { useAppSelector } from '@/app/lib/redux/hooks';
 */
export default function Navbar({ className }: ClassProps) {
  const [isOpen, setIsOpen] = useState(false);
/*   const hola = useAppSelector(state => state.counterReduce.media)
 */
  return (
    <>
      <nav className={`${className}`} aria-label="nav">

        <div className="flex flex-wrap justify-between items-center py-3">

          <Link href="https://sendpaks.com/" className="mr-3">
            <span className="sr-only">Sendpaks icon</span>
            <IconApp />
          </Link>

          <button type="button" onClick={() => setIsOpen(true)} className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            <IconEllipsis className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />
          </button>

        </div>

      </nav>


      <ModalSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <Header setIsOpen={setIsOpen} />
      </ModalSidebar>

    </>
  )
};