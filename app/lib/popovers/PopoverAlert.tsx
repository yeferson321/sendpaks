'use client'

import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export type PopoverAlertProps = {
    buttonClass?: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
    IconPopover?: JSX.Element;
    buttonText?: string;
    panelClass?: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
    children?: React.ReactNode;
};


export default function PopoverAlert({ buttonClass, IconPopover, buttonText, panelClass, children }: PopoverAlertProps) {

    const popoverClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, open: boolean) => {
        const buttonRef = event.currentTarget as HTMLButtonElement;
        if (buttonRef && open === true) {
            buttonRef.click();
        }
    };

    return (
        <Popover>
            {({ open }) => (
                <>
                <Popover.Button onMouseLeave={(ref) => popoverClick(ref, open)}
                    className={buttonClass}>
                    <span className="sr-only">Open Popover</span>
                    {IconPopover}
                    {buttonText}
                </Popover.Button>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel className={panelClass}
                    >
                        {children}
                    </Popover.Panel></Transition.Child>


            </>
            )}
        </Popover>
    )
}