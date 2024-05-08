import Navigation from "@/app/ui/navigation/Navigation";

export default function GalleryLayout({ children, gallery }: { children: React.ReactNode, gallery: React.ReactNode }) {
    return (
        <>
            <Navigation></Navigation>
            
            {gallery}
           
            {children}
        </>
    )
}    