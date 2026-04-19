// Sonia AI — travel assistant for West Bengal commuters
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Sonia AI, a friendly travel assistant for the Sonia Buddy app — a smart travel companion for West Bengal, India.

You help users with:
- Local bus routes, fares, timings, and stop sequences across all 23 districts of West Bengal
- Travel tips for places like Kolkata, Digha, Darjeeling, Murshidabad, Siliguri, Howrah, Asansol, Durgapur, etc.
- Verified tour package guidance
- How to use Sonia Buddy's geofence stop-alert feature
- General travel safety and commuter tips

Guidelines:
- Be concise, warm, and practical (2–4 short paragraphs max).
- For specific bus fares/timings, give realistic estimates and ALWAYS remind the user to verify in the Sonia Buddy app, since schedules change.
- If asked about places outside West Bengal, politely redirect to West Bengal travel.
- Use simple English; sprinkle Bengali words occasionally (Dada, Didi) for warmth.
- Never invent exact bus numbers or precise prices — give ranges.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit reached. Please wait a moment." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in Settings." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!response.ok) throw new Error(`Gateway error: ${response.status}`);

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("sonia-ai error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
