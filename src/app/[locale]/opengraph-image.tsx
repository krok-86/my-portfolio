import { ImageResponse } from "next/og";
import { getDictionary } from "@/content/get-dictionary";

export const alt = "Konstantin Bykadorov — Frontend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0D10",
          color: "#E8EAED",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#5EEAD4",
            fontSize: 18,
            letterSpacing: 4,
          }}
        >
          FRONTEND ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: -1,
            }}
          >
            Konstantin Bykadorov
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 24,
              color: "#9AA3B2",
              maxWidth: 860,
              lineHeight: 1.4,
            }}
          >
            {dict.metadata.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#9AA3B2",
            fontSize: 20,
          }}
        >
          React · TypeScript · Next.js · Redux Toolkit
        </div>
      </div>
    ),
    { ...size },
  );
}
