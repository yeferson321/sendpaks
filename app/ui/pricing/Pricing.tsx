import { useTranslations } from 'next-intl';
import { IconCheck } from "@/app/lib/icons/SocialIcons";
import { PricingProps } from '@/app/lib/definitions/definitions';

export default function Pricing({ pricing, showDiscount }: PricingProps) {
    const t = useTranslations('Sidebar.Pricing');
    const { original_price, discounted_price, discount_rate } = pricing;

    return (
        <div className="grid grid-cols-[_1fr,_1fr]">
            <div className="flex flex-col pr-3">
                <div className="flex-nowrap">
                    <span className="text-xl font-semibold text-neutral-800 dark:text-white">
                        {t(showDiscount ? 'discountedPrice' : 'originalPrice', { price: showDiscount ? discounted_price : original_price })}
                    </span>
                    {showDiscount && (
                        <span className="align-middle ml-2 text-sm font-normal line-through decoration-neutral-500 dark:decoration-neutral-300 text-neutral-500 dark:text-neutral-300">
                            {t('originalPrice', { price: original_price })}
                        </span>
                    )}
                </div>
                <div className="inline-flex items-center">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
                        {showDiscount ? t('discountDescription', { value: discount_rate }) : 'Pago seguro'}
                    </span>
                    <IconCheck strokeWidth={2.5} className="flex-shrink-0 w-4 h-4 ms-1 stroke-blue-500" />
                </div>
            </div>
            <button type="button" className="min-w-[80px] text-base lg:text-sm font-semibold px-2 rounded-full truncate whitespace-nowrap text-white bg-blue-500 hover:bg-blue-600">
                {t('payToView')}
            </button>
        </div>
    )
};
