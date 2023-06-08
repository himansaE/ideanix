import fetch from "node-fetch";

const NEXT_PUBLIC_RECAPTCHA_SEC_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SEC_KEY;

interface RECAPTCHA_RES {
  success: boolean;
  hostname: string;
  "error-codes": string[];
}

export const verifyRecaptchaToken = async (token: string, ip: string) => {
  try {
    const body = {
      secret: NEXT_PUBLIC_RECAPTCHA_SEC_KEY,
      response: token,
    };
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_RECAPTCHA_SEC_KEY}&response=${token}&remoteip=${ip}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(body),
      }
    );

    const data = (await response.json()) as RECAPTCHA_RES;
    if (data.success)
      return {
        error: false,
      };
    else
      return {
        error: true,
        err_text:
          "timeout-or-duplicate" in data["error-codes"]
            ? "The response is no longer valid: either is too old or has been used previously."
            : "reCAPTCHA failed. Try again.",
      };
  } catch {
    return {
      error: true,
    };
  }
};
