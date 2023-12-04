import Cards from '../ui/cards/Cards';
import Profile from '../ui/profile/Profile'
import Sidebar from '../ui/sidebar/Sidebar';

export default async function Home({ params }: any) {

    const fetchUser = async () => {
        const dataUser = {
            verified: true,
            fullName: "Sofia Tabares",
            userName: "@sofiatabares01",
            profilePictureUrl: "https://placekitten.com/150/150",
            bannerPictureUrl: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=800",
            description: "Cada uno de ustedes es especial para mi y agradezco su apoyo 💕 los quiero mucho y denle amor a todo mi contenido 😋",
            country: "Colombia",
            socialLinks: [{ platform: "Tiktok", url: "https://www.tiktok.com/@sofiatabares01" },
            { platform: "Instagram", url: "https://www.instagram.com/sofiatabares01" },],
            userRank: 3.242,
            totalLikes: 132,
            totalPosts: 350
        };
        return dataUser;
    };

    const response = await fetchUser()

    return (

        <div className="mx-auto px-2.5 max-w-3xl sm:px-10 lg:px-8 ">

            <div className="sm:flex sm:space-x-12">

                <Sidebar />

                <Profile userData={response} />

               

            </div>

            <Cards />

        </div>

    )
}