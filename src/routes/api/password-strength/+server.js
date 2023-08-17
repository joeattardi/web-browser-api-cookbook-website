import { json } from '@sveltejs/kit';

export function GET({ request }) {
  const url = new URL(request.url);
  const password = url.searchParams.get('password');

  if (password.length < 8) {
    return json({
      status: 'error',
      error: 'Password must be at least 8 characters long'
    });
  }

  if (!(/[0-9]/.test(password))) {
    return json({
      status: 'error',
      error: 'Password must contain a number'
    });
  }

  return json({ status: 'ok' });
}