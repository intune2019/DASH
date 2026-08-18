import { NextRequest, NextResponse } from 'next/server';

function isSameOrigin(request: NextRequest) {
  const reqUrl = new URL(request.url);
  const reqHost = reqUrl.host;
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  try {
    if (origin) {
      const originHost = new URL(origin).host;
      return originHost === reqHost;
    }
    if (referer) {
      const refHost = new URL(referer).host;
      return refHost === reqHost;
    }
  } catch (_) {}
  // No origin/referer: treat as server/internal
  return true;
}

export async function GET(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  try {
    // Get the URL parameter
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');
    
    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }
    
    // Fetch the image
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${response.status}` },
        { status: response.status }
      );
    }
    
    // Get the image data
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageData = await response.arrayBuffer();
    
    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
        'Vary': 'Origin',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 }
    );
  }
}
