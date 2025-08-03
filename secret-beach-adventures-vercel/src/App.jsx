import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Camera, 
  Waves, 
  Sun, 
  Star,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
  ChevronRight,
  Heart,
  Share2,
  BookOpen,
  Download,
  ShoppingCart,
  Shield,
  TrendingUp,
  Car,
  CheckCircle,
  MessageCircle,
  Clock,
  Plane,
  Building
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Email capture logic would go here
    alert('Thanks for subscribing! Check your email for the free Secret Beach guide.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-teal-600">Secret Beach Adventures</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
              <a href="#guides" className="text-gray-700 hover:text-teal-600 transition-colors">Travel Guides</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Plan Your Trip</a>
              <a href="/transportation" className="text-gray-700 hover:text-teal-600 transition-colors">Transportation</a>
              <a href="#blog" className="text-gray-700 hover:text-teal-600 transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
              <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                Free Guide
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</a>
              <a href="#guides" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Travel Guides</a>
              <a href="#plan" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Plan Your Trip</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">
                  Free Guide
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-background.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/70 to-blue-600/70"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Belize's<br />
              <span className="text-coral-400">Hidden Paradise</span>
            </h1>
            
            {/* 4-Sentence Teaser */}
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-4">
                <a href="/secret-beach-guide" className="hover:text-coral-300 transition-colors cursor-pointer">
                  Secret Beach on Ambergris Caye represents one of the Caribbean's most captivating destinations, where pristine crystal-clear waters meet vibrant beach culture in a setting that perfectly balances relaxation with adventure. Experience the world's most unique "in-water dining" where restaurants serve meals directly in shallow, warm 80-degree waters that extend far from shore, creating natural swimming pools perfect for all ages. The west-facing orientation provides spectacular unobstructed sunset views across the lagoon while protecting visitors from trade winds, making every evening a magical experience worth treasuring. This carefully preserved paradise combines authentic Caribbean charm with eco-friendly accommodations and locally-owned businesses, ensuring your visit contributes to rather than detracts from this extraordinary destination.
                </a>
              </p>
              <p className="text-sm text-coral-200">
                <a href="/secret-beach-guide" className="hover:underline">
                  Click to read our complete Secret Beach guide →
                </a>
              </p>
            </div>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Your insider guide to Belize's transforming paradise - from infrastructure upgrades to luxury developments and hidden gems
            </p>
          
          {/* Email Capture */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 border-white/20 text-gray-900"
                required
              />
              <Button type="submit" className="bg-coral-500 hover:bg-coral-600 text-white px-8">
                Get Free Guide
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-300">
            Get our Ultimate Secret Beach Planning Guide + insider tips delivered to your inbox
          </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Latest Secret Beach News
            </h2>
            <p className="text-gray-600">Stay updated with the latest developments and events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* News Item 1 - Six Senses Resort */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-600 font-semibold">BREAKING</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Six Senses Luxury Resort Opening at Secret Beach
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Major luxury development with 45 resort villas and 24 overwater residences opening mid-2025. Features signature spa, wellness village, and private island access.
                </p>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-teal-600 font-medium">Luxury Development</span>
                </div>
              </CardContent>
            </Card>

            {/* News Item 2 - Infrastructure */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-orange-600 font-semibold">DEVELOPMENT</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Major Infrastructure Improvements Announced
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ministry of Tourism announces infrastructural improvements coming to Secret Beach. New road improvements completed, gas station under construction.
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-orange-600 font-medium">Infrastructure</span>
                </div>
              </CardContent>
            </Card>

            {/* News Item 3 - Real Estate */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 font-semibold">INVESTMENT</span>
                  <span className="text-sm text-gray-500">4 days ago</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Secret Beach Real Estate Boom Continues
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  New condo construction underway with Turquoise Seas development. 0.72-acre beachfront parcel listed for $650K. Market rapidly appreciating.
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">Real Estate</span>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Current Conditions Banner */}
          <div className="mt-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">No Sargassum</span>
              </div>
              <div className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Calm Clear Water</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">Perfect Weather</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Active Social Scene</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Plan Your Perfect Secret Beach Trip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plan Your Perfect Secret Beach Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan an unforgettable Secret Beach adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Booking.com Hotels */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-teal-600" />
                  <div>
                    <h3 className="text-xl font-bold">Find Hotels</h3>
                    <p className="text-sm text-gray-500">Powered by Booking.com</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Discover the best accommodations near Secret Beach
                </p>
                
                {/* Booking.com Widget Placeholder */}
                <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-blue-600 font-semibold">Booking.com Widget</p>
                    <p className="text-sm text-blue-500">Hotel search integration</p>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  Search Hotels
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Best price guarantee • Free cancellation
                </p>
              </CardContent>
            </Card>

            {/* Airbnb Rentals */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-coral-500" />
                  <div>
                    <h3 className="text-xl font-bold">Vacation Rentals</h3>
                    <p className="text-sm text-gray-500">Powered by Airbnb</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Unique stays and experiences near Secret Beach
                </p>
                
                {/* Airbnb Widget Placeholder */}
                <div className="bg-coral-50 border-2 border-dashed border-coral-200 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-coral-400 mx-auto mb-2" />
                    <p className="text-coral-600 font-semibold">Airbnb Integration</p>
                    <p className="text-sm text-coral-500">Vacation rental search</p>
                  </div>
                </div>
                
                <Button className="w-full bg-coral-500 hover:bg-coral-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Browse Rentals
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Unique properties • Local experiences
                </p>
              </CardContent>
            </Card>

            {/* Amazon Travel Gear */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-8 h-8 text-orange-500" />
                  <div>
                    <h3 className="text-xl font-bold">Travel Gear</h3>
                    <p className="text-sm text-gray-500">Powered by Amazon</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Essential gear for your Secret Beach adventure
                </p>
                
                {/* Amazon Widget Placeholder */}
                <div className="bg-orange-50 border-2 border-dashed border-orange-200 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <ShoppingCart className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                    <p className="text-orange-600 font-semibold">Amazon Associates</p>
                    <p className="text-sm text-orange-500">Travel gear recommendations</p>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Shop Gear
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Fast shipping • Prime eligible
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Featured Affiliate Products Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Essential Secret Beach Gear</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Amazon Product 1 - Snorkel Set */}
              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Waves className="w-16 h-16 text-teal-600 mx-auto mb-2" />
                      <p className="text-teal-700 font-semibold">Snorkel Set</p>
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-orange-500">Amazon Choice</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Premium Snorkel Set</h4>
                  <p className="text-sm text-gray-600 mb-3">Anti-fog mask, dry snorkel, fins</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">$39.99</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      View on Amazon
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Amazon Product 2 - Waterproof Phone Case */}
              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                      <p className="text-purple-700 font-semibold">Phone Case</p>
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-orange-500">#1 Best Seller</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Waterproof Phone Case</h4>
                  <p className="text-sm text-gray-600 mb-3">Universal fit, touch-sensitive</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">$12.99</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      View on Amazon
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Amazon Product 3 - Beach Towel */}
              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sun className="w-16 h-16 text-yellow-600 mx-auto mb-2" />
                      <p className="text-yellow-700 font-semibold">Beach Towel</p>
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-orange-500">Prime</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Quick-Dry Beach Towel</h4>
                  <p className="text-sm text-gray-600 mb-3">Microfiber, sand-resistant</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">$24.99</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      View on Amazon
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Amazon Product 4 - Underwater Camera */}
              <Card className="group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-green-600 mx-auto mb-2" />
                      <p className="text-green-700 font-semibold">Action Camera</p>
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-orange-500">Highly Rated</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Waterproof Action Camera</h4>
                  <p className="text-sm text-gray-600 mb-3">4K video, underwater housing</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">$89.99</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      View on Amazon
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Affiliate Disclosure */}
          <div className="mt-12 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Affiliate Disclosure:</strong> Secret Beach Adventures participates in affiliate programs including Amazon Associates, Booking.com, and Airbnb. 
              We may earn a commission when you book through our links at no extra cost to you. This helps us keep providing free content and guides.
            </p>
          </div>

        </div>
      </section>

      {/* Digital Product Store */}
      <section id="guides" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secret Beach Digital Store
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instant downloads to enhance your Secret Beach adventure - guides, templates, presets, and insider secrets
            </p>
          </div>

          {/* Featured Bundle */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-teal-600 to-blue-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="bg-coral-500 text-white mb-4">🔥 BEST VALUE</Badge>
                    <h3 className="text-3xl font-bold mb-4">Complete Traveler Bundle</h3>
                    <p className="text-lg mb-6 text-blue-100">
                      Get ALL our travel guides, templates, and insider secrets in one complete package. Perfect for first-time visitors to Secret Beach.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl line-through text-blue-200">$129</span>
                      <span className="text-4xl font-bold">$89</span>
                      <Badge className="bg-coral-500">Save $40</Badge>
                    </div>
                    <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Get Complete Bundle
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Includes:</h4>
                      <ul className="text-sm space-y-1 text-blue-100">
                        <li>• Complete Travel Guide</li>
                        <li>• Photo & Instagram Guide</li>
                        <li>• Budget Planning Tools</li>
                        <li>• Itinerary Templates</li>
                      </ul>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Plus:</h4>
                      <ul className="text-sm space-y-1 text-blue-100">
                        <li>• Packing Checklists</li>
                        <li>• Hidden Gems Map</li>
                        <li>• Restaurant Guide</li>
                        <li>• Weather & Timing Tips</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                All Products
              </Button>
              <Button variant="outline">Travel Planning</Button>
              <Button variant="outline">Photography</Button>
              <Button variant="outline">Local Insider</Button>
              <Button variant="outline">Business & Investment</Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Product 1 - Complete Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/water-activities.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-coral-500 text-white">Ultimate Guide</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Complete Secret Beach Guide 2025</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Everything you need including latest developments, luxury resorts, and insider access tips.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$29</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 2 - Instagram Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/secret-beach-sign.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 text-white">Photography</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Instagram Photo Guide</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Most Instagram-worthy spots with exact locations and perfect timing tips.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$19</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 3 - Budget Toolkit */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/beach-lifestyle.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Budget Travel</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Budget Planning Toolkit</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Complete budget tools, cost breakdowns, and money-saving tips.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$39</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 4 - Itinerary Templates */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-teal-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">Planning</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Itinerary Templates</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  3, 5, and 7-day customizable plans with activities and timing.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$15</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 5 - Lightroom Presets */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-500 text-white">🔥 Popular</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Lightroom Presets Pack</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  "Secret Beach Vibes" photo filters for stunning tropical photos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$25</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 6 - Hidden Gems Map */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500 text-white">Local Insider</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Hidden Gems Map</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Secret spots only locals know - beaches, viewpoints, and experiences.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$16</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 7 - Packing Checklist */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-white">Essential</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Packing Checklist Bundle</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Beach, adventure, and luxury versions with climate considerations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$12</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product 8 - Real Estate Guide */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(/luxury-resort.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-indigo-500 text-white">Investment</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Real Estate Investment Guide</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-3">
                  Property opportunities, legal requirements, and investment strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-teal-600">$45</span>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="w-4 h-4 mr-1" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Additional Bundles */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            
            {/* Content Creator Bundle */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Content Creator Bundle</h3>
                    <Badge className="bg-purple-100 text-purple-700">Save $20</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Perfect for influencers and content creators - photo guides, presets, and Instagram templates.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg line-through text-gray-400">$85</span>
                    <span className="text-2xl font-bold text-purple-600 ml-2">$65</span>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Get Bundle
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Investor Bundle */}
            <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-indigo-600" />
                  <div>
                    <h3 className="text-xl font-bold">Investor Bundle</h3>
                    <Badge className="bg-indigo-100 text-indigo-700">Save $15</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Real estate and business opportunities in Belize - comprehensive investment guides.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg line-through text-gray-400">$90</span>
                    <span className="text-2xl font-bold text-indigo-600 ml-2">$75</span>
                  </div>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Get Bundle
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <Download className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600">Instant Download</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600">30-Day Money Back</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-teal-600" />
                <span className="text-gray-600">4.9/5 Customer Rating</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Secret Beach Insights
            </h2>
            <p className="text-xl text-gray-600">
              Fresh tips, guides, and insider secrets from Secret Beach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 - Current News */}
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(/sunset-beach.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-coral-500 text-white">Breaking News</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                  Major Infrastructure Upgrades Coming to Secret Beach
                </h3>
                <p className="text-gray-600 mb-4">
                  Belize government announces comprehensive infrastructure improvements including electricity, water, and zoning regulations for Secret Beach.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>4 min read</span>
                  <span>July 31, 2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 2 - Real Estate */}
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(/beach-lifestyle.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">Real Estate</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                  Secret Beach Real Estate Boom: $675K Beachfront Property Listed
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium 2.4-acre beachfront property with 200 feet of Caribbean Sea frontage highlights growing investment interest in Secret Beach.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>July 29, 2025</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 3 - Luxury Development */}
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <div 
                className="aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(/luxury-resort.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">Luxury Travel</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                  Six Senses Belize Resort Opening Mid-2025 at Secret Beach
                </h3>
                <p className="text-gray-600 mb-4">
                  New luxury resort with 45 accommodations set to transform Secret Beach into premier Caribbean destination.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>July 28, 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
              <BookOpen className="h-4 w-4 mr-2" />
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Secret Beach Travelers
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold ml-2">4.9/5 from 500+ travelers</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-sm text-gray-600">Travel Blogger</p>
                </div>
                <p className="text-gray-700 italic">
                  "The Secret Beach guide was incredible! Found hidden spots I never would have discovered on my own. Worth every penny!"
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="font-semibold">Mike & Lisa</h4>
                  <p className="text-sm text-gray-600">Honeymooners</p>
                </div>
                <p className="text-gray-700 italic">
                  "Perfect honeymoon thanks to these guides! The photography tips helped us get amazing shots for our album."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4"></div>
                  <h4 className="font-semibold">David R.</h4>
                  <p className="text-sm text-gray-600">Adventure Traveler</p>
                </div>
                <p className="text-gray-700 italic">
                  "Saved me hours of research and planning. The insider tips made my Secret Beach trip absolutely unforgettable!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Secret Beach Update
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get weekly insider tips, new guides, and exclusive deals delivered to your inbox
          </p>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 border-white/20 text-gray-900"
                required
              />
              <Button type="submit" className="bg-coral-500 hover:bg-coral-600 text-white px-8">
                Subscribe Free
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-teal-200 mt-4">
            Join 5,000+ travelers • Unsubscribe anytime • No spam, ever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-teal-400 mb-4">Secret Beach Adventures</h3>
              <p className="text-gray-400 mb-4">
                Your trusted guide to discovering the hidden paradise of Secret Beach, Belize.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#guides" className="hover:text-teal-400 transition-colors">Travel Guides</a></li>
                <li><a href="#plan" className="hover:text-teal-400 transition-colors">Plan Your Trip</a></li>
                <li><a href="#blog" className="hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Free Planning Guide</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Photography Tips</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Budget Calculator</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Travel Checklist</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@secretbeachadventures.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Secret Beach, Ambergris Caye, Belize</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Secret Beach Adventures. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Affiliate Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

