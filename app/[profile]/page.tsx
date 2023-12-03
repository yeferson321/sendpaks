import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import Profile from '../components/profile/Profile'

export default async function Home({ params }: any) {

    const fetchUser = async () => {
        const dataUser = {
            verified: true,
            fullName: "Sofia Tabares",
            idUser: "sofiatabares01",
            profilePictureUrl: "https://placekitten.com/150/150",
            bannerPictureUrl: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=800",
            description: "Cada uno de ustedes es especial para mi y agradezco su apoyo 💕 los quiero mucho y denle amor a todo mi contenido 😋",
            country: "Colombia",
            socialLinks: [{ "Tiktok": "sofiatabares01" }, { "Instagram": "sofiatabares01" }],
            userRank: 3.242,
            totalLikes: 132,
            totalPosts: 350
        };
        return dataUser;
    };

    const response = await fetchUser()

    return (
        <header>
            <div>
                <Navbar fullName={response.fullName}/>
                <Profile userData={response} />
            </div>
        </header>
    )
}
