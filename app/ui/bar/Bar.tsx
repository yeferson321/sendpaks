'use client'
import { useEffect, useState } from 'react';
import { BarProps, TimeLeftProps } from '@/app/lib/definitions/definitions';
import { countdownTimer } from '@/app/lib/utils/timerUtils';
import Timer from '../timer/Timer';
import Pricing from '../pricing/Pricing';
import PaymentLogos from '../paymentLogos/PaymentLogos';
import Footer from '../footer/Footer';

export default function Bar({ pricing, className }: BarProps) {
  const [remainingTime, setRemainingTime] = useState<TimeLeftProps>({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    if (!pricing.discount_expiry_date) return;
  
    const intervalId = setInterval(() => {
      const remaining = countdownTimer(pricing.discount_expiry_date!, intervalId); // Aquí usamos ! para decirle a TypeScript que sabemos que discount_expiry_date no es nulo
      setRemainingTime(remaining);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [pricing.discount_expiry_date]);
  

  return (
    <aside className={`${className}  sticky max-lg:bottom-3 lg:w-full lg:top-0 lg:h-screen`} aria-label="Sidebar">

      {/* h-full max-xs:p-4 xs:py-4 xl:p-4 overflow-y-auto bg-white dark:bg-base xs:dark:bg-transparent */}

      <div className="lg:h-full lg:p-4 lg:overflow-y-auto">

        <div className="p-3 lg:p-4 space-y-1.5 lg:space-y-3 rounded-2xl bg-white bg-base/5 dark:bg-base">
          
          {remainingTime.expired && <Timer remainingTime={remainingTime} discountRate={pricing.discount_rate} />}

          <Pricing showDiscount={remainingTime.expired} pricing={pricing} />

        </div>



        {/* 
          <PaymentLogos /> */}

      </div>

      {/*  <Footer className="hidden lg:block mt-5" /> */}


    </aside>
  )
};
