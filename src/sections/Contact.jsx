import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { personalInfo, mySocials } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS keys are configured in environment variables, dispatch via EmailJS
    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            to_name: personalInfo.displayName,
            from_email: formData.email,
            to_email: personalInfo.email,
            subject: formData.subject || "Portfolio Contact Message",
            message: formData.message,
          },
          publicKey
        );
        setIsLoading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        showAlertMessage("success", "Your message has been sent successfully!");
      } catch (error) {
        setIsLoading(false);
        console.error("EmailJS Error:", error);
        showAlertMessage("danger", "Failed to send message via email service. Opening mail client fallback.");
        openMailClient();
      }
    } else {
      // Direct mailto fallback ensuring no fake success message is shown
      setIsLoading(false);
      openMailClient();
      showAlertMessage(
        "success",
        "Opening your default email client to send your message directly to Ajay Tandale."
      );
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative flex flex-col items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={70}
        ease={80}
        color={"#38bdf8"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="w-full max-w-4xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          Direct Communication
        </div>
        <h2 className="text-heading">Get In Touch</h2>
        <p className="subtext mt-2 max-w-xl mx-auto">
          Have an opportunity in cloud engineering, Linux administration, or container infrastructure? Let&apos;s connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl mx-auto">
        {/* Direct Contact Links & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-storm/40 to-midnight/80">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Feel free to reach out via email, review my code repositories on GitHub, or verify my Red Hat credentials on Credly.
            </p>

            <div className="space-y-3">
              {mySocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                    <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">{social.name}</span>
                    <span className="text-sm font-medium text-white group-hover:text-cyan-300 transition">
                      {social.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <span className="text-xs text-neutral-500 font-mono block">PRIMARY CONTACT EMAIL</span>
            <span className="text-sm text-cyan-400 font-mono select-all font-semibold">
              {personalInfo.email}
            </span>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/10 bg-primary/80 backdrop-blur-md">
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="field-label">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input field-input-focus"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="field-label">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input field-input-focus"
                  placeholder="you@company.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="field-input field-input-focus"
                placeholder="Cloud Engineering / Internship Opportunity"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Describe the role, project, or technical topic you'd like to discuss..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/25 transition duration-200 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Preparing..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
