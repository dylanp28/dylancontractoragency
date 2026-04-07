import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields: name, email, message' },
      { status: 400 }
    )
  }

  if (!process.env.RESEND_API_KEY) {
    // No Resend key configured — signal the client to use mailto: fallback
    return NextResponse.json({ mailto: true })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] send error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
