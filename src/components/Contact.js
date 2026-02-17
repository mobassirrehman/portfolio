"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="section-container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-500">
            Let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                val: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: "Phone",
                val: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              { icon: MapPin, label: "Location", val: personalInfo.location },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
              >
                <div className="p-4 bg-white dark:bg-black rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <item.icon
                    size={24}
                    className="text-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-zinc-900 dark:text-white">
                    {item.val}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-6">
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
              ></textarea>
            </div>
            <button className="btn-primary w-full">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
