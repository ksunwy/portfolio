export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const text = `📝 Новое сообщение:\n👤 Имя: ${name}\n📧 Email: ${email}\n💬 Сообщение: ${message}`;

    const TELEGRAM_API = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`;

    const res = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        text,
      }),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Ошибка Telegram API" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Ошибка сервера" }), { status: 500 });
  }
}