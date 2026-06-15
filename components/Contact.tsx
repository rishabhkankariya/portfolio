"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[--bg-color]">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8">
        <h2 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-(--primary-color) font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider">
          CONTACT.
        </h2>
        <hr className="w-full border-color border-2 mb-12" />

        <div className="grid grid-cols-1 gap-12">
          {/* Map box */}
          <div className="w-full h-96 border-4 border-color rounded-lg overflow-hidden logo-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49747.66911691488!2d75.75602046494713!3d23.16907220262882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1750142568651!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none"
            ></iframe>
          </div>

          {/* Form box */}
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-wide text-(--primary-color)">
              SEND A MESSAGE
            </h3>
            <div className="w-full h-[800px] border-4 border-color rounded-lg overflow-hidden logo-shadow bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfIehg2p2gG0-7cNuoa2lSbZnUANmEy6kaXDdF6UQHBaKiqCQ/viewform?embedded=true"
                className="w-full h-full border-none"
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
