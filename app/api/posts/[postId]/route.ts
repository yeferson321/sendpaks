export const runtime = "edge";

import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET( request: NextRequest, { params }: { params: { postId: string } } ) {
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
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/235285369545635.webp", id: "235285369545635", type: "image" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/353965425764574.webp", id: "353965425764574", type: "image" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/456743567896456.webp", id: "456743567896456", type: "video", duration: "1:90" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/534987535606345.webp", id: "534987535606345", type: "image" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/753890635757386.webp", id: "753890635757386", type: "file" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/824764636485458.webp", id: "824764636485458", type: "video", duration: "1:90" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/864254367856456.webp", id: "864254367856456", type: "audio" },
      { url: "https://pub-7b61669726e74ed8854d3eec2863a582.r2.dev/blur/vanredesenfo/865467852345678.webp", id: "865467852345678", type: "audio" }
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

/* // obtener parametros sin ruta /api/post?query=1

const searchParams = request.nextUrl.searchParams;
const query = searchParams.get("query");

const { searchParams } = new URL(request.url)
const id = searchParams.get('id')

// obtener todos los parametros con el mismo nombre
const id = searchParams.getAll("id"); */