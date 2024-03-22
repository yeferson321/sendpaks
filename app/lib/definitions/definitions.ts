export type NavbarProps = {
  fullName: string;
};

export type ProfileProps = {
  userData: {
    verified: boolean;
    fullName: string;
    userName: string;
    profilePictureUrl: string;
    bannerPictureUrl: string;
    description: string;
    country: string;
    socialLinks: { platform: string; url: string }[];
    userRank: number;
    totalLikes: number;
    totalPosts: number;
  };
};

export type CardsProps = {
  userPosts: {
    idPost: string;
    verified: boolean;
    fullName: string;
    userName: string;
    profilePictureUrl: string;
    description: string;
    multimedia: { type: string; url: string }[];
    totalLikes: number;
    totalComments: number;
  }[];
};

export type SocialIcons = {
  Twitter: JSX.Element;
  Facebook: JSX.Element;
  Instagram: JSX.Element;
  Youtube: JSX.Element;
  Tiktok: JSX.Element;
};

export type ClassProps = {
  className?: React.HTMLAttributes<HTMLSpanElement>["className"];
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

export type TimeLeftProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

export type TimerProps = {
  remainingTime: TimeLeftProps;
};

export type IconsProps = {
  strokeWidth?: string | number | undefined;
  className?: string | undefined;
};

export type PaymentsProps = {
  payments: {
    discount_expiry_date: string;
    original_price: number;
    discounted_price: number;
    discount_rate: number;
  };
};
