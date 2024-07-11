import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">Features</a>
          <a href="#" className="hover:text-primary">Pricing</a>
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </nav>
        <Button>Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-6">Streamline your business processes with our cutting-edge SaaS solution.</p>
          <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Product illustration" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="p-8 md:p-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
            { title: "Real-time Analytics", description: "Get insights instantly with our powerful analytics" },
            { title: "Secure & Reliable", description: "Bank-level security to keep your data safe" },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="p-8 md:p-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Basic", price: "$9.99", features: ["Feature 1", "Feature 2", "Feature 3"] },
            { name: "Pro", price: "$19.99", features: ["All Basic features", "Feature 4", "Feature 5"] },
            { name: "Enterprise", price: "Custom", features: ["All Pro features", "Feature 6", "24/7 Support"] },
          ].map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button className="mt-4">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 md:p-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {[
              { name: "John Doe", role: "CEO", comment: "This SaaS has transformed our business operations." },
              { name: "Jane Smith", role: "Marketing Director", comment: "The analytics feature is a game-changer for our campaigns." },
              { name: "Alex Johnson", role: "IT Manager", comment: "Impressive security measures and easy integration." },
            ].map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <img src="/placeholder.svg" alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                    <p className="text-center mb-4">"{testimonial.comment}"</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your SaaS Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;