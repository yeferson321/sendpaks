import { useTranslations } from 'next-intl';
import { IconCheck } from "@/app/lib/icons/SocialIcons";
import { PricingProps } from '@/app/lib/definitions/definitions';

export default function Pricing({ pricing, showDiscount }: PricingProps) {
    const t = useTranslations('Sidebar.Pricing');
    const { original_price, discounted_price, discount_rate } = pricing;

    return (

        <div className="grid grid-cols-[_1fr,_1fr]">

            <div className="max-lg:pl-1 pr-2 lg:pr-4">

                <div className="space-x-2">

                    <span className="text-lg xs:text-xl font-semibold text-neutral-800 dark:text-white">
                        {t(showDiscount ? 'discountedPrice' : 'originalPrice', { price: showDiscount ? discounted_price : original_price })}
                    </span>

                    {showDiscount && (
                        <span className="line-through decoration-light-neutral dark:decoration-dark-neutral text-sm font-medium text-light-neutral dark:text-dark-neutral">
                            {t('originalPrice', { price: original_price })}
                        </span>
                    )}

                </div>


                <div className="flex items-center">
                    <span className="text-nowrap text-sm font-medium text-light-neutral dark:text-dark-neutral">
                        {showDiscount ? t('discountDescription', { value: discount_rate }) : 'Pago seguro'}
                    </span>
                    <IconCheck strokeWidth={2.5} className="w-4 h-4 ms-1 stroke-blue-base" />
                </div>

            </div>

            <button type="button" className="px-2 lg:px-4 rounded-2xl text-nowrap max-xs:truncate text-base font-semibold text-white bg-blue-base hover:bg-blue-hover">
                {t('payToView')}
            </button>

        </div>
    )
};
