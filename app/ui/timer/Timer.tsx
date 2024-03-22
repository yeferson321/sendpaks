import { useTranslations } from 'next-intl';
import { TimerProps } from '@/app/lib/definitions/definitions';

export default function Timer({ remainingTime }: TimerProps) {
    const t = useTranslations('Sidebar.Timer');
    const { days, hours, minutes, seconds } = remainingTime;

    return (
        <div aria-label="Timer">
            <span className="text-sm lg:text-base font-medium text-neutral-500 dark:text-neutral-300">{t('textOffer')}</span>
            {days !== 0 && (
                <span className="inline-flex ml-1.5 py-px px-1.5 text-[13px] font-medium text-green text-nowrap rounded-full bg-green/10">
                    {days} {t('days')}
                </span>
            )}
            {hours !== 0 && (
                <span className="inline-flex ml-1.5 py-px px-1.5 text-[13px] font-medium text-green text-nowrap rounded-full bg-green/10">
                    {hours} {t('hours')}
                </span>
            )}
            {minutes !== 0 && (
                <span className="inline-flex ml-0.5 py-px px-1.5 text-[13px] font-medium text-green text-nowrap rounded-full bg-green/10">
                    {minutes} {t('minutes')}
                </span>
            )}
            <span className="inline-flex ml-0.5 py-px px-1.5 text-[13px] font-medium text-green text-nowrap rounded-full bg-green/10">
                {seconds} {t('seconds')}
            </span>
        </div>
    );
}

