import { IconCheck } from "@/app/lib/icons/SocialIcons";
import { ClassProps } from '@/app/lib/definitions/definitions';
/* import { useTranslations } from 'next-intl';
 */

export default function Pricing({ className }: ClassProps) {
    /*    const t = useTranslations('Sidebar');
    */
    return (
        <div className={`${className} grid grid-cols-[_1fr,_1fr]`}>
            <div className="flex flex-col xs:pl-3 lg:pl-0 pr-3">
                <p className="text-xl font-semibold text-neutral-800 dark:text-white">USD<span className="align-middle mx-1 text-sm font-normal line-through decoration-neutral-500 dark:decoration-neutral-300 text-neutral-500 dark:text-neutral-300">$10.99</span>$2.99</p>
                <div className="inline-flex items-center">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">70% de descuento</span>
                    <IconCheck strokeWidth={2.5} className="flex-shrink-0 w-4 h-4 ms-1 stroke-blue-500" />
                </div>
            </div>
            <button type="button" className="min-w-[80px] text-base lg:text-sm font-semibold px-2 rounded-full truncate whitespace-nowrap text-white bg-blue-500 hover:bg-blue-600">
                Pagar para ver
            </button>
        </div>
    )
};
