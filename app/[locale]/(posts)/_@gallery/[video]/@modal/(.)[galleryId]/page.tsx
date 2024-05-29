'use client'
import { IconMark } from '@/app/lib/icons/SocialIcons';

import Modal from '@/app/ui/modals/Modal';
import React, { useState } from 'react';
  
export default function IDmedia({ params }: { params: { profile: string, type: string, id: string } }) {

    console.log("hola como estan")

    const [isOpen, setIsOpen] = useState(false);

    return (

        <Modal isOpen={true} setIsOpen={setIsOpen} >


            <div className="rounded-lg bg-white dark:bg-red-400">

                <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-200 dark:border-neutral-border">

                    <h3 className="text-red-300 mr-3 text-lg md:text-xl font-medium dark:font-semibold dark:text-white">
                        El ID es: {params.id}
                    </h3>

                    <button type="button" className="p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                        <span className="sr-only">Close modal</span>
                        <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-800 dark:stroke-white group-hover:stroke-blue-500" />
                    </button>

                </div>

                <div className="p-3 md:p-4">
                    La ruta sin recargada
                </div>
            </div>
        </Modal>
    )
}
