export type NavbarProps = {
    fullName: string;
};

export type ProfileProps = {
    userData: {
        verified: boolean
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
        multimedia: { type: string, url: string }[];
        totalLikes: number;
        totalComments: number;
    }[]
};

export type SocialIcons = {
    Twitter: JSX.Element;
    Facebook: JSX.Element;
    Instagram: JSX.Element;
    Youtube: JSX.Element;
    Tiktok: JSX.Element;
}