// === COSMOS NAVIGATOR LITE ENGINE ===
// Generates universe objects using Omniscientrix laws

async function runCosmos() {
  const input = document.getElementById("prompt").value;
  const out = document.getElementById("output");
  out.innerHTML = "Generating...\n";

  const prompt = `
You are the Omniscientrix Universe Engine.
Generate a fully structured cosmic object based on this request:

"${input}"

Rules:
- Use real physics where possible.
- Use Omniscientrix laws (δJ = 0, informational curvature, awareness-energy, etc.)
- Output structured JSON.
- Include properties: name, class, physics, habitability, atmosphere, life_index, summary.
`;

  // --- AI CALL (Gemini-ready, OpenAI-ready, fallback-ready) ---
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Authorization":"Bearer " + (window.OPENAI_KEY || "AIzaSyDKr3It-6N2bgQiEwkQkuZ3oA7FB1q-0Mw")
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages:[{role:"user", content:prompt}],
        temperature:0.8
      })
    });

    const data = await response.json();
    out.innerHTML = JSON.stringify(data.choices[0].message.content, null, 2);

  } catch (err) {
    out.innerHTML = "Error:\n" + err;
  }
}
