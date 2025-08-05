const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const sendNotificationType = 'late';

export default async ({ req, res, log, error }) => {
  if (req.path === '/ping') return res.text(`Pong ${sendNotificationType}`);

  try {
    const response = await fetch(
      `${API_URL}/notifyUser/${sendNotificationType}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY,
        },
      }
    );

    const bodyText = await response.text();

    if (!response.ok) {
      const bodyInfo = bodyText?.trim() ? ` - Body: ${bodyText}` : '';
      throw new Error(`Status ${response.status}${bodyInfo}`);
    }

    const data = bodyText ? JSON.parse(bodyText) : {};

    log?.(`Success: ${JSON.stringify(data)}`);

    return res.json({
      success: true,
      action: sendNotificationType,
      response: data,
      time: new Date().toISOString(),
    });
  } catch (err) {
    error?.(`Fetch error: ${err.message}`);

    return res.json({
      success: false,
      action: sendNotificationType,
      error: err.message,
      time: new Date().toISOString(),
    });
  }
};
