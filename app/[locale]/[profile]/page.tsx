import { Metadata } from 'next';
import Cards from '../../ui/cards/Cards';
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

        const payments = {  
            discount_expiry_date: "2024-03-16T12:00:00",
            original_price: 10.99,
            discounted_price: 2.99,
            discount_rate: 70         
        }

        return { userData, userPosts, payments };
    };

    const response = await fetchUser()

    return (
        /*    <div className="mx-auto max-w-7xl xr:px-3 xr:pt-3 sm:px-12 md:px-3 md:py-3 xr:gap-3 flex h-screen">
   
               <div className="w-auto min-w-0 flex-shrink-" >
                   <Sidebar />
               </div>
   
   
               <div className='w-min grow' >
                   <ScrollBar >
                       <div className="rounded-lg  border dark:border-none dark:bg-background-base">
   
   
                           <Navbar fullName={response.userData.fullName} />
   
                           <Profile userData={response.userData} />
   
                           <Cards userPosts={response.userPosts} />
   
                           <LoadMore />
   
   
   
                       </div>
                   </ScrollBar>
               </div>
   
               <div className='hidden lg:block '>
                   <Pricing />
               </div>
   
           </div >
    */

        /*     <div class="mx-auto max-w-[80rem] py-2.5 px-2 sm:px-5 md:px-10 lg:px-2.5 gap-5 grid-columns">
    
                <div className=''>
                    <Sidebar />
                </div>
    
    
                <div className="custom-scrollbar overflow-y-auto lg:min-w-[38rem] lg:max-w-[40rem]">
    
                    <div className=" bg-white dark:bg-background-base">
    
                        <Navbar fullName={response.userData.fullName} />
    
                        <Profile userData={response.userData} />
    
                        <Cards userPosts={response.userPosts} />
    
                        <LoadMore />
    
                    </div>
    
                </div>
    
    
                <div className='hidden lg:block col-span-1'>
                    <Pricing />
                </div>
    
            </div> */

        <div className="mx-auto max-w-[43rem] lg:max-w-[69rem] xl:max-w-[80rem] p-2.5 xs:py-0 xs:px-3">

            <div className="grid grid-rows-[min-content,_1fr] xs:grid-cols-[min-content,_1fr] gap-y-4 xs:gap-y-0 xl:gap-x-6">

                <Header />

                <div className="lg:flex lg:gap-4 xl:gap-6">

                    <div className="lg:flex-1 lg:min-w-[570px] lg:max-w-[600px]">

                        <Profile userData={response.userData} />

                        <Cards userPosts={response.userPosts} />

                        <LoadMore />

                        <Footer className="lg:hidden" />

                    </div>

                    <Sidebar payments={response.payments} className="hidden lg:block lg:flex-initial lg:max-w-[360px]" />

                </div>

            </div>

        </div>


    )
}