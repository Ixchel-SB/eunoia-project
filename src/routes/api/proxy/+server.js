import { redirect } from '@sveltejs/kit';

export async function GET({ url }) {
  const targetUrl = url.searchParams.get('url');
  if (!targetUrl) {
    return new Response('Missing URL parameter', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    return new Response(data, {
      headers: {
        'Content-Type': 'text/calendar',
      },
    });
  } catch (error) {
    console.error('Error proxying request:', error);
    return new Response('Error proxying request', { status: 500 });
  }
}
