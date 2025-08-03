import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
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
  Building,
  Sunset,
  Fish,
  TreePine,
  Home
} from 'lucide-react'

export default function SecretBeachGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-teal-600">Secret Beach Adventures</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">← Back to Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Complete Secret Beach Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to know about Belize's most spectacular hidden paradise
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>58-Page Complete Guide</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Updated 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Expert Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Secret Beach on Ambergris Caye represents one of the Caribbean's most captivating destinations, where pristine crystal-clear waters meet vibrant beach culture in a setting that perfectly balances relaxation with adventure. Located on the western side of Belize's largest island, this remarkable destination has evolved from a hidden local gem into one of the most sought-after beach experiences in Central America, while still maintaining its authentic Caribbean charm and natural beauty that makes every visit feel like discovering paradise for the first time.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              What makes Secret Beach truly extraordinary is its unique combination of shallow, warm waters that remain at a perfect 80 degrees Fahrenheit year-round, expansive sandy areas ideal for lounging and water activities, and a thriving ecosystem of beach bars and restaurants that offer the world's most distinctive "in-water dining" experience. The west-facing orientation provides protection from prevailing trade winds while offering spectacular unobstructed sunset views across the lagoon, creating an atmosphere where time seems to slow down and every moment becomes a memory worth treasuring.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              The journey to Secret Beach is itself part of the adventure, requiring a scenic 40-minute golf cart ride from San Pedro Town through mangrove systems and local neighborhoods, or an optional 30-minute boat shuttle through wildlife-rich waterways where dolphins, iguanas, and tropical birds create a natural welcome committee. This carefully managed development has preserved the authentic character and environmental sustainability that defines the destination, with many eco-friendly accommodations operating entirely off-grid using solar power and rainwater collection, ensuring that your visit contributes to rather than detracts from this pristine Caribbean paradise.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Waves className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-lg">Crystal Clear Waters</h3>
                </div>
                <p className="text-gray-600">
                  Shallow lagoon system with 80°F water year-round, rarely exceeding 3-4 feet deep - perfect for all ages and swimming abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Sunset className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg">Spectacular Sunsets</h3>
                </div>
                <p className="text-gray-600">
                  West-facing orientation provides unobstructed sunset views across the lagoon - some of the most beautiful in the Caribbean.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Fish className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg">In-Water Dining</h3>
                </div>
                <p className="text-gray-600">
                  Unique dining experience with restaurants serving meals directly in the shallow waters - found nowhere else in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg">Eco-Friendly</h3>
                </div>
                <p className="text-gray-600">
                  Many accommodations operate off-grid with solar power and rainwater collection, preserving the natural environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg">Authentic Culture</h3>
                </div>
                <p className="text-gray-600">
                  Locally-owned businesses and genuine Caribbean hospitality create authentic cultural exchanges with visitors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coral-600" />
                  </div>
                  <h3 className="font-bold text-lg">Perfect Location</h3>
                </div>
                <p className="text-gray-600">
                  Northwestern Ambergris Caye location provides protection from trade winds while maintaining easy access to island amenities.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">6-8 miles</div>
                <div className="text-sm text-gray-600">From San Pedro Town</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">40 min</div>
                <div className="text-sm text-gray-600">Golf cart journey</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">80°F</div>
                <div className="text-sm text-gray-600">Water temperature</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Beach bars & restaurants</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white border-2 border-teal-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Secret Beach Paradise?
            </h2>
            <p className="text-gray-600 mb-6">
              Get our complete travel guides, insider tips, and exclusive recommendations to make your Secret Beach adventure unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                <Download className="w-4 h-4 mr-2" />
                Get Complete Guide ($29)
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View All Digital Products
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Secret Beach Adventures</h3>
            <p className="text-gray-400 mb-6">Your insider guide to Belize's hidden paradise</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

