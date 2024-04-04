'use client'
import { useState } from 'react';
import Link from 'next/link';
import { ClassProps } from '@/app/lib/definitions/definitions';
import { IconApp, IconEllipsis, IconUser } from '@/app/lib/icons/SocialIcons';
import ModalSidebar from '../modals/ModalHeader';
import Header from '../header/Header';

export default function Navbar({ className }: ClassProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`${className} rounded-full shadow-lg bg-white dark:bg-base`} aria-label="nav">

        <div className="flex flex-nowrap items-center justify-between p-3">

          <Link href="https://onlypaks.com/" className="mr-3">
            <span className="sr-only">Sendhud logo</span>
            <IconApp className="fill-light-neutral dark:fill-white" />
          </Link>
          
          <div className="flex space-x-3">

            <button type="button" className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group">

              <span className="sr-only">Open main menu</span>

              <IconUser className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />

            </button>


            <button type="button" onClick={() => setIsOpen(true)} className="p-1 rounded-full hover:bg-light-blue-hover dark:hover:bg-dark-blue-hover group" aria-expanded="false">

              <span className="sr-only">Open main menu</span>

              <IconEllipsis className="w-7 h-7 stroke-light-neutral dark:stroke-dark-neutral group-hover:stroke-blue-base" />

            </button>

          </div>

        </div>

      </nav>

      <ModalSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
        <Header setIsOpen={setIsOpen} />
      </ModalSidebar>

    </>
  )
};

{/* <nav className="flex flex-wrap items-center justify-between px-4 py-2">

<div className="inline-flex items-center">
  <h1 className="text-lg font-medium whitespace-nowrap text-gray-800 dark:text-white">{fullName}</h1>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 stroke-light-blue-hover0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
</div>

<button type="button" onClick={() => copyUrlShare("este es el mensaje", setIsModalOpen)} className="rounded-full p-1.5 hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-white hover:text-light-blue-hover0 focus:outline-none ring-0 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" focus:outline-none ring-0 w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
  </svg>
</button>

{isModalOpen && (
  <ModalAlert message="¡Copiado! Ahora puedes compartir" />
)}

</nav> */}