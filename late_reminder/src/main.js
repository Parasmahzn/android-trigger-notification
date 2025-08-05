import fetch from 'node-fetch';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const sendNotificationType = 'late';

export default async ({ req, res, log, error }) => {
  log?.('triggered');
  if (req.path === '/ping') return res.text(`Pong ${sendNotificationType}`);

  log?.(`API_KEY: ${API_KEY}`);

  await fetch(`${API_URL}/notifyUser/${sendNotificationType}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
  })
    .then(async (r) => {
      if (!r.ok) {
        const bodyText = await r.text();
        const bodyInfo = bodyText?.trim() ? ` - Body: ${bodyText}` : '';
        throw new Error(`Status ${r.status}${bodyInfo}`);
      }
      return r.json();
    })
    .then((data) => log?.(`Response: ${JSON.stringify(data)}`))
    .catch((err) => error?.(`Request failed: ${err.message}`))
    .finally(() => {
      log('Function exited');
    });
};
