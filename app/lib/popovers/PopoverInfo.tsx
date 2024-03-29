import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export type PopoverInfoProps = {
    buttonClass?: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
    IconPopover?: JSX.Element;
    buttonText?: string;
    panelClass?: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
    children?: React.ReactNode;
};

export default function PopoverInfo({ buttonClass, IconPopover, buttonText, panelClass, children }: PopoverInfoProps) {
    return (
        <Popover>
            <>
                <Popover.Button className={buttonClass}>
                    <span className="sr-only">Open Popover</span>
                    {IconPopover}
                    {buttonText}
                </Popover.Button>
                <Transition as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    <Popover.Panel className={panelClass}>
                        {children}
                    </Popover.Panel>
                </Transition>
            </>
        </Popover>
    )
}