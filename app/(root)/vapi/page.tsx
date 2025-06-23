"use client";
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web"; // ✅ Correct import

export default function VapiHealthCheck() {
  const [status, setStatus] = useState<
    "idle" | "checking" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkVapi = async () => {
      setStatus("checking");

      const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;
      const apiKey = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;

      if (!workflowId || !apiKey) {
        setStatus("error");
        setMessage("Missing API key or workflow ID in .env.local");
        return;
      }

      const vapi = new Vapi({ apiKey }); // ✅ Works now

      try {
        await vapi.start(workflowId, {
          variableValues: {
            userName: "HealthCheck",
            userId: "healthcheck-user",
          },
        });

        setStatus("success");
        setMessage("✅ Vapi Workflow is working!");
      } catch (err: any) {
        setStatus("error");
        setMessage(`❌ Error: ${err?.message || "Unknown failure"}`);
        console.error(err);
      }
    };

    checkVapi();
  }, []);

  return (
    <main className="p-10 font-mono">
      <h1 className="text-2xl mb-4">Vapi Workflow Health Check</h1>
      {status === "checking" && <p>🔄 Checking...</p>}
      {status !== "checking" && <p>{message}</p>}
    </main>
  );
}
