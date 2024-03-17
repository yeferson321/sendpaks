'use client'
/* import { ClassProps } from '@/app/lib/definitions/definitions'; */
import Timer from '../timer/Timer';
import Pricing from '../pricing/Pricing';
import PaymentLogos from '../paymentLogos/PaymentLogos';
import Footer from '../footer/Footer';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { countdownTimer } from '@/app/lib/utils/timerUtils';

export type ClassProps = {
    className?: React.HTMLAttributes<HTMLSpanElement>['className'];
};

export type SidebarProps = {
    payments: {
        discount_expiry_date: string;
        original_price: number;
        discounted_price: number;
        discount_rate: number;
    };
};


export default function Sidebar({ payments, className }: SidebarProps & ClassProps) {

    const { discount_expiry_date, original_price, discounted_price } = payments;

    const [showDiscount, setShowDiscount] = useState(false);

    const [remainingTime, setRemainingTime] = useState({ hours: 24, minutes: 24, seconds: 24 });

    useEffect(() => {

        const difference = new Date(discount_expiry_date).getTime() - new Date().getTime();

        if (discount_expiry_date && difference > 0) {

            countdownTimer(discount_expiry_date, time => { setRemainingTime(time) }); // Target date: March 1, 2024, 12:00 PM


            setShowDiscount(true)
        }
    }, [])

    return (
        <aside className={`${className} sticky lg:top-0 lg:overflow-y-auto lg:h-screen`} aria-label="Sidebar">

            <div className="p-3 space-y-3 lg:space-y-4 rounded-xl border lg:border-0 border-gray-200 dark:border-neutral-border bg-white dark:bg-elevated-base lg:dark:bg-transparent">

                {showDiscount && (
                    <Timer remainingTime={remainingTime} />
                )}

                <Pricing payments={payments} showDiscount={showDiscount} />

                <PaymentLogos />

                <Footer className="hidden lg:block" />

            </div>

        </aside>
    )
};
