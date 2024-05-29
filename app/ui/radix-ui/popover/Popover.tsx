

'use client'
import React, { useEffect, useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { PopoveProps } from '@/app/lib/definitions/definitions';

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverPortal = PopoverPrimitive.Portal;
export const PopoverContent = PopoverPrimitive.Content;
export const PopoverArrow = PopoverPrimitive.PopoverArrow;

export const Popover = ({ children, timer, event }: PopoveProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) event && event();

        if (timer && isOpen) {
            const timeout = setTimeout(() => {
                setIsOpen(false);
            }, timer);
            return () => clearTimeout(timeout);
        }
    }, [isOpen, timer, event]);

    return (
        <PopoverPrimitive.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} defaultOpen={false}>
            {children}
        </PopoverPrimitive.Root>
    )
};
