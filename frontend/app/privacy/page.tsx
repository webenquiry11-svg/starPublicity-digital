"use client";

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Globe, 
  Server, 
  Mail, 
  MapPin, 
  ChevronRight,
  Clock 
} from 'lucide-react';

// --- FONTS ---
const fontHeading = "font-serif"; 
const fontBody = "font-sans";    

// --- DATA STRUCTURE ---
const policyData = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: Globe,
    content: [
      "Star Publicity operates the website https://starpublicity.org/. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website and utilise our services."
    ]
  },
  {
    id: "information-collection",
    title: "2. Information We Collect",
    icon: FileText,
    content: ["We may collect the following types of information:"],
    list: [
      "Personal information you provide, such as your name, email address, phone number, company name, and project details, is collected when you fill out forms, request a quote, or contact us.",
      "Technical data such as IP address, browser type, device information, pages visited, and time spent on pages is collected through cookies and similar technologies.",
      "Any other information you voluntarily choose to provide."
    ]
  },
  {
    id: "usage",
    title: "3. How We Use Your Information",
    icon: Server,
    content: ["We use the information we collect to:"],
    list: [
      "Provide, operate, and maintain our website and services.",
      "Respond to your enquiries, project requests, and support needs.",
      "Personalise your experience and improve our content and offerings.",
      "Send you updates, marketing communications, or promotional materials, which you can opt out of at any time.",
      "Analyse site usage and performance for security, analytics, and optimisation.",
      "Comply with legal obligations and protect our legal rights."
    ]
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking Technologies",
    icon: Eye,
    content: [
      "We use cookies and similar technologies to:",
    ],
    list: [
      "Enable core site functionality and security.",
      "Remember your preferences and improve user experience.",
      "Analyse traffic and usage patterns to enhance our services."
    ],
    footer: "You can control or disable cookies in your browser settings, but some website features may not function properly if you do."
  },
  {
    id: "sharing",
    title: "5. How We Share Your Information",
    icon: Shield,
    content: [
      "We do not sell your personal information. We may share information with:"
    ],
    list: [
      "Trusted service providers, such as hosting, analytics, email, or payment partners, that process data on our behalf and are bound by confidentiality obligations.",
      "Professional advisors, such as legal or accounting firms, are used where reasonably necessary.",
      "Authorities or third parties, when required by law, court order, or to protect our rights, property, or safety."
    ]
  },
  {
    id: "security",
    title: "6. Data Security",
    icon: Lock,
    content: [
      "We implement reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
    ]
  },
  {
    id: "retention",
    title: "7. Data Retention",
    icon: Clock,
    content: [
      "We retain personal information only for as long as necessary to fulfil the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will delete or anonymize it."
    ]
  },
  {
    id: "rights",
    title: "8. Your Rights",
    icon: Shield,
    content: ["Depending on your location and applicable law, you may have the right to:"],
    list: [
      "Access the personal information we hold about you.",
      "Request correction or update of inaccurate or incomplete data.",
      "Request deletion of your personal information, subject to legal obligations.",
      "Object to or restrict certain processing activities.",
      "Withdraw consent where processing is based on consent."
    ],
    footer: "To exercise these rights, please contact us using the details below."
  },
  {
    id: "links",
    title: "9. Third-Party Links",
    icon: Globe,
    content: [
      "Our website may contain links to third-party websites or services that are not operated or controlled by us. We are not responsible for the content, privacy practices, or policies of those third parties. You should review their privacy policies before providing any information."
    ]
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    icon: FileText,
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date. Your continued use of the website after changes are posted constitutes acceptance of the revised policy."
    ]
  },
  {
    id: "contact",
    title: "11. Contact Us",
    icon: Mail,
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at:"
    ],
    contactDetails: {
      email: "support@starpublicity.org",
      address: "SCO-137, Feroze Gandhi Market, Ludhiana, Punjab, India, 141001"
    }
  }
];

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState("");

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = policyData.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 ${fontBody} text-slate-800`}>
      
      {/* --- HEADER BANNER --- */}
      <div className="bg-[#256482] text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
                <Shield size={14} className="text-cyan-300" />
                <span>Legal & Compliance</span>
            </div>
            <h1 className={`${fontHeading} text-4xl md:text-6xl font-bold mb-6`}>Privacy Policy</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                We value your trust and are committed to protecting your personal information.
            </p>
            <div className="inline-block bg-[#1e536d] px-6 py-2 rounded-lg text-sm font-medium border border-white/10">
                Last Updated: <span className="text-cyan-300">May 21, 2024</span>
            </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- SIDEBAR NAVIGATION (Desktop) --- */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 overflow-hidden">
              <h3 className={`${fontHeading} text-xl font-bold mb-6 text-[#256482]`}>Table of Contents</h3>
              <nav className="flex flex-col space-y-1">
                {policyData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-between group ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-[#256482] font-semibold' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                    }`}
                  >
                    <span className="truncate mr-2">{item.title}</span>
                    {activeSection === item.id && <ChevronRight size={14} />}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">Have questions?</p>
                <a href="mailto:support@starpublicity.org" className="text-sm font-medium text-[#256482] hover:text-cyan-600 transition-colors flex items-center gap-2">
                    <Mail size={16} /> support@starpublicity.org
                </a>
              </div>
            </div>
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
              
              {policyData.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-32 ${index !== policyData.length - 1 ? 'mb-16 border-b border-slate-100 pb-16' : ''}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#256482]">
                        <section.icon size={20} />
                    </div>
                    <h2 className={`${fontHeading} text-2xl md:text-3xl font-bold text-slate-900`}>
                      {section.title}
                    </h2>
                  </div>

                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-slate-600 leading-8 mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="mt-4 mb-6 space-y-3">
                      {section.list.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 leading-7">
                          <div className="min-w-[6px] h-[6px] rounded-full bg-cyan-500 mt-2.5"></div>
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="text-slate-600 leading-8 italic bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-400">
                      {section.footer}
                    </p>
                  )}

                  {section.contactDetails && (
                    <div className="mt-8 grid md:grid-cols-2 gap-4">
                        <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200 hover:border-cyan-200 transition-colors group">
                            <div className="flex items-center gap-3 mb-2">
                                <Mail className="text-cyan-600" size={20} />
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Us</span>
                            </div>
                            <a href={`mailto:${section.contactDetails.email}`} className="text-lg font-medium text-[#256482] group-hover:underline">
                                {section.contactDetails.email}
                            </a>
                        </div>
                        <div className="p-6 bg-[#f8fafc] rounded-xl border border-slate-200 hover:border-cyan-200 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin className="text-cyan-600" size={20} />
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Visit Us</span>
                            </div>
                            <p className="text-slate-700 font-medium">
                                {section.contactDetails.address}
                            </p>
                        </div>
                    </div>
                  )}

                </div>
              ))}

              <div className="mt-12 p-6 bg-blue-50/50 rounded-xl text-center">
                  <p className="text-slate-500 text-sm">
                      © {new Date().getFullYear()} Star Publicity. All rights reserved.
                  </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;