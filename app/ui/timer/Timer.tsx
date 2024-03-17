import { ModalTimer } from '@/app/lib/definitions/definitions';
import { useTranslations } from 'next-intl';

export default function Timer({ remainingTime }: ModalTimer) {
    const t = useTranslations('Sidebar.Timer');
    const { hours, minutes, seconds } = remainingTime;

    return (
        <div className="text-sm lg:text-base font-medium text-neutral-500 dark:text-neutral-300">
            <span>{t('textOffer')}</span>
            {hours !== 0 && (
                <span className="inline-flex ml-1.5 text-nowrap text-[13px] text-green font-medium py-0.5 px-2 rounded-full bg-green/10">
                    {hours} {t('hours')}
                </span>
            )}
            <span className="inline-flex ml-0.5 text-nowrap text-[13px] text-green font-medium py-0.5 px-2 rounded-full bg-green/10">
                {minutes} {t('minutes')}
            </span>
            <span className="inline-flex ml-0.5 text-nowrap text-[13px] text-green font-medium py-0.5 px-2 rounded-full bg-green/10">
                {seconds} {t('seconds')}
            </span>
        </div>
    );
}

