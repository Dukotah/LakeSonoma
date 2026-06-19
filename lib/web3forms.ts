/**
 * Web3Forms integration — the marina's contact + Read On Sonoma forms POST here
 * and Web3Forms emails the submission to staff@lakesonoma.com. It needs a single
 * public access key (safe to expose) set as NEXT_PUBLIC_WEB3FORMS_KEY.
 *
 * Get a key (free): https://web3forms.com → enter staff@lakesonoma.com → copy the
 * Access Key → set it in Vercel (Project → Settings → Environment Variables) and
 * in .env.local for local dev. No account/dashboard required.
 *
 * If the key is absent, forms degrade gracefully to a "call/email us" message.
 */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
export const WEB3FORMS_ENABLED = WEB3FORMS_KEY.length > 0;

export type SubmitState = "idle" | "submitting" | "success" | "error";

/** POST a payload to Web3Forms. Returns true on success. */
export async function submitToWeb3Forms(
  payload: Record<string, unknown>,
): Promise<boolean> {
  if (!WEB3FORMS_ENABLED) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}
