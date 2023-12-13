"use client"
import { useEffect, useState } from 'react';
import { NavbarProps } from '@/app/lib/definitions';
import ModalAlert from '../modals/ModalAlert';

import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { changeTheme } from '@/app/redux/features/theme';
import { copyUrlShare } from '@/app/redux/features/modalAlert';

export default function Navbar({ fullName }: NavbarProps) {
  const theme = useAppSelector(state => state.theme.theme);
  const showModal = useAppSelector(state => state.showModal.showModal);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl: string) => {
    setIsModalOpen(true);
  };

  return (
    <nav className="flex items-center justify-between py-3">

      <button type="button" onClick={() => dispatch(changeTheme())} className="rounded-full p-1.5 hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-white hover:text-blue-500">
        {theme ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

      <div className="inline-flex items-center">
        <h1 className="text-lg font-normal whitespace-nowrap text-gray-800 dark:text-white">{fullName}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-1.5 stroke-blue-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      </div>

      <button type="button" onClick={() => dispatch(copyUrlShare(`Hola. soy ${fullName}, Mira mi contenido exclusivo en OnlyPaks.com`))} className="rounded-full p-1.5 hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-white hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
          </svg>
      </button>

      {showModal && (
        <ModalAlert message="¡El enlace al perfil se copió al portapapeles!" />
      )}
    </nav>
  )
};