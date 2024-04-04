import { useTranslations } from 'next-intl';
import { IconCheck } from "@/app/lib/icons/SocialIcons";
import { PricingProps } from '@/app/lib/definitions/definitions';

export default function Pricing({ pricing, showDiscount }: PricingProps) {
    const t = useTranslations('Sidebar.Pricing');
    const { original_price, discounted_price, discount_rate } = pricing;

    /*     <div className="flex">
    
        <div className="flex-1">
    
            <div className="space-x-2 truncate">
    
                <span className=" li text-lg xs:text-xl lg:text-2xl font-semibold xs:font-bold text-neutral-800 dark:text-white">
                    {t(showDiscount ? 'discountedPrice' : 'originalPrice', { price: showDiscount ? discounted_price : original_price })}
                </span>
    
                {showDiscount && (
                    <span className="truncate decoration-neutral-500 dark:decoration-neutral-300 text-sm font-normal text-neutral-500 dark:text-neutral-300">
                        {t('originalPrice', { price: original_price })}
                    </span>
                )}
    
            </div>
    
            <div className="inline-flex items-center">
                <p className="text-sm font-medium text-nowrap text-neutral-500 dark:text-neutral-300">
                    {showDiscount ? t('discountDescription', { value: discount_rate }) : 'Pago seguro'}
                </p>
                <IconCheck strokeWidth={2.5} className="w-4 h-4 ms-1 stroke-blue-base" />
            </div>
    
        </div>
    
        <button type="button" className="flex-1 w-[70px] px-2 rounded-2xl truncate text-base lg:text-sm font-semibold text-white bg-blue-base hover:bg-blue-hover">
            {t('payToView')}
        </button>
    </div>
     */

    return (

        <div className="flex">

            <div className="flex-1 w-[150px] pl-1 pr-3">



                <div className="space-x-2 truncate">

                    <span className=" leading-none text-lg xs:text-xl lg:text-2xl font-semibold xs:font-bold text-neutral-800 dark:text-white">
                        {t(showDiscount ? 'discountedPrice' : 'originalPrice', { price: showDiscount ? discounted_price : original_price })}
                    </span>

                    {showDiscount && (
                        <span className=" leading-none line-through decoration-neutral-500 dark:decoration-neutral-300 text-sm font-normal text-neutral-500 dark:text-neutral-300">
                            {t('originalPrice', { price: original_price })}
                        </span>
                    )}

                </div>


                <div className="flex items-center">
                    <span className="truncate text-sm font-medium text-neutral-500 dark:text-neutral-300">
                        {showDiscount ? t('discountDescription', { value: discount_rate }) : 'Pago seguro'}
                    </span>
                    <IconCheck strokeWidth={2.5} className="w-4 h-4 ms-1 stroke-blue-base" />
                </div>

            </div>

            <button type="button" className="flex-1 w-[70px] px-2 rounded-2xl truncate text-base lg:text-sm font-semibold text-white bg-blue-base hover:bg-blue-hover">
                {t('payToView')}
            </button>
        </div>
    )
};
