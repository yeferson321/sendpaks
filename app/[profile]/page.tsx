import Cards from '../ui/cards/Cards';
import LoadMore from '../ui/loadMore/LoadMore';
import Navbar from '../ui/navbar/Navbar';
import Profile from '../ui/profile/Profile'
import Sidebar from '../ui/sidebar/Sidebar';

export default async function Home({}) {

    const fetchUser = async () => {

        const userData = {
            verified: true,
            fullName: "Sofia Tabares",
            userName: "@sofiatabares01",
            bannerPictureUrl: "https://banner.onlypaks.com/sofiatabares01/eher35tgftryu5.jpg",
            profilePictureUrl: "https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg",
            description: "Cada uno de ustedes es especial para mi y agradezco su apoyo 💕 los quiero mucho y denle amor a todo mi contenido 😋",
            country: "Colombia",
            socialLinks: [
                { platform: "Tiktok", url: "https://www.tiktok.com/@sofiatabares01" },
                { platform: "Instagram", url: "https://www.instagram.com/sofiatabares01" },
                { platform: "Facebook", url: "https://www.tiktok.com/@sofiatabares01" },
                { platform: "Youtube", url: "https://www.tiktok.com/@sofiatabares01" },
                { platform: "Twitter", url: "https://www.tiktok.com/@sofiatabares01" },

            ],
            userRank: 3.242,
            totalLikes: 132,
            totalPosts: 350
        };

        const userPosts = [{
            idPost: "fwfc24rfth4",
            verified: true,
            fullName: "Sofia Tabares",
            userName: "@sofiatabares01",
            profilePictureUrl: "https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg",
            description: "Se me ve todo con este disfraz, toda tuya :)",
            multimedia: [
                { type: "img", url: "https://blur.onlypaks.com/blur/sofiatabares01/mov2849vrdcnwi.webp" },
                { type: "img", url: "https://blur.onlypaks.com/blur/sofiatabares01/ver6u5b5ty.webp" },
                { type: "img", url: "https://blur.onlypaks.com/blur/sofiatabares01/vr64hy4tb3.webp" },
            ],
            totalLikes: 32,
            totalComments: 12
        }, {
            idPost: "fwf2wdc24rfth4",
            verified: true,
            fullName: "Sofia Tabares",
            userName: "@sofiatabares01",
            profilePictureUrl: "https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg",
            description: "Se me ve bien rico, disfruteeen 🤤",
            multimedia: [
                { type: "img", url: "https://blur.onlypaks.com/blur/sofiatabares01/wvt5y6785b34.webp" },
                { type: "video", url: "https://video.onlypaks.com/sofiatabares01/video_1701849497251.mp4" },
            ],
            totalLikes: 22,
            totalComments: 5
        }]

        return { userData, userPosts };
    };

    const response = await fetchUser()

    return (

        <div className="mx-auto px-3 max-w-3xl sm:px-10 lg:px-8 ">

            <div className="sm:flex sm:space-x-12">

                <Sidebar />

                <div>
                    <Navbar fullName={response.userData.fullName} />

                    <Profile userData={response.userData} />

                    <Cards userPosts={response.userPosts} />

                    <LoadMore />

                </div>

            </div>

        </div>

    )
}