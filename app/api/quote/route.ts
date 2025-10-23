import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { generateQuoteEmail } from '@/lib/email-templates'

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

    const { name, email, phone, company, service, projectDetails, timeline, budget, location } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !projectDetails) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email body with form data
    const emailBody = `
New Quote Request

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}

Project Details:
Service Required: ${service}
Timeline: ${timeline || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Location: ${location || 'Not specified'}

Project Description:
${projectDetails}
    `.trim()

    // Generate professional HTML email
    const htmlEmail = generateQuoteEmail({
      name,
      email,
      phone,
      company,
      service,
      projectDetails,
      timeline,
      budget,
      location
    })

    // Log the submission (you can see this in server logs)
    console.log('Quote Request Submission:', emailBody)

    // Send email using Resend
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.NOTIFY_EMAIL || 'Yusufmagaji3041@gmail.com',
        subject: `🎯 Quote Request: ${service}`,
        text: emailBody,
        html: htmlEmail,
      })
    } catch (sendErr) {
      console.error('Resend send error:', sendErr)
      // Continue - still return success to client but log the error
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request received successfully. We will send you a detailed quote soon!'
    })

  } catch (error) {
    console.error('Quote form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
