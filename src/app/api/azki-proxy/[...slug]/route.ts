import {NextRequest, NextResponse} from "next/server";
import type {NextResponse} from 'next/server'

export async function GET(req: NextRequest) {
    const {pathname} = req.nextUrl;
    const basePath = "/api/azki-proxy/";
    const path = pathname.substring(basePath.length);
    const externalUrl = `https://www.azki.com/${path}`;

    try {
        const res = await fetch(externalUrl, {
            method: "GET",
            headers: {
                "User-Agent": req.headers.get("user-agent") || "",
            },
        });

        if (!res.ok) {
            return new NextResponse("Error fetching from azki", {
                status: res.status,
            } as NextResponse);
        }

        // use default Content-Type "application/octet-stream" (binary) if not found Content-Type from res header
        const contentType = res.headers.get("content-type") ||
            "application/octet-stream";

        // default cache for 1 day
        let cacheControl = "public, no-cache, immutable";
        // let cacheControl = "public, max-age=86400, immutable";
        if (path.includes("fonts")) {
            //change cache to 7 day for fonts
            cacheControl = "public, max-age=604800, immutable";
        }

        const buffer = await res.arrayBuffer();

        return new NextResponse(buffer, {
            status: res.status,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": cacheControl,
                "Access-Control-Allow-Origin": "*",
            },
        } as NextResponse);
    } catch (err) {
        return new NextResponse("Proxy error", {
            status: 500,
        } as NextResponse);
    }
}
