export const runtime = 'edge';

import { Metadata } from 'next';
/* import Gallery from '@/app/ui/gallery/Gallery'; */
import Navbar from '@/app/ui/navbar/Navbar';
import Sidebar from '@/app/ui/sidebar/Sidebar';
import Pricing from '@/app/ui/pricing/Pricing';
import Footer from '@/app/ui/footer/Footer';
import { notFound, redirect } from 'next/navigation';
import NotFound from './not-found'
import Bar from '@/app/ui/bar/Bar';
import PaymentLogos from '@/app/ui/paymentLogos/PaymentLogos';
import { IconVideo } from '@/app/lib/icons/SocialIcons';
import Stats from '@/app/ui/stats/Stats';
import { ApiResponse, MediaProps } from '@/app/lib/definitions/definitions';
import Navegation from '@/app/ui/navigation/Navigation';
/* import Gallery from './@gallery/[type]/page'; */
import Navigation from '@/app/ui/navigation/Navigation';
import { updateHola } from '@/app/lib/utils/estadoglobal';

/* import TypeGallery from './type/page' */
/* import TypeGaller from './@gallery/page'
 */
/* 
import TypeGaller from '@/app/[locale]/(posts)/[profile]/@galley/[type]/page';
 */
export async function generateMetadata({ params }: { params: { profile: string } }): Promise<Metadata> {
    return { title: `OnlyPaks ${params.profile}` };
};

async function fetchPosts(postId: string): Promise<ApiResponse> {

    const res = await fetch(`http://localhost:3000/api/posts/${postId}`,

        {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${process.env.DATA_API_KEY}`
            },
        });

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
};

export default async function RootLayout({ children, gallery, modal, params }: { children: React.ReactNode, gallery: React.ReactNode, modal: React.ReactNode, params: { profile: string, type: string } }) {



    const response = await fetchPosts(params.profile)

    updateHola(response.data.media)

    return (

        <>



          
                        {children}
                        {gallery}

                       


               
        </>


    )

}