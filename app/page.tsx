"use client";
import React from 'react';
import { ArrowRight, Building2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">AI</div>
          Fiesta Estimator
        </div>
        <div className="hidden md:flex gap-8 font-medium text-sm">
          <a href="#" className="hover:text-uae-gold transition-colors">Solutions</a>
          <a href="#" className="hover:text-uae-gold transition-colors">Pricing</a>
          <a href="#" className="hover:text-uae-gold transition-colors">UAE Market</a>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-uae-gold/10 text-uae-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Next-Gen Estimation for UAE
          </span>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build faster. <br />
            <span className="text-gray-400">Estimate smarter.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's most advanced AI for construction pros. Upload your PDFs, identify every wall and room instantly, and get spot-on UAE market pricing.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              Start Your Free Project <ArrowRight size={20} />
            </button>
            <button className="text-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { icon: <Zap className="text-blue-500" />, title: "Instant Analysis", desc: "Scan blueprints and CAD files in seconds with 99% accuracy." },
            { icon: <Building2 className="text-uae-gold" />, title: "UAE Standards", desc: "Auto-assumes sizes based on local building codes and standards." },
            { icon: <ShieldCheck className="text-green-500" />, title: "Live Pricing", desc: "Real-time material costs and vendor availability across the UAE." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 text-left"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
