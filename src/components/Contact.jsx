import React, { useState } from 'react';
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/deshanhettiarachchi98@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);
  };

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contact" 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 border-t border-slate-800/50 bg-[#111620]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-2xl">
            Have a project in mind or just want to say hi? Drop me a message below or reach out through my socials.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Side: Form */}
          <div className="lg:col-span-3 bg-[#151b23] border border-slate-800 p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* The Form */}
            <form onSubmit={handleFormSubmit} className="relative z-10 space-y-6">
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input type="text" id="name" name="Name" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="John Doe" required disabled={formStatus === 'submitting'} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input type="email" id="email" name="Email" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" placeholder="john@example.com" required disabled={formStatus === 'submitting'} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" name="Message" rows="5" className="w-full bg-[#111620] border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none" placeholder="How can I help you?" required disabled={formStatus === 'submitting'}></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-4 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' && <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                {formStatus === 'idle' && 'Send Direct Message'}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && <><CheckCircle className="w-5 h-5" /> Message Sent Successfully!</>}
                {formStatus === 'error' && <><AlertCircle className="w-5 h-5" /> Failed to send. Try again.</>}
              </button>
            </form>
          </div>

          {/* Right Side: Contact Methods */}
          <div className="lg:col-span-2 space-y-10 lg:pl-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:+94719989000" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all shadow-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium mb-0.5">Call Me</div>
                    <div className="text-slate-200 group-hover:text-purple-400 transition-colors text-lg font-semibold">+94 (71) 998 9000</div>
                  </div>
                </a>

                <a href="mailto:deshanhettiarachchi98@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all shadow-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium mb-0.5">Email Me</div>
                    <div className="text-slate-200 group-hover:text-cyan-400 transition-colors font-semibold break-all">deshanhettiarachchi98@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/deshan-hettiarachchi" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group shadow-lg">
                  <FaLinkedin className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a href="https://github.com/deshanparallax" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#151b23] border border-slate-800 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all group shadow-lg">
                  <FaGithub className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
