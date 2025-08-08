import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";

export default function ContactUs() {
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contant, setContant] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://sysvonbackend-production.up.railway.app/api/v1/Contact/create-contact",
        {
          fullname,
          email,
          message: contant,
          role,
          city,
          pnumber,
          company,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setMessage(true);
        setFullname("");
        setEmail("");
        setContant("");
        setRole("");
        setCity("");
        setPnumber("");
        setCompany("");

        setTimeout(() => setMessage(false), 3000);
      }
    } catch (err) {
      console.error("Failed to send contact message", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <section className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 animated-metallic-bg rounded-b-3xl shadow-lg"></div>
        <div className="relative z-10 max-w-3xl">
          <p className="mt-4 text-lg text-gray-300">
            We'd love to hear from you. Whether it's a question, feedback, or
            just a hello.
          </p>
        </div>
      </section>
      <AnimatedSection type="fadeUp" delay={0.4}>
        <section className="max-w-5xl mx-auto px-4 py-16 bg-white text-gray-800 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <fieldset disabled={loading} className="space-y-6">
              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                />
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
                <input
                  type="tel"
                  placeholder="Phone number*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setPnumber(e.target.value)}
                  value={pnumber}
                  required
                />
                <input
                  type="text"
                  placeholder="Company name*"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  required
                />
                <input
                  type="text"
                  placeholder="Your title/role"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                />
              </div>
              <textarea
                rows="5"
                placeholder="Please tell us a bit about what you’re looking for"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
                onChange={(e) => setContant(e.target.value)}
                value={contant}
                required
              ></textarea>
              <div className="mt-3 min-h-[50px] transition-all duration-300">
                {message && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-md border border-green-400 animate-fadeIn">
                    ✅ Your message has been sent successfully! Check your email
                    for updates
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full border md:w-auto px-8 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 00-10 10h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </fieldset>
          </form>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
