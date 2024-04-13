export const runtime = 'edge';

import { Metadata } from 'next';
import Gallery from '../../ui/gallery/Gallery';
import Navbar from '../../ui/navbar/Navbar';
import Profile from '../../ui/profile/Profile'
import Header from '../../ui/header/Header';
import Pricing from '@/app/ui/pricing/Pricing';
import Sidebar from '@/app/ui/Sidebar/Sidebar';
import Footer from '@/app/ui/footer/Footer';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { profile: string } }): Promise<Metadata> {
    return { title: `OnlyPaks ${params.profile}` };
};

interface MediaItem {
    url: string;
    type: 'mp4' | 'docx' | 'mp3' | 'webp'; // Tipos posibles para 'type'
    duration?: string; // La duración es opcional para algunos tipos de medios
}

interface Stats {
    total_videos: number;
    total_images: number;
    total_mp3: number;
    total_docx: number;
    total_likes: number;
}

interface Pricing {
    discount_expiry_date: string; // En formato ISO 8601
    original_price: number;
    discounted_price: number;
    discount_rate: number; // En decimal
}

interface ApiResponse {
    status: string;
    data?: {
        stats: Stats;
        media: MediaItem[];
        pricing: Pricing;
    };
}


const fetchPosts = async (idPost: string): Promise<ApiResponse> => {

    return {
        status: "success",
        data: {
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
                discount_expiry_date: "2025-04-06T05:40:00",
                original_price: 10.99,
                discounted_price: 2.99,
                discount_rate: 0.70
            }
        }
    };
};


export default async function Home({ params }: { params: { profile: string } }) {

    const response = await fetchPosts(params.profile)
    if (!response.data) {
        notFound()
    }

    return (
        <div className="mx-auto max-w-[43rem] lg:max-w-[65rem] xl:max-w-[84rem] max-xs:py-2 px-3 xs:px-4">

            <div className="grid grid-rows-[_1fr,auto] xs:grid-cols-[_1fr,auto] max-xs:gap-y-6 xs:gap-x-4">

                <Navbar className="xs:hidden" />

                <Header className="hidden xs:block" />

                <div className="lg:grid lg:grid-cols-[auto,_1fr] lg:gap-x-4">

                    <div className="lg:min-w-[450px] lg:max-w-[600px]">

                        <Gallery media={response.data.media} />

                        {/*   <Profile stats={response.stats} /> */}

                        <Footer />

                    </div>

                    <Sidebar pricing={response.data.pricing} />

                </div>

            </div>

        </div>
    )
}