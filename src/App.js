import React, { useState } from 'react';
import { Menu, X, MapPin, Package, Mail, Instagram, ChevronRight } from 'lucide-react';

export default function KoreaTravelGuide() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Korea Travel Guide</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">Services</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Seoul with a Local Guide
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience authentic Korean culture and hidden gems with personalized travel services
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 inline-flex items-center"
          >
            Get Started
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Seoul Travel Guide Service</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Explore Seoul like never before with a knowledgeable local guide. From popular tourist spots to hidden local favorites, I'll show you the real Seoul.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Customized itineraries based on your interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Local restaurants and authentic Korean cuisine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Cultural insights and historical context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Photo spots and Instagram-worthy locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Any kind of councel available</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Luggage Delivery & Storage Service</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Travel light and enjoy Seoul hassle-free. We'll take care of your luggage so you can focus on making memories.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Airport to hotel luggage delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Secure luggage storage during your stay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Flexible pick-up and drop-off options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Safe and reliable service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Storage: ₩4,000 per bag for one day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Delivery: ₩15,000 per bag</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="text-xl font-semibold mb-2">Local Expertise</h4>
              <p className="text-gray-600">Born and raised in Seoul, I know the city inside out</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-semibold mb-2">English available</h4>
              <p className="text-gray-600">English communication throughout your journey</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">Personalized Service</h4>
              <p className="text-gray-600">Every tour is tailored to your preferences and pace</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h4 className="text-xl font-semibold mb-2">Flexible Schedule</h4>
              <p className="text-gray-600">We work around your timeline and availability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-semibold mb-2">Fair Pricing</h4>
              <p className="text-gray-600">Transparent pricing with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2">Trusted Service</h4>
              <p className="text-gray-600">Dedicated to making your Seoul experience unforgettable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Explore Seoul?
          </h3>
          <p className="text-xl mb-12 opacity-90">
            Contact me today to start planning your perfect Seoul adventure
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="mailto:koreatravelguide0@gmail.com"
              className="bg-white text-blue-600 px-8 py-6 rounded-xl font-semibold hover:bg-blue-50 transition transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <Mail className="mr-3" size={24} />
              Email Us
            </a>
            <a 
              href="https://instagram.com/korea.travel_guide"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <Instagram className="mr-3" size={24} />
              Instagram DM
            </a>
          </div>

          <p className="mt-8 text-sm opacity-75">
            We typically respond within 24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Korea Travel Guide. Making your Seoul journey unforgettable.</p>
          <p className="text-gray-400">koreatravelguide0@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}