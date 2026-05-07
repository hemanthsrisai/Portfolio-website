import { Resend } from 'resend';

// Initialize Resend with the API key from Vercel environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Use a verified domain or the testing 'onboarding@resend.dev' domain if not yet verified
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Change this to your verified domain once you have one
      to: 'hemanthsrisaiboddupalli@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
