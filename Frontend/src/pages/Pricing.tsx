import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "5 summaries per day",
        "Basic text summarization",
        "Standard support",
        "Web-based access"
      ]
    },
    {
      name: "Pro",
      price: "19",
      features: [
        "Unlimited summaries",
        "Advanced text & video summarization",
        "Priority support",
        "API access",
        "Team collaboration",
        "Custom templates"
      ]
    },
    {
      name: "Enterprise",
      price: "99",
      features: [
        "Everything in Pro",
        "Custom AI model training",
        "24/7 dedicated support",
        "SSO integration",
        "Advanced analytics",
        "Custom deployment options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that best fits your needs. All plans include our core summarization features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    index === 1
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {index === 1 ? "Get Started" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Plan?</h2>
            <p className="text-gray-600 mb-6">
              Contact us for custom pricing and features tailored to your organization's specific needs.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}