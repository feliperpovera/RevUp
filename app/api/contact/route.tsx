import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email } = body

    // Here you would typically send an email using a service like SendGrid, Resend, etc.
    // For now, we'll just log the data and return success
    console.log("[v0] Contact form submission:", { name, phone, email })

    // In production, you would send an email to info@revupagencygroup.com
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: "info@revupagencygroup.com",
    //   subject: `New Lead: ${name}`,
    //   html: `
    //     <h2>New Lead Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //   `
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
