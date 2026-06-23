export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    console.log(
      "Received lead:",
      body
    );

    /* SEND TO MAKE.COM */
    try {
      const makeResponse =
        await fetch(
          "https://hooks.zapier.com/hooks/catch/27397666/43atgpo/",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              full_name:
                body.full_name,

              phone:
                body.phone,

              email:
                body.email,

              property_interest:
                body.property_interest,

              page_url:
                body.page_url,

              utm_source:
                body.utm_source,

              utm_medium:
                body.utm_medium,

              utm_campaign:
                body.utm_campaign,

              utm_term:
                body.utm_term,

              utm_content:
                body.utm_content,

              submitted_at:
                new Date().toISOString(),
            }),
          }
        );

      console.log(
        "Make Response:",
        makeResponse.status
      );

      const responseText =
        await makeResponse.text();

      console.log(
        "Make Response Body:",
        responseText
      );
    } catch (
      makeError
    ) {
      console.log(
        "Make Error:",
        makeError
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.log(
      "API ERROR:",
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