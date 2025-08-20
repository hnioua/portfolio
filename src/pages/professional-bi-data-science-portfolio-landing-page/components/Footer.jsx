import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Footer = ({ currentLanguage }) => {
  const content = {
    fr: {
      tagline: 'Transformons vos données en avantages concurrentiels',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      contact: 'Contact',
      followMe: 'Suivez-moi',
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec',
      location: 'Marrakech, Maroc'
    },
    en: {
      tagline: 'Transform your data into competitive advantages',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      followMe: 'Follow Me',
      rights: 'All rights reserved',
      madeWith: 'Made with',
      location: 'Marrakech, Morocco'
    },
    ar: {
      tagline: 'حول بياناتك إلى مزايا تنافسية',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'اتصل',
      followMe: 'تابعني',
      rights: 'جميع الحقوق محفوظة',
      madeWith: 'صنع بـ',
      location: 'مراكش، المغرب'
    }
  };

  const quickLinks = {
    fr: [
      { name: 'Accueil', href: '#accueil' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Expérience', href: '#experience' },
      { name: 'Projets', href: '#projets' },
      { name: 'Contact', href: '#contact' }
    ],
    en: [
      { name: 'Home', href: '#accueil' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projets' },
      { name: 'Contact', href: '#contact' }
    ],
    ar: [
      { name: 'الرئيسية', href: '#accueil' },
      { name: 'الخبرة', href: '#expertise' },
      { name: 'التجربة', href: '#experience' },
      { name: 'المشاريع', href: '#projets' },
      { name: 'اتصل', href: '#contact' }
    ]
  };

  const services = {
    fr: [
      'Business Intelligence',
      'Data Science & ML',
      'Développement Web',
      'Conseil & Formation',
      'Analyse de Données'
    ],
    en: [
      'Business Intelligence',
      'Data Science & ML',
      'Web Development',
      'Consulting & Training',
      'Data Analysis'
    ],
    ar: [
      'ذكاء الأعمال',
      'علوم البيانات والتعلم الآلي',
      'تطوير الويب',
      'الاستشارة والتدريب',
      'تحليل البيانات'
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/in/abdessamad-hnioua', color: 'text-blue-600' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/abdessamad-hnioua', color: 'text-slate-800' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/abdessamad_h', color: 'text-blue-400' },
    { name: 'Email', icon: 'Mail', href: 'mailto:abdessamad.hnioua@gmail.com', color: 'text-red-500' }
  ];

  const contactInfo = {
    email: 'abdessamad.hnioua@gmail.com',
    phone: '+212 661 234 567',
    location: content?.[currentLanguage]?.location
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Abdessamad Hnioua</h3>
                  <p className="text-slate-400 text-sm">BI & Data Science Expert</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                {content?.[currentLanguage]?.tagline}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <motion.a
                    key={social?.name}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 portfolio-transition group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon name={social?.icon} size={18} className={`${social?.color} group-hover:scale-110 portfolio-transition`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">{content?.[currentLanguage]?.quickLinks}</h4>
              <ul className="space-y-3">
                {quickLinks?.[currentLanguage]?.map((link) => (
                  <li key={link?.name}>
                    <button
                      onClick={() => scrollToSection(link?.href)}
                      className="text-slate-300 hover:text-white portfolio-transition flex items-center space-x-2 group"
                    >
                      <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 portfolio-transition" />
                      <span>{link?.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">{content?.[currentLanguage]?.services}</h4>
              <ul className="space-y-3">
                {services?.[currentLanguage]?.map((service) => (
                  <li key={service} className="text-slate-300 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">{content?.[currentLanguage]?.contact}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={16} className="text-primary" />
                  </div>
                  <a
                    href={`mailto:${contactInfo?.email}`}
                    className="text-slate-300 hover:text-white portfolio-transition"
                  >
                    {contactInfo?.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={16} className="text-primary" />
                  </div>
                  <a
                    href={`tel:${contactInfo?.phone}`}
                    className="text-slate-300 hover:text-white portfolio-transition"
                  >
                    {contactInfo?.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-primary" />
                  </div>
                  <span className="text-slate-300">{contactInfo?.location}</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="mt-6 w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg portfolio-transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentLanguage === 'fr' ? 'Démarrer un Projet' :
                 currentLanguage === 'en' ? 'Start a Project' : 'ابدأ مشروعاً'}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2024 Abdessamad Hnioua.</span>
              <span>{content?.[currentLanguage]?.rights}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>{content?.[currentLanguage]?.madeWith}</span>
              <Icon name="Heart" size={16} className="text-red-500 animate-pulse" />
              <span>
                {currentLanguage === 'fr' ? 'au Maroc' :
                 currentLanguage === 'en' ? 'in Morocco' : 'في المغرب'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl portfolio-transition z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;