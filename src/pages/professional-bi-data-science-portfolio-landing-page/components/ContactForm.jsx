import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ContactForm = ({ currentLanguage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    preferredContact: "email",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Démarrons Votre Projet Ensemble",
      subtitle: "Transformons vos défis data en opportunités de croissance",
      description:
        "Contactez-moi pour discuter de vos besoins en BI, Data Science ou développement. Réponse garantie sous 24h.",
      step1Title: "Informations de Contact",
      step2Title: "Détails du Projet",
      step3Title: "Préférences & Message",
      successTitle: "Message Envoyé avec Succès !",
      successMessage:
        "Merci pour votre intérêt. Je vous recontacterai dans les 24 heures.",
      whatsappText: "Discuter sur WhatsApp",
      emailText: "Envoyer un Email",
      phoneText: "Appeler Directement",
    },
    en: {
      title: "Let's Start Your Project Together",
      subtitle: "Transform your data challenges into growth opportunities",
      description:
        "Contact me to discuss your BI, Data Science or development needs. Guaranteed response within 24h.",
      step1Title: "Contact Information",
      step2Title: "Project Details",
      step3Title: "Preferences & Message",
      successTitle: "Message Sent Successfully!",
      successMessage:
        "Thank you for your interest. I will contact you within 24 hours.",
      whatsappText: "Chat on WhatsApp",
      emailText: "Send Email",
      phoneText: "Call Directly",
    },
    ar: {
      title: "لنبدأ مشروعك معاً",
      subtitle: "حول تحديات البيانات إلى فرص نمو",
      description:
        "اتصل بي لمناقشة احتياجاتك في ذكاء الأعمال أو علوم البيانات أو التطوير. رد مضمون خلال 24 ساعة.",
      step1Title: "معلومات الاتصال",
      step2Title: "تفاصيل المشروع",
      step3Title: "التفضيلات والرسالة",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successMessage: "شكراً لاهتمامك. سأتواصل معك خلال 24 ساعة.",
      whatsappText: "محادثة على واتساب",
      emailText: "إرسال بريد إلكتروني",
      phoneText: "اتصال مباشر",
    },
  };

  const formFields = {
    fr: {
      name: { label: "Nom Complet", placeholder: "Votre nom complet" },
      email: {
        label: "Email Professionnel",
        placeholder: "votre.email@entreprise.com",
      },
      company: { label: "Entreprise", placeholder: "Nom de votre entreprise" },
      phone: { label: "Téléphone", placeholder: "+212 6XX XXX XXX" },
      projectType: {
        label: "Type de Projet",
        options: [
          { value: "", label: "Sélectionnez un type" },
          { value: "bi-dashboard", label: "Tableau de Bord BI" },
          { value: "data-analysis", label: "Analyse de Données" },
          { value: "ml-model", label: "Modèle Machine Learning" },
          { value: "etl-pipeline", label: "Pipeline ETL" },
          { value: "web-app", label: "Application Web" },
          { value: "consulting", label: "Conseil & Formation" },
          { value: "other", label: "Autre" },
        ],
      },
      budget: {
        label: "Budget Estimé",
        options: [
          { value: "", label: "Sélectionnez une fourchette" },
          { value: "5k-15k", label: "5 000 - 15 000 MAD" },
          { value: "15k-30k", label: "15 000 - 30 000 MAD" },
          { value: "30k-50k", label: "30 000 - 50 000 MAD" },
          { value: "50k+", label: "50 000+ MAD" },
          { value: "to-discuss", label: "À discuter" },
        ],
      },
      timeline: {
        label: "Délai Souhaité",
        options: [
          { value: "", label: "Sélectionnez un délai" },
          { value: "urgent", label: "Urgent (< 1 mois)" },
          { value: "1-3months", label: "1-3 mois" },
          { value: "3-6months", label: "3-6 mois" },
          { value: "6months+", label: "6+ mois" },
          { value: "flexible", label: "Flexible" },
        ],
      },
      message: {
        label: "Description du Projet",
        placeholder: "Décrivez votre projet, vos objectifs et vos attentes...",
      },
      preferredContact: {
        label: "Moyen de Contact Préféré",
        options: [
          { value: "email", label: "Email" },
          { value: "phone", label: "Téléphone" },
          { value: "whatsapp", label: "WhatsApp" },
        ],
      },
    },
    en: {
      name: { label: "Full Name", placeholder: "Your full name" },
      email: {
        label: "Professional Email",
        placeholder: "your.email@company.com",
      },
      company: { label: "Company", placeholder: "Your company name" },
      phone: { label: "Phone", placeholder: "+212 6XX XXX XXX" },
      projectType: {
        label: "Project Type",
        options: [
          { value: "", label: "Select a type" },
          { value: "bi-dashboard", label: "BI Dashboard" },
          { value: "data-analysis", label: "Data Analysis" },
          { value: "ml-model", label: "Machine Learning Model" },
          { value: "etl-pipeline", label: "ETL Pipeline" },
          { value: "web-app", label: "Web Application" },
          { value: "consulting", label: "Consulting & Training" },
          { value: "other", label: "Other" },
        ],
      },
      budget: {
        label: "Estimated Budget",
        options: [
          { value: "", label: "Select a range" },
          { value: "5k-15k", label: "5,000 - 15,000 MAD" },
          { value: "15k-30k", label: "15,000 - 30,000 MAD" },
          { value: "30k-50k", label: "30,000 - 50,000 MAD" },
          { value: "50k+", label: "50,000+ MAD" },
          { value: "to-discuss", label: "To discuss" },
        ],
      },
      timeline: {
        label: "Desired Timeline",
        options: [
          { value: "", label: "Select a timeline" },
          { value: "urgent", label: "Urgent (< 1 month)" },
          { value: "1-3months", label: "1-3 months" },
          { value: "3-6months", label: "3-6 months" },
          { value: "6months+", label: "6+ months" },
          { value: "flexible", label: "Flexible" },
        ],
      },
      message: {
        label: "Project Description",
        placeholder: "Describe your project, objectives and expectations...",
      },
      preferredContact: {
        label: "Preferred Contact Method",
        options: [
          { value: "email", label: "Email" },
          { value: "phone", label: "Phone" },
          { value: "whatsapp", label: "WhatsApp" },
        ],
      },
    },
    ar: {
      name: { label: "الاسم الكامل", placeholder: "اسمك الكامل" },
      email: {
        label: "البريد الإلكتروني المهني",
        placeholder: "your.email@company.com",
      },
      company: { label: "الشركة", placeholder: "اسم شركتك" },
      phone: { label: "الهاتف", placeholder: "+212 6XX XXX XXX" },
      projectType: {
        label: "نوع المشروع",
        options: [
          { value: "", label: "اختر نوعاً" },
          { value: "bi-dashboard", label: "لوحة معلومات ذكاء الأعمال" },
          { value: "data-analysis", label: "تحليل البيانات" },
          { value: "ml-model", label: "نموذج التعلم الآلي" },
          { value: "etl-pipeline", label: "خط أنابيب ETL" },
          { value: "web-app", label: "تطبيق ويب" },
          { value: "consulting", label: "الاستشارة والتدريب" },
          { value: "other", label: "أخرى" },
        ],
      },
      budget: {
        label: "الميزانية المقدرة",
        options: [
          { value: "", label: "اختر نطاقاً" },
          { value: "5k-15k", label: "5,000 - 15,000 درهم" },
          { value: "15k-30k", label: "15,000 - 30,000 درهم" },
          { value: "30k-50k", label: "30,000 - 50,000 درهم" },
          { value: "50k+", label: "50,000+ درهم" },
          { value: "to-discuss", label: "للمناقشة" },
        ],
      },
      timeline: {
        label: "الجدول الزمني المرغوب",
        options: [
          { value: "", label: "اختر جدولاً زمنياً" },
          { value: "urgent", label: "عاجل (< شهر واحد)" },
          { value: "1-3months", label: "1-3 أشهر" },
          { value: "3-6months", label: "3-6 أشهر" },
          { value: "6months+", label: "6+ أشهر" },
          { value: "flexible", label: "مرن" },
        ],
      },
      message: {
        label: "وصف المشروع",
        placeholder: "صف مشروعك وأهدافك وتوقعاتك...",
      },
      preferredContact: {
        label: "طريقة الاتصال المفضلة",
        options: [
          { value: "email", label: "البريد الإلكتروني" },
          { value: "phone", label: "الهاتف" },
          { value: "whatsapp", label: "واتساب" },
        ],
      },
    },
  };

  const contactInfo = {
    email: "abdessamad.hnioua@gmail.com",
    phone: "+212 661 234 567",
    whatsapp: "+212661234567",
    location: "Marrakech, Morocco",
    availability: "Lun-Ven 9h-18h",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.name?.trim()) newErrors.name = "Nom requis";
      if (!formData?.email?.trim()) newErrors.email = "Email requis";
      else if (!/\S+@\S+\.\S+/?.test(formData?.email))
        newErrors.email = "Email invalide";
      if (!formData?.phone?.trim()) newErrors.phone = "Téléphone requis";
    }

    if (step === 2) {
      if (!formData?.projectType)
        newErrors.projectType = "Type de projet requis";
      if (!formData?.budget) newErrors.budget = "Budget requis";
      if (!formData?.timeline) newErrors.timeline = "Délai requis";
    }

    if (step === 3) {
      if (!formData?.message?.trim()) newErrors.message = "Description requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        preferredContact: "email",
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    const fields = formFields?.[currentLanguage];

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <Input
              label={fields?.name?.label}
              placeholder={fields?.name?.placeholder}
              value={formData?.name}
              onChange={(e) => handleInputChange("name", e?.target?.value)}
              error={errors?.name}
              required
            />
            <Input
              label={fields?.email?.label}
              type="email"
              placeholder={fields?.email?.placeholder}
              value={formData?.email}
              onChange={(e) => handleInputChange("email", e?.target?.value)}
              error={errors?.email}
              required
            />
            <Input
              label={fields?.company?.label}
              placeholder={fields?.company?.placeholder}
              value={formData?.company}
              onChange={(e) => handleInputChange("company", e?.target?.value)}
            />
            <Input
              label={fields?.phone?.label}
              type="tel"
              placeholder={fields?.phone?.placeholder}
              value={formData?.phone}
              onChange={(e) => handleInputChange("phone", e?.target?.value)}
              error={errors?.phone}
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {fields?.projectType?.label} *
              </label>
              <select
                value={formData?.projectType}
                onChange={(e) =>
                  handleInputChange("projectType", e?.target?.value)
                }
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent portfolio-transition ${
                  errors?.projectType ? "border-red-300" : "border-slate-300"
                }`}
              >
                {fields?.projectType?.options?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              {errors?.projectType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.projectType}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {fields?.budget?.label} *
              </label>
              <select
                value={formData?.budget}
                onChange={(e) => handleInputChange("budget", e?.target?.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent portfolio-transition ${
                  errors?.budget ? "border-red-300" : "border-slate-300"
                }`}
              >
                {fields?.budget?.options?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              {errors?.budget && (
                <p className="text-red-500 text-sm mt-1">{errors?.budget}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {fields?.timeline?.label} *
              </label>
              <select
                value={formData?.timeline}
                onChange={(e) =>
                  handleInputChange("timeline", e?.target?.value)
                }
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent portfolio-transition ${
                  errors?.timeline ? "border-red-300" : "border-slate-300"
                }`}
              >
                {fields?.timeline?.options?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              {errors?.timeline && (
                <p className="text-red-500 text-sm mt-1">{errors?.timeline}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {fields?.preferredContact?.label}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {fields?.preferredContact?.options?.map((option) => (
                  <label
                    key={option?.value}
                    className={`
                      flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer portfolio-transition
                      ${
                        formData?.preferredContact === option?.value
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-slate-200 hover:border-slate-300"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option?.value}
                      checked={formData?.preferredContact === option?.value}
                      onChange={(e) =>
                        handleInputChange("preferredContact", e?.target?.value)
                      }
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{option?.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {fields?.message?.label} *
              </label>
              <textarea
                rows={6}
                placeholder={fields?.message?.placeholder}
                value={formData?.message}
                onChange={(e) => handleInputChange("message", e?.target?.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent portfolio-transition resize-none ${
                  errors?.message ? "border-red-300" : "border-slate-300"
                }`}
              />
              {errors?.message && (
                <p className="text-red-500 text-sm mt-1">{errors?.message}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {content?.[currentLanguage]?.title}
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            {content?.[currentLanguage]?.subtitle}
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {content?.[currentLanguage]?.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {currentLanguage === "fr"
                  ? "Informations de Contact"
                  : currentLanguage === "en"
                  ? "Contact Information"
                  : "معلومات الاتصال"}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80 text-sm">
                      {contactInfo?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">
                      {currentLanguage === "fr"
                        ? "Téléphone"
                        : currentLanguage === "en"
                        ? "Phone"
                        : "الهاتف"}
                    </p>
                    <p className="text-white/80 text-sm">
                      {contactInfo?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">
                      {currentLanguage === "fr"
                        ? "Localisation"
                        : currentLanguage === "en"
                        ? "Location"
                        : "الموقع"}
                    </p>
                    <p className="text-white/80 text-sm">
                      {contactInfo?.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">
                      {currentLanguage === "fr"
                        ? "Disponibilité"
                        : currentLanguage === "en"
                        ? "Availability"
                        : "التوفر"}
                    </p>
                    <p className="text-white/80 text-sm">
                      {contactInfo?.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={`https://wa.me/${contactInfo?.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 portfolio-transition"
                >
                  <Icon name="MessageCircle" size={18} />
                  <span className="font-medium">
                    {content?.[currentLanguage]?.whatsappText}
                  </span>
                </a>

                <a
                  href={`mailto:${contactInfo?.email}`}
                  className="flex items-center justify-center space-x-3 w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 portfolio-transition"
                >
                  <Icon name="Mail" size={18} />
                  <span className="font-medium">
                    {content?.[currentLanguage]?.emailText}
                  </span>
                </a>

                <a
                  href={`tel:${contactInfo?.phone}`}
                  className="flex items-center justify-center space-x-3 w-full bg-white/20 hover:bg-white/30 rounded-xl py-3 portfolio-transition"
                >
                  <Icon name="Phone" size={18} />
                  <span className="font-medium">
                    {content?.[currentLanguage]?.phoneText}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-slate-50 rounded-3xl p-8">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon
                        name="CheckCircle"
                        size={40}
                        className="text-green-600"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {content?.[currentLanguage]?.successTitle}
                    </h3>
                    <p className="text-slate-600 mb-8">
                      {content?.[currentLanguage]?.successMessage}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setShowSuccess(false)}
                    >
                      {currentLanguage === "fr"
                        ? "Envoyer un autre message"
                        : currentLanguage === "en"
                        ? "Send another message"
                        : "إرسال رسالة أخرى"}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Progress Bar */}
                    <div className="flex items-center justify-between mb-8">
                      {[1, 2, 3]?.map((step) => (
                        <React.Fragment key={step}>
                          <div className="flex items-center">
                            <div
                              className={`
                              w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                              ${
                                currentStep >= step
                                  ? "bg-primary text-white"
                                  : "bg-slate-200 text-slate-500"
                              }
                            `}
                            >
                              {step}
                            </div>
                            <div className="ml-3 hidden sm:block">
                              <p
                                className={`text-sm font-medium ${
                                  currentStep >= step
                                    ? "text-primary"
                                    : "text-slate-500"
                                }`}
                              >
                                {step === 1
                                  ? content?.[currentLanguage]?.step1Title
                                  : step === 2
                                  ? content?.[currentLanguage]?.step2Title
                                  : content?.[currentLanguage]?.step3Title}
                              </p>
                            </div>
                          </div>
                          {step < 3 && (
                            <div
                              className={`flex-1 h-1 mx-4 rounded-full ${
                                currentStep > step
                                  ? "bg-primary"
                                  : "bg-slate-200"
                              }`}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Form Content */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {renderStepContent()}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? "invisible" : ""}
                      >
                        {currentLanguage === "fr"
                          ? "Précédent"
                          : currentLanguage === "en"
                          ? "Previous"
                          : "السابق"}
                      </Button>

                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          iconName="ArrowRight"
                          iconPosition="right"
                        >
                          {currentLanguage === "fr"
                            ? "Suivant"
                            : currentLanguage === "en"
                            ? "Next"
                            : "التالي"}
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          iconName={isSubmitting ? "Loader2" : "Send"}
                          iconPosition="right"
                          className={isSubmitting ? "animate-pulse" : ""}
                        >
                          {isSubmitting
                            ? currentLanguage === "fr"
                              ? "Envoi..."
                              : currentLanguage === "en"
                              ? "Sending..."
                              : "جاري الإرسال..."
                            : currentLanguage === "fr"
                            ? "Envoyer le Message"
                            : currentLanguage === "en"
                            ? "Send Message"
                            : "إرسال الرسالة"}
                        </Button>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
