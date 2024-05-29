import { IconsProps, TypeFile } from '@/app/lib/definitions/definitions';
import { IconAudio, IconFile, IconImage, IconVideo } from '@/app/lib/icons/SocialIcons';

export const IconByType = ({ type, strokeWidth, className }: { type: TypeFile } & IconsProps) => {
    const iconMap: Record<TypeFile, JSX.Element> = {
        video: <IconVideo strokeWidth={strokeWidth} className={className} />,
        image: <IconImage strokeWidth={strokeWidth} className={className} />,
        audio: <IconAudio strokeWidth={strokeWidth} className={className} />,
        file: <IconFile strokeWidth={strokeWidth} className={className} />,
    };
    return iconMap[type];
};
