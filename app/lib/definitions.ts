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