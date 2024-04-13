export const runtime = 'edge';

import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const APIKey = headers().get("API-Key");

  if (APIKey !== "1234567")
    return NextResponse.json(
      { error: "You may not have the permissions to perform this action." },
      { status: 401 }
    );

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const posts = [
    {
      idPost: "fwfc24rfth4",
      verified: true,
      fullName: "Sofia Tabares",
      userName: "@sofiatabares01",
      profilePictureUrl:
        "https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg",
      description: "Se me ve todo con este disfraz, toda tuya :)",
      multimedia: [
        {
          type: "img",
          url: "https://blur.onlypaks.com/blur/sofiatabares01/mov2849vrdcnwi.webp",
        },
        {
          type: "img",
          url: "https://blur.onlypaks.com/blur/sofiatabares01/ver6u5b5ty.webp",
        },
        {
          type: "img",
          url: "https://blur.onlypaks.com/blur/sofiatabares01/vr64hy4tb3.webp",
        },
      ],
      totalLikes: 32,
      totalComments: 12,
    },
    {
      idPost: "fwf2wdc24rfth4",
      verified: true,
      fullName: "Sofia Tabares",
      userName: "@sofiatabares01",
      profilePictureUrl:
        "https://profile.onlypaks.com/sofiatabares01/vw42w84n5yr.jpg",
      description: "Se me ve bien rico, disfruteeen 🤤",
      multimedia: [
        {
          type: "img",
          url: "https://blur.onlypaks.com/blur/sofiatabares01/wvt5y6785b34.webp",
        },
        {
          type: "video",
          url: "https://video.onlypaks.com/sofiatabares01/video_1701849497251.mp4",
        },
      ],
      totalLikes: 22,
      totalComments: 5,
    },
  ];

  return NextResponse.json(
    { "data": posts, params: query, "Api-key": APIKey },
    { status: 201 }
  );
}
