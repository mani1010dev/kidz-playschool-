import { useState } from "react";
import { SectionWrap } from "@/components/Decor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Check, PartyPopper } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const steps = ["Child", "Parent", "Program", "Done"];

export const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [confetti, setConfetti] = useState<{ x: number; c: string; d: number }[]>([]);
  const [data, setData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    program: "",
    branch: "",
  });

  const upd = (k: string, v: string) => setData({ ...data, [k]: v });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setDone(true);
    // WhatsApp redirection
    const phoneNumber = "919176111302";
    const message = `Hello Kidz playschool! I'm interested in enrolling my child.

*Enquiry Details:*
Child Name: ${data.childName}
Child Age: ${data.childAge}
Parent Name: ${data.parentName}
Phone: ${data.parentPhone}
Email: ${data.parentEmail}
Program: ${data.program}

Please reach out with more information.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Confetti burst
    const colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--mint))", "hsl(var(--lavender))", "hsl(var(--sunny))"];
    setConfetti(Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      c: colors[Math.floor(Math.random() * colors.length)],
      d: Math.random() * 0.6,
    })));
    toast({ title: "🎉 Sent to WhatsApp!", description: "We'll chat with you there!" });
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <SectionWrap id="contact" className="bg-background">
      <div className="blob bg-secondary-soft w-[400px] h-[400px] top-0 left-0" />
      <div className="blob bg-mint-soft w-[300px] h-[300px] bottom-0 right-0" />

      <div className="container relative max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="pill bg-sunny-soft text-sunny-foreground mb-4">✨ Start Today</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Begin your child's <span className="bg-gradient-cta bg-clip-text text-transparent">journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">A quick 4-step admission inquiry. We'll handle the rest.</p>
        </div>

        <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-lift border border-border/50 overflow-hidden">
          {/* Confetti */}
          {confetti.map((c, i) => (
            <span
              key={i}
              className="absolute top-0 w-2 h-3 rounded-sm animate-fade-in-up"
              style={{
                left: `${c.x}%`,
                backgroundColor: c.c,
                animation: `fade-in-up 1.5s ease-out ${c.d}s forwards, float 2s ease-in-out ${c.d}s infinite`,
              }}
            />
          ))}

          {!done && (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-semibold mb-2">
                  {steps.map((s, i) => (
                    <span key={s} className={i <= step ? "text-primary" : "text-muted-foreground"}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-cta transition-all duration-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-5 min-h-[260px]">
                {step === 0 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold mb-3">Tell us about your little one 🧒</h3>
                    <div>
                      <Label>Child's name</Label>
                      <Input value={data.childName} onChange={(e) => upd("childName", e.target.value)} placeholder="e.g. Aarav" />
                    </div>
                    <div>
                      <Label>Age</Label>
                      <Input value={data.childAge} onChange={(e) => upd("childAge", e.target.value)} placeholder="e.g. 3 years" />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold mb-3">How can we reach you? 📞</h3>
                    <div>
                      <Label>Parent name</Label>
                      <Input value={data.parentName} onChange={(e) => upd("parentName", e.target.value)} placeholder="Full name" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Email</Label>
                        <Input type="email" value={data.parentEmail} onChange={(e) => upd("parentEmail", e.target.value)} placeholder="you@email.com" />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input value={data.parentPhone} onChange={(e) => upd("parentPhone", e.target.value)} placeholder="+91" />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold mb-3">Pick a program 🌈</h3>
                    <div>
                      <Label>Program</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {["Toddler", "Nursery", "LKG", "UKG"].map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => upd("program", p)}
                            className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                              data.program === p
                                ? "bg-primary text-primary-foreground border-primary scale-105"
                                : "bg-card border-border hover:border-primary/50"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 animate-fade-in text-center py-4">
                    <h3 className="text-xl font-bold">Almost there! 🎉</h3>
                    <p className="text-muted-foreground">
                      You're enrolling <span className="font-bold text-foreground">{data.childName || "your child"}</span> in our{" "}
                      <span className="font-bold text-primary">{data.program || "program"}</span>{" "}
                      at <span className="font-bold text-secondary-foreground">Kidz playschool</span>.
                    </p>
                    <p className="text-sm text-muted-foreground">Click submit and we'll call you within 24 hours.</p>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={prev} disabled={step === 0}>
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                {step < steps.length - 1 ? (
                  <Button variant="hero" onClick={next}>
                    Next <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button variant="hero" onClick={submit}>
                    Submit <Check className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </>
          )}

          {done && (
            <div className="text-center py-12 animate-scale-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-cta flex items-center justify-center mb-5 animate-bounce-soft">
                <PartyPopper className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3">You're all set!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you, {data.parentName || "friend"}! We've received your inquiry and will reach out within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrap>
  );
};
