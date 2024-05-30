'use client'
import { TypeFile } from '@/app/lib/definitions/definitions';
import { IconMark } from '@/app/lib/icons/SocialIcons';

import Modal from '@/app/ui/modals/Modal';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function IDmedia({ params }: { params: { profile: string, galleryId: string } }) {


    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);

    const [showButton, setShowButton] = useState(false);

    const LoadingIcon = () =>
        `  <svg width="130px" height="130px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="400px" height="500px" fill="#00000057" />
    
    <circle cx="25" cy="50" r="5" fill="black">
        <animate attributeName="r" values="5;9;5" dur="0.8s" repeatCount="indefinite" begin="0" />
        <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0" />
    </circle>
    <circle cx="50" cy="50" r="9" fill="black">
        <animate attributeName="r" values="9;5;9" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
    </circle>
    <circle cx="75" cy="50" r="5" fill="black">
        <animate attributeName="r" values="5;9;5" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
        <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
    </circle>
</svg>`;

    const toBase64 = (str: string) => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

    return (


        <Modal isOpen={true} setIsOpen={setIsOpen} >


            <div className=" flex items-center justify-between md:p-4  p-5"   >

          <Image onLoad={() => setShowButton(true)}
                    alt="Picture representation"
                    src={`https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/${params.galleryId}.webp`}

                  placeholder={`data:image/svg+xml;base64,${toBase64(LoadingIcon())}`}

                    quality={100}

                    width={400}
                    height={500}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                /> 

              {/*   {showButton &&
                    <svg width="130px" height="130px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <circle cx="25" cy="50" r="5" fill="black">
                            <animate attributeName="r" values="5;9;5" dur="0.8s" repeatCount="indefinite" begin="0" />
                            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0" />
                        </circle>
                        <circle cx="50" cy="50" r="9" fill="black">
                            <animate attributeName="r" values="9;5;9" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
                            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
                        </circle>
                        <circle cx="75" cy="50" r="5" fill="black">
                            <animate attributeName="r" values="5;9;5" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
                            <animate attributeName="opacity" values="1;0.5;1" dur="0.8s" repeatCount="indefinite" begin="0.4s" />
                        </circle>
                    </svg>
                } */}


                 {showButton &&
                    <div className="absolute top-7 right-7">

                        <button type="button" onClick={() => { router.back() }} className="p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">

                            <span className="sr-only">Close modal</span>

                            <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-800 dark:stroke-white group-hover:stroke-blue-500" />

                        </button>

                    </div>
                }

            </div>

        </Modal >


    )
}