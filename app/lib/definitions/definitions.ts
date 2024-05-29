export type StatsProps = {
  stats: {
    total_videos?: number;
    total_images?: number;
    total_audios?: number;
    total_files?: number;
    total_likes?: number;
  };
};

export type TypeFile = 'video' | 'image' | 'audio' | 'file';

export type MediaProps = {
  media: {
    url: string;
    id: number;
    type: TypeFile;
    duration?: string;
  }[];
};

export type PricingProps = {
  pricing: {
    discount_expiry_date?: string;
    original_price: number;
    discounted_price?: number;
    discount_rate?: number;
  };
};

export type ApiResponse = {
  status: string;
  data: {
    stats: StatsProps["stats"];
    media: MediaProps["media"];
    pricing: PricingProps["pricing"];
  };
};

export type IconsProps = {
  strokeWidth?: string | number | undefined;
  className?: string | undefined;
};

export type IsOpenProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ClassProps = {
  className?: React.HTMLAttributes<HTMLSpanElement>["className"];
};

export type SidebarProps = {
  className?: ClassProps["className"];
  setIsOpen?: IsOpenProps["setIsOpen"];
};

export type NavbarProps = {
  setIsOpen: IsOpenProps["setIsOpen"];
};

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: IsOpenProps["setIsOpen"];
};

export type PopoveProps = {
  event?: () => void;
  timer?: number;
  children: React.ReactNode;
};

export type LanguageProps = {
  buttonClass: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
  spanClass?: React.HTMLAttributes<HTMLSpanElement>["className"];
  IconLanguage?: JSX.Element;
};

export type ThemeProps = {
  buttonClass: React.ButtonHTMLAttributes<HTMLButtonElement>["className"];
  spanClass?: React.HTMLAttributes<HTMLSpanElement>["className"];
  IconMoon: JSX.Element;
  IconSun: JSX.Element;
};

export type DiscountProps = {
  discount_expiry_date?: string;
  original_price: number;
  discounted_price?: number;
  discount_rate?: number;
};

export type BarProps = {
  pricing: DiscountProps;
  className?: ClassProps["className"];
};

export type TimeLeftProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

export type TimerProps = {
  remainingTime: TimeLeftProps;
  discountRate?: number;
};

/* export type PricingProps = {
  pricing: DiscountProps;
  showDiscount: boolean;
};
 */