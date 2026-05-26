import nodemailer from "nodemailer";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    console.log(
      "Received lead:",
      body
    );

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env
            .GMAIL_USER,
          pass: process.env
            .GMAIL_PASS,
        },
      });

    const info =
      await transporter.sendMail({
        from: process.env.GMAIL_USER,

        to: process.env.GMAIL_USER,

        subject:
          "New Property Lead",

        html: `
          <div style="font-family: Arial; padding:20px;">
            <h2>New Lead Received</h2>

            <p>
              <strong>Name:</strong>
              ${body.full_name}
            </p>

            <p>
              <strong>Phone:</strong>
              ${body.phone}
            </p>

            <p>
              <strong>Email:</strong>
              ${body.email}
            </p>

            <p>
              <strong>Property Interest:</strong>
              ${body.property_interest}
            </p>
          </div>
        `,
      });

    console.log(
      "Mail sent:",
      info.response
    );

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.log(
      "MAIL ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}