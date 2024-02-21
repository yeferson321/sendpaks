"use client"
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalSidebar({ children, isOpen, setIsOpen }: ModalProps) {
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="xs:hidden relative z-30" onClose={() => setIsOpen(false)}>
                <Transition.Child as={Fragment} enter="ease-in-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 backdrop-blur-sm dark:bg-black/40 opacity-100" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-200" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-200" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                                <Dialog.Panel className="pointer-events-auto w-[270px]">
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
