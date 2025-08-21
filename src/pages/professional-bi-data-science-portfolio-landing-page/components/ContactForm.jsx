import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ContactForm = ({ currentLanguage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Contactez-moi",
      description: "Envoyez-moi un message et je vous répondrai sous 24h.",
      successTitle: "Message Envoyé !",
      successMessage: "Merci pour votre message. Je vous contacterai bientôt.",
      submit: "Envoyer",
    },
    en: {
      title: "Contact Me",
      description: "Send me a message and I will reply within 24h.",
      successTitle: "Message Sent!",
      successMessage: "Thank you for your message. I will contact you soon.",
      submit: "Send",
    },
    ar: {
      title: "اتصل بي",
      description: "أرسل لي رسالة وسأرد عليك خلال 24 ساعة.",
      successTitle: "تم إرسال الرسالة!",
      successMessage: "شكراً لرسالتك. سأتواصل معك قريباً.",
      submit: "إرسال",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis";
    if (!formData.email.trim()) newErrors.email = "Email requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.message.trim()) newErrors.message = "Message requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      {/* Form Container */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
          {content[currentLanguage].title}
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          {content[currentLanguage].description}
        </p>

        <AnimatePresence>
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-green-400">
                {content[currentLanguage].successTitle}
              </h3>
              <p className="text-gray-300">
                {content[currentLanguage].successMessage}
              </p>
              <Button
                className="mt-6 bg-green-500 hover:bg-green-600"
                onClick={() => setShowSuccess(false)}
              >
                {content[currentLanguage].submit}
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <Input
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                error={errors.name}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={errors.email}
              />
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none bg-gray-900 text-white ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                iconName={isSubmitting ? "Loader2" : "Send"}
                iconPosition="right"
                className={`w-full bg-green-500 hover:bg-green-600 ${
                  isSubmitting ? "animate-pulse" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : content[currentLanguage].submit}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ContactForm;
