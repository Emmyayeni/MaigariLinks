import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateContactEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: Request) {
  try {
    // Parse request body with error handling
    let body
    try {
      const text = await request.text()
      if (!text || text.trim() === '') {
        return NextResponse.json(
          { error: 'Request body is empty' },
          { status: 400 }
        )
      }
      body = JSON.parse(text)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email body with form data
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}
    `.trim()

    // Generate professional HTML email
    const htmlEmail = generateContactEmail({
      name,
      email,
      phone,
      company,
      service,
      message
    })

    // Log the submission (you can see this in server logs)
    console.log('Contact Form Submission:', emailBody)

    // Send email using Resend
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.NOTIFY_EMAIL || 'Yusufmagaji3041@gmail.com',
        subject: `Contact Form: ${service || 'General Inquiry'}`,
        text: emailBody,
        html: htmlEmail,
      })
    } catch (sendErr) {
      console.error('Resend send error:', sendErr)
      // Continue - we still return success to the client but log the error for ops
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully. We will contact you soon!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
