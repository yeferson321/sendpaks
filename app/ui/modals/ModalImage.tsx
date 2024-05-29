"use client"
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
    return (
        <Transition appear show={isOpen}>

            <Dialog as="div" className="relative z-40 focus:outline-none" onClose={() => setIsOpen(false)}>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

                    <div className="flex min-h-full items-center justify-center p-4">

                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >



                            <DialogPanel className="flex min-h-full items-center justify-center">


                                {children}


                            </DialogPanel>



                        </TransitionChild>





                    </div>

                </div>

            </Dialog>
        </Transition>
    )
}
