import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { success: boolean; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 
      'https://script.google.com/macros/s/AKfycbyl_68q_7LDD-10U17g1HCAmk3V53S6GNBB2RDl2LthRIo8qLFVxwUvsgQnUeshuhmjbg/exec';

    await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error in /api/contact:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
