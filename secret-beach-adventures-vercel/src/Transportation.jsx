import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Car,
  Users,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Plane,
  Building,
  Waves
} from 'lucide-react'

function Transportation() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-coral-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Getting Around Secret Beach
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Convenient transportation options to explore Secret Beach and Ambergris Caye
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Car className="w-5 h-5 mr-2" />
              Golf Cart Rentals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              <Users className="w-5 h-5 mr-2" />
              Taxi Services
            </Button>
          </div>
        </div>
      </section>

      {/* Main Transportation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Golf Cart Rentals */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-teal-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <Car className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Golf Cart Rentals</h3>
                    <p className="text-teal-600 font-semibold">Most Popular Choice</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  The most convenient way to explore Secret Beach and the island. Perfect for families and groups who want freedom to explore at their own pace.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">4-6 passenger capacity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Beach-friendly tires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Storage for beach gear</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">No special license required</span>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Daily Rate</span>
                    <span className="text-2xl font-bold text-teal-600">$75-95</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Weekly Rate</span>
                    <span className="text-xl font-bold text-teal-600">$450-550</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Prices vary by season and cart type
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                    <Car className="w-5 h-5 mr-2" />
                    Reserve Golf Cart
                  </Button>
                  <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Availability
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Taxi Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-coral-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Taxi Services</h3>
                    <p className="text-coral-600 font-semibold">Hassle-Free Option</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Professional drivers who know the island well. Perfect for airport transfers, restaurant visits, and guided tours around Ambergris Caye.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-600" />
                    <span className="text-gray-700">Local expert drivers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-600" />
                    <span className="text-gray-700">Airport pickup available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-600" />
                    <span className="text-gray-700">Island tours included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-coral-600" />
                    <span className="text-gray-700">No driving stress</span>
                  </div>
                </div>

                <div className="bg-coral-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Airport Transfer</span>
                    <span className="text-2xl font-bold text-coral-600">$25-35</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Secret Beach Trip</span>
                    <span className="text-xl font-bold text-coral-600">$15-25</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Island Tour</span>
                    <span className="text-xl font-bold text-coral-600">$60-80</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Per trip, up to 4 passengers
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-coral-500 hover:bg-coral-600 text-lg py-3">
                    <Users className="w-5 h-5 mr-2" />
                    Book Taxi Service
                  </Button>
                  <Button variant="outline" className="w-full border-coral-500 text-coral-500 hover:bg-coral-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Booking
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Transportation Tips & Local Info */}
          <div className="bg-gradient-to-r from-teal-50 to-coral-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Transportation Tips & Local Info
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Getting to Secret Beach */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">Getting to Secret Beach</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 20-minute drive from San Pedro</li>
                  <li>• Golf cart: $15-20 each way</li>
                  <li>• Taxi: $25-35 round trip</li>
                  <li>• Water taxi: $10-15 per person</li>
                </ul>
              </div>

              {/* Best Times to Travel */}
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">Best Times to Travel</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Early morning: Less traffic</li>
                  <li>• Avoid 12-2pm: Lunch rush</li>
                  <li>• Sunset trips: Most popular</li>
                  <li>• Book ahead during peak season</li>
                </ul>
              </div>

              {/* Local Recommendations */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">Local Recommendations</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Bring cash for parking</li>
                  <li>• Golf carts get priority parking</li>
                  <li>• Ask drivers for restaurant tips</li>
                  <li>• Negotiate for multi-day rentals</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Popular Transportation Routes */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Popular Transportation Routes
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Route 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="font-bold mb-2">Airport → Secret Beach</h4>
                  <p className="text-sm text-gray-600 mb-3">Direct transfer from San Pedro Airport</p>
                  <div className="text-lg font-bold text-teal-600">$30-40</div>
                  <p className="text-xs text-gray-500">30-40 minutes</p>
                </CardContent>
              </Card>

              {/* Route 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-coral-600" />
                  </div>
                  <h4 className="font-bold mb-2">San Pedro → Secret Beach</h4>
                  <p className="text-sm text-gray-600 mb-3">From downtown San Pedro</p>
                  <div className="text-lg font-bold text-coral-600">$15-25</div>
                  <p className="text-xs text-gray-500">20-25 minutes</p>
                </CardContent>
              </Card>

              {/* Route 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Water Taxi Route</h4>
                  <p className="text-sm text-gray-600 mb-3">Scenic boat ride option</p>
                  <div className="text-lg font-bold text-blue-600">$10-15</div>
                  <p className="text-xs text-gray-500">15-20 minutes</p>
                </CardContent>
              </Card>

              {/* Route 4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Island Tour</h4>
                  <p className="text-sm text-gray-600 mb-3">Full island exploration</p>
                  <div className="text-lg font-bold text-purple-600">$60-80</div>
                  <p className="text-xs text-gray-500">3-4 hours</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Additional Transportation Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            
            {/* Golf Cart Rental Companies */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Recommended Golf Cart Rentals</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-semibold">Island Dream Golf Cart Rentals</h5>
                    <p className="text-sm text-gray-600">Premium carts, excellent service</p>
                    <p className="text-sm text-teal-600">$75-85/day • (501) 226-3570</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-semibold">Secret Beach Cart Co.</h5>
                    <p className="text-sm text-gray-600">Local specialists, best rates</p>
                    <p className="text-sm text-teal-600">$70-90/day • (501) 226-4821</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-semibold">Ambergris Golf Carts</h5>
                    <p className="text-sm text-gray-600">Island-wide service, reliable</p>
                    <p className="text-sm text-teal-600">$80-95/day • (501) 226-3825</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taxi Services */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Trusted Taxi Services</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-coral-500 pl-4">
                    <h5 className="font-semibold">Carlos Island Taxi</h5>
                    <p className="text-sm text-gray-600">Airport specialist, 24/7 service</p>
                    <p className="text-sm text-coral-600">WhatsApp: +501 610-3847</p>
                  </div>
                  <div className="border-l-4 border-coral-500 pl-4">
                    <h5 className="font-semibold">Secret Beach Express</h5>
                    <p className="text-sm text-gray-600">Direct routes, local knowledge</p>
                    <p className="text-sm text-coral-600">WhatsApp: +501 615-2934</p>
                  </div>
                  <div className="border-l-4 border-coral-500 pl-4">
                    <h5 className="font-semibold">Ambergris Island Tours</h5>
                    <p className="text-sm text-gray-600">Tours + transportation combo</p>
                    <p className="text-sm text-coral-600">WhatsApp: +501 620-1756</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-coral-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Explore Secret Beach?</h3>
          <p className="text-xl mb-8">
            Book your transportation now and start your Secret Beach adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Car className="w-5 h-5 mr-2" />
              Book Golf Cart
            </Button>
            <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              Book Taxi
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Transportation

