export const runtime = "edge";

import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const API_TOKEN = headers().get("x-access-token");

  if (API_TOKEN !== process.env.DATA_API_KEY)
    return NextResponse.json(
      { error: "You may not have the permissions to perform this action." },
      { status: 401 }
    );

  const data = {
    stats: {
      total_videos: 150,
      total_images: 50,
      total_audios: 10,
      total_likes: 460000,
    },
    media: [
      {
        url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp",
        type: "image",
       
      },
      {
        url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp",
        type: "video",
        duration: "1:90",
      },
      {
        url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp",
        type: "video",
        duration: "1:90",
      },
      {
        url: "https://blur.onlypaks.com/blur%2Fvanredesenfo%2Frlwmrlv2.webp",
        type: "video",
        duration: "1:90",
      },
      
    ],
    pricing: {
      discount_expiry_date: "2024-04-30T05:40:00",
      original_price: 10.99,
      discounted_price: 2.99,
      discount_rate: 0.7,
    },
  };

  return NextResponse.json({ status: "success", data }, { status: 200 });
}
