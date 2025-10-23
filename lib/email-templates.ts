// Professional email templates for Maigari Links

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

interface QuoteEmailData {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  projectDetails: string
  timeline?: string
  budget?: string
  location?: string
}

export function generateContactEmail(data: ContactEmailData): string {
  const { name, email, phone, company, service, message } = data
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Maigari Links Oil & Gas Ltd
              </h1>
              <p style="margin: 10px 0 0; color: #e0e7ff; font-size: 14px;">
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 24px; color: #1f2937; font-size: 20px; font-weight: 600;">
                📬 Contact Information
              </h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <a href="mailto:${email}" style="color: #1e40af; font-size: 14px; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Phone:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <a href="tel:${phone}" style="color: #1e40af; font-size: 14px; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Company:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px;">${company}</span>
                  </td>
                </tr>
                ` : ''}
                ${service ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Service Interest:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #7c3aed; font-size: 14px; font-weight: 600;">${service}</span>
                  </td>
                </tr>
                ` : ''}
              </table>

              <div style="margin-top: 32px;">
                <h3 style="margin: 0 0 16px; color: #1f2937; font-size: 16px; font-weight: 600;">
                  💬 Message:
                </h3>
                <div style="background-color: #f9fafb; padding: 20px; border-left: 4px solid #1e40af; border-radius: 4px;">
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  <strong>⏰ Received:</strong> ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px;">
                This message was sent via the contact form on <strong>maigarilinks.com</strong>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                © ${new Date().getFullYear()} Maigari Links Oil & Gas Ltd. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export function generateQuoteEmail(data: QuoteEmailData): string {
  const { name, email, phone, company, service, projectDetails, timeline, budget, location } = data
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                Maigari Links Oil & Gas Ltd
              </h1>
              <p style="margin: 10px 0 0; color: #d1fae5; font-size: 14px;">
                🎯 New Quote Request
              </p>
            </td>
          </tr>

          <!-- Priority Badge -->
          <tr>
            <td style="padding: 20px 30px 0;">
              <div style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                ⚡ ACTION REQUIRED - New Business Opportunity
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 24px 30px 40px;">
              
              <!-- Client Information -->
              <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 600;">
                👤 Client Information
              </h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px; font-weight: 600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <a href="mailto:${email}" style="color: #059669; font-size: 14px; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Phone:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <a href="tel:${phone}" style="color: #059669; font-size: 14px; text-decoration: none; font-weight: 600;">${phone}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Company:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px;">${company}</span>
                  </td>
                </tr>
                ` : ''}
              </table>

              <!-- Project Details -->
              <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 600;">
                📋 Project Details
              </h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Service Required:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #059669; font-size: 14px; font-weight: 700;">${service}</span>
                  </td>
                </tr>
                ${timeline ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Timeline:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px;">${timeline}</span>
                  </td>
                </tr>
                ` : ''}
                ${budget ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Budget Range:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px; font-weight: 600;">${budget}</span>
                  </td>
                </tr>
                ` : ''}
                ${location ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151; font-size: 14px;">Location:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <span style="color: #1f2937; font-size: 14px;">📍 ${location}</span>
                  </td>
                </tr>
                ` : ''}
              </table>

              <div style="margin-top: 24px;">
                <h3 style="margin: 0 0 16px; color: #1f2937; font-size: 16px; font-weight: 600;">
                  📝 Project Description:
                </h3>
                <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); padding: 20px; border-left: 4px solid #059669; border-radius: 4px;">
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${projectDetails}</p>
                </div>
              </div>

              <!-- Call to Action -->
              <div style="margin-top: 32px; padding: 24px; background-color: #f0fdf4; border-radius: 8px; text-align: center;">
                <p style="margin: 0 0 16px; color: #065f46; font-size: 14px; font-weight: 600;">
                  ⏰ Response Time Target: Within 24 hours
                </p>
                <a href="mailto:${email}?subject=Re: Quote Request - ${service}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                  Reply to Client
                </a>
              </div>

              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  <strong>⏰ Received:</strong> ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px;">
                This quote request was submitted via <strong>maigarilinks.com</strong>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                © ${new Date().getFullYear()} Maigari Links Oil & Gas Ltd. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
