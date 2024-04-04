import { Metadata } from 'next';
import Gallery from '../../ui/gallery/Gallery';
import LoadMore from '../../ui/loadMore/LoadMore';
import Navbar from '../../ui/navbar/Navbar';
import Profile from '../../ui/profile/Profile'
import Header from '../../ui/header/Header';
import Pricing from '@/app/ui/pricing/Pricing';
import Sidebar from '@/app/ui/Sidebar/Sidebar';
import Footer from '@/app/ui/footer/Footer';

export async function generateMetadata({ params }: { params: { profile: string } }): Promise<Metadata> {
    return { title: `OnlyPaks ${params.profile}` }
}

export default async function Home({ params }: { params: { profile: string } }) {

    const fetchPosts = async () => {

        /*         const userData = {
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
                }; */

        /*         const posts = [{
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
                }] */

        const publication = {

            idPost: "fwfc24rfth4",


            stats: {
                total_videos: 3,
                total_images: 5,
                total_mp3: 1,
                total_docx: 1,
                total_likes: 226,
            },

            media: [
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fcmeokrc23.webp", type: 'mp4', duration: "0:90" },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fcvwevrwe.webp", type: 'mp4', duration: "2:50" },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Ferc2r23.webp", type: 'mp4', duration: "1:09" },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fijeofjwioerofwe.webp", type: 'docx' },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fmdmfo23d2.webp", type: 'mp3', duration: "4:09" },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fqmwkl232c.webp", type: 'webp' },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp", type: 'webp' },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frv23rv2rv.webp", type: 'webp' },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fwevwerv.webp", type: 'webp' },
                { url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Fwver2ed.webp", type: 'webp' }
            ],

            pricing: {
                discount_expiry_date: "2024-04-22T20:13:00",
                original_price: 10.99,
                discounted_price: 2.99,
                discount_rate: 0.70
            }

        }

        return publication;
    };

    const response = await fetchPosts()

    return (

        <>
            {/* 
<div class="fixed inset-0 py-4  overflow-auto">


                <div class="grid grid-rows-[min-content,_1fr] xs:grid-cols-[min-content,_1fr] gap-6 xs:gap-6 xl:gap-8 ">

                    <Navbar className="xs:hidden" />

                    <Header className="hidden xs:block" />

                    <div className="lg:flex xs:gap-6 xl:gap-8 overflow-auto ">

                        <div className="lg:flex-1 lg:min-w-[570px] lg:max-w-[600px] ">

                            <Gallery media={response.media} />
                            <Profile stats={response.stats} /> 
                            <Footer />

                        </div>

                        <Sidebar pricing={response.pricing} className="sticky bottom-2" />

                    </div>

                </div>
            </div>

         */}

            <div className="mx-auto max-w-[43rem] lg:max-w-[69rem] xl:max-w-[80rem] max-xs:py-2 px-3 xs:px-4">

                <div className="grid grid-rows-[auto,_1fr] xs:grid-cols-[auto,_1fr] max-xs:gap-y-6 xs:gap-x-4">

                    <Navbar className="xs:hidden" />

                    <Header className="hidden xs:block" />

                    <div className="lg:flex lg:gap-x-4">

                        <div className="lg:min-w-[570px] lg:max-w-[620px]">

                            <Gallery media={response.media} />
                            {/*   <Profile stats={response.stats} /> */}
                            <Footer />

                        </div>

                        <Sidebar pricing={response.pricing} className="" />

                    </div>

                </div>

            </div>
        </>
    )
}