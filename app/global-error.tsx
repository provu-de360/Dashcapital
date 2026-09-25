"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global fatal error:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Error | Dash Capital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #07192f;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 24px;
            text-align: center;
          }
          .box {
            background: #0b2545;
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 16px;
            padding: 44px 32px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }
          .icon {
            font-size: 40px;
            margin-bottom: 16px;
          }
          h1 { font-size: 1.8rem; margin-bottom: 12px; color: #ffffff; }
          p { color: #94a3b8; font-size: 1rem; line-height: 1.6; margin-bottom: 28px; }
          .btn {
            display: inline-block;
            background: #c9932e;
            color: #ffffff;
            font-weight: 600;
            padding: 12px 28px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-size: 1rem;
            transition: opacity 0.2s;
          }
          .btn:hover { opacity: 0.9; }
        `}</style>
      </head>
      <body>
        <div className="box">
          <div className="icon">⚠️</div>
          <h1>Something went wrong</h1>
          <p>
            An unexpected error occurred. Please click below to reload the
            application.
          </p>
          <button className="btn" onClick={() => reset()}>
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
