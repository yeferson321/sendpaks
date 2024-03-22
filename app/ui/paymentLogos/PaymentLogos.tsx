import { IconCripto, IconMastercard, IconMercadoPago, IconPaypal, IconVisa } from "@/app/lib/icons/SocialIcons";

export default function PaymentLogos() {
    return (
        <div className="inline-flex items-center justify-center gap-2 w-full">
            <IconMastercard/>
            <IconVisa/>
            <IconMercadoPago/>
            <IconPaypal/>
            <IconCripto/>
        </div>
    )
};
