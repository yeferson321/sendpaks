type ModalImageProps = {
    image: string;
    closeModal: (state: boolean) => void;
};

export default function ModalImage({ image, closeModal }: ModalImageProps) {
    return (
        <div onClick={() => closeModal(false)} className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="max-w-2xl sm:max-w-lg lg:max-w-xl bg-white rounded-2xl overflow-hidden">
                <img src={image} alt="Profile Picture" className="w-full h-auto" />
            </div>
        </div>
    )
};