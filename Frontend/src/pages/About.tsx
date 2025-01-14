import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Brain, Zap, Shield, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Advanced AI Technology",
      description: "Powered by state-of-the-art language models to provide accurate and coherent summaries."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Get your summaries in seconds, no matter the content length or complexity."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Private",
      description: "Your content is processed with enterprise-grade security and never stored without permission."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Built for Teams",
      description: "Collaborate with your team and share summaries effortlessly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About AI Summarizer
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make information consumption more efficient and accessible through the power of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, AI Summarizer was born from a simple observation: in today's fast-paced world, 
              people need better tools to quickly understand and digest information. Our team of AI experts and 
              developers came together to create a solution that makes content consumption more efficient without 
              sacrificing comprehension.
            </p>
            <p className="text-gray-600">
              Today, we serve thousands of users worldwide, from students and researchers to professionals and 
              content creators. Our commitment to innovation and user experience drives us to continuously improve 
              our summarization technology.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}