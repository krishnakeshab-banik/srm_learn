"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-white text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Contact Us</h1>
          <p className="text-lg md:text-2xl mb-6 animate-fade-in-up">
            We're here to help! Reach out for support, feedback, or just to say hello.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col gap-8 justify-center animate-fade-in-left">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-600 text-sm">
                    SRM Institute of Science and Technology, Kattankulathur, Chennai - 603203
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600 text-sm">+1 234 567 890</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 text-sm">support@srmlearn.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-gray-600 text-sm">Chat with us 9am - 6pm IST</div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-right">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2" required />
                <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" required />
                <textarea placeholder="Your Message" className="w-full border rounded px-4 py-2" rows={5} required />
                <Button className="w-full" type="submit">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We usually respond within 24 hours.
              </p>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up">
            <iframe
              title="SRM Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.085964479836!2d80.0405123148226!3d12.82394622109837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7b3b7e1e2e7%3A0x4b1e1b1e1b1e1b1e!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  )
}
