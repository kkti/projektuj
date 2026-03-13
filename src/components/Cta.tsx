import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const WEB3FORMS_ACCESS_KEY = "7db07c66-cb20-4ecc-82e7-5154bc7b4b98";
const EMAIL_SUBJECT = "Nová poptávka z projektuj.cz";
const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

const INITIAL_STATE: SubmitState = {
  type: "idle",
  message: "",
};

export default function Cta() {
  const [submitState, setSubmitState] = useState<SubmitState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState(INITIAL_STATE);

    if (!captchaToken) {
      setSubmitState({
        type: "error",
        message: "Potvrďte prosím bezpečnostní ověření hCaptcha.",
      });
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", EMAIL_SUBJECT);
    formData.append("from_name", "projektuj.cz");
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (response.ok && data.success) {
        form.reset();
        captchaRef.current?.resetCaptcha();
        setCaptchaToken("");
        setSubmitState({
          type: "success",
          message: "Poptávka byla odeslána. Ozvu se co nejdříve.",
        });
        return;
      }

      setSubmitState({
        type: "error",
        message: data.message || "Odeslání se nepodařilo. Zkuste to prosím znovu.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Odeslání se nepodařilo. Zkuste to prosím znovu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="poptavka"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,var(--color-brand-700),var(--color-brand-900))]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-[40rem] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            <h2 className="text-3xl font-bold">
              Máte záměr? Pojďme jej připravit.
            </h2>
            <p className="mt-3 max-w-[34rem]">
              Pošlete nám podklady a stručné zadání. Ozveme se s návrhem
              postupu.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5">
              <li>Konzultace zdarma</li>
              <li>Ozvu se zpravidla do 24 hodin.</li>
              <li>Transparentní proces krok za krokem</li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full rounded-2xl border border-white/10 bg-white p-6 shadow-sm"
            noValidate
          >
            <input
              type="hidden"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm" htmlFor="name">
                Jméno
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="Jan Novák"
                />
              </label>
              <label className="text-sm" htmlFor="email">
                E-mail
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={160}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="jan@firma.cz"
                />
              </label>
              <label
                className="text-sm sm:col-span-2"
                htmlFor="project-description"
              >
                Popis záměru
                <textarea
                  id="project-description"
                  name="message"
                  rows={4}
                  required
                  maxLength={3000}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none transition focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(111,152,185,0.18)]"
                  placeholder="Krátce popište projekt..."
                />
              </label>

              <div className="sm:col-span-2">
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITE_KEY}
                  reCaptchaCompat={false}
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                  onError={() => {
                    setCaptchaToken("");
                    setSubmitState({
                      type: "error",
                      message:
                        "Bezpečnostní ověření se nepodařilo načíst. Zkuste to prosím znovu.",
                    });
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-[var(--color-brand-600)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--color-brand-700)] disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
              >
                {isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
              </button>
            </div>

            {submitState.type !== "idle" ? (
              <p
                className={`mt-4 text-sm ${
                  submitState.type === "success"
                    ? "text-emerald-700"
                    : "text-red-600"
                }`}
              >
                {submitState.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
