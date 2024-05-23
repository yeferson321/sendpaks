import { MediaProps, TypeFile } from "@/app/lib/definitions/definitions";
import Gallery from "@/app/ui/gallery/Gallery";

const media: MediaProps["media"] = [
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "image" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "image" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "video", duration: "1:90" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "image" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "file" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "video", duration: "1:90" },
    { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/cmeokrc23.webp", type: "audio" }
];

export default function TypeGaller({ params }: { params: { profile: string, type: string, modal: string } }) {
    /* const { type } = useParams() */
    console.log('Gallery type:', params)


    return <></>
}
