'use client'
import { useEffect, useState } from 'react';
import { SidebarProps, TimeLeftProps } from '@/app/lib/definitions/definitions';
import { countdownTimer } from '@/app/lib/utils/timerUtils';
import Timer from '../timer/Timer';
import Pricing from '../pricing/Pricing';
import PaymentLogos from '../paymentLogos/PaymentLogos';
import Footer from '../footer/Footer';

export default function Sidebar({ pricing, className }: SidebarProps) {
  const [remainingTime, setRemainingTime] = useState<TimeLeftProps>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    if (!pricing.discount_expiry_date) return;

    const intervalId = setInterval(() => {
      setRemainingTime(countdownTimer(pricing.discount_expiry_date, intervalId));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <aside className={`${className} lg:sticky lg:top-0 lg:h-screen`} aria-label="Sidebar">

      <div className="h-full py-4 overflow-y-auto">
        
        <div className="p-3 lg:p-4 space-y-3 lg:space-y-4 rounded-xl border lg:border-0 bg-base/5 dark:bg-base">

          {remainingTime.expired && <Timer remainingTime={remainingTime} />}

          <Pricing showDiscount={remainingTime.expired} pricing={pricing} />

          <PaymentLogos />

        </div>

        <Footer className="hidden lg:block mt-5" />

      </div>

    </aside>
  )
};
