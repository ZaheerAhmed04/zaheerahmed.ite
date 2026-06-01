
import React from "react";
import { Mail, Github, Linkedin, MapPin, Phone, Languages, Send } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with the public key (if provided)
if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  } catch (e) {
    // ignore init errors in environments where import.meta.env may be undefined
  }
}

export function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-base sm:text-lg text-gray-600">
            I'm open to discussing opportunities in web development, cybersecurity, internships, or collaboration on security-focused projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:zaheerahmed.ite@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    zaheerahmed.ite@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Preferred for professional inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">Phone</p>
                  <a href="tel:+919103078148" className="text-blue-600 hover:text-blue-700">
                    +91 9103078148
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Available for professional calls and internship discussions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-gray-700">Poonch, Jammu & Kashmir, India</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Open to remote, hybrid, and relevant on-site opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">GitHub</p>
                  <a
                    href="https://github.com/ZaheerAhmed04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    github.com/ZaheerAhmed04
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    View my code and projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/zaheer-ahmed-4ab600371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    linkedin.com/in/zaheer-ahmed-4ab600371
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Connect professionally
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Languages className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">Languages</p>
                  <p className="text-gray-700">English, Urdu, Hindi, Pahari</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Professional communication in English and Urdu; native proficiency in Pahari
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            <ContactForm />
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Response Time:</span> I typically respond to professional inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-base font-medium text-gray-900 mb-2">Current Status</p>
              <p className="text-sm text-gray-600">
                Open to internships, part-time opportunities, and collaborative projects while completing my B.Tech degree.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-base font-medium text-gray-900 mb-2">Preferred Work</p>
              <p className="text-sm text-gray-600">
                Remote or Hybrid positions in web development, cybersecurity analysis, or security-focused software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Only one ContactForm definition, with proper typing
function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [sendSms, setSendSms] = React.useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    setSuccess("");
    setError("");
    
    try {
      // Validate EmailJS credentials are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || serviceId === "service_xxx" || !templateId || templateId === "template_xxx" || !publicKey || publicKey === "public_xxx") {
        throw new Error(
          "Email service not configured. Contact the website owner to set up EmailJS credentials.\n\n" +
          "Owner: Please configure EmailJS:\n" +
          "1. Sign up at emailjs.com\n" +
          "2. Create a service and template\n" +
          "3. Add credentials to .env file"
        );
      }

      // Send email via EmailJS
      try {
        await emailjs.send(serviceId, templateId, {
          from_name: data.name || "Website Visitor",
          from_email: data.email,
          message: data.message,
          reply_to: data.email,
        }, publicKey);
      } catch (emailErr: any) {
        console.error("EmailJS error:", emailErr);
        throw new Error(
          `Failed to send email: ${emailErr.text || emailErr.message || "Unknown error"}`
        );
      }

      // Send SMS notification to owner if checkbox is checked
      if (sendSms) {
        try {
          const smsRes = await fetch("http://localhost:4000/send-sms-to-owner", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              message: data.message,
            }),
          });
          
          if (!smsRes.ok) {
            console.warn(`SMS notification returned status ${smsRes.status}`);
          }
        } catch (smsErr: any) {
          console.warn("SMS notification unavailable (server may be offline):", smsErr.message);
          // Don't fail the entire request if SMS fails - email is the primary channel
        }
      }

      setSuccess("✓ Message sent successfully! I will contact you soon.");
      form.reset();
      setSendSms(false);
    } catch (err: any) {
      console.error("Form submission error:", err);
      setError(err.message || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="name"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@email.com" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="How can I help you?" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="sendSms"
            checked={sendSms}
            onChange={(e) => setSendSms(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded cursor-pointer"
          />
          <label htmlFor="sendSms" className="text-sm text-gray-700 cursor-pointer">
            Also notify me via SMS (+91 9103078148)
          </label>
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Sending..." : "Send Message"}
        </Button>
        {success && <p className="text-green-600 text-sm">{success}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="text-xs text-gray-500 mt-2">
          This form will send your message to zaheerahmed.ite@gmail.com. For SMS/WhatsApp, see instructions below.
        </div>
      </form>
    </Form>
  );
}
