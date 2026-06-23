export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    console.log(
      "Received lead:",
      body
    );

    /* SEND TO ZAPIER */
    try {
      const zapierResponse =
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
        "Zapier Response:",
        zapierResponse.status
      );
    } catch (
      zapierError
    ) {
      console.log(
        "Zapier Error:",
        zapierError
      );
    }

    /* SEND TO SELL.DO CRM */
    try {
      const sellDoUrl =
        `https://app.sell.do/api/leads/create` +
        `?api_key=9ad23347de6535abed9b211d1d2d1065` +
        `&sell_do[form][lead][name]=${encodeURIComponent(body.full_name)}` +
        `&sell_do[form][lead][email]=${encodeURIComponent(body.email)}` +
        `&sell_do[form][lead][phone]=${encodeURIComponent(body.phone)}` +
        `&sell_do[campaign][srd]=6a3a2a885d8defe8d5e07705` +
        `&sell_do[form][content][note]=${encodeURIComponent(
          `
Property Interest: ${body.property_interest || "-"}

Page URL: ${body.page_url || "-"}

UTM Source: ${body.utm_source || "-"}

UTM Medium: ${body.utm_medium || "-"}

UTM Campaign: ${body.utm_campaign || "-"}

UTM Term: ${body.utm_term || "-"}

UTM Content: ${body.utm_content || "-"}
`
        )}`;

      const sellDoResponse =
        await fetch(sellDoUrl, {
          method: "POST",
        });

      console.log(
        "Sell.Do Response:",
        sellDoResponse.status
      );

      const sellDoText =
        await sellDoResponse.text();

      console.log(
        "Sell.Do Body:",
        sellDoText
      );
    } catch (
      sellDoError
    ) {
      console.log(
        "Sell.Do Error:",
        sellDoError
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