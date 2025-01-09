import { ChevronRight, Car, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedOut } from "@clerk/nextjs";
import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { HomeSearch } from "@/components/home-search";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <div className="flex flex-col pt-20 min-h-screen">
      {/* Hero Section with Premium Silver Design */}
      <section className="relative py-24 md:py-40 luxury-pattern overflow-hidden">
        {/* Elegant Background Elements */}
        <div className="absolute inset-0 silver-mesh"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl luxury-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-premium-light/6 rounded-full blur-3xl luxury-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 px-6">
          <div className="mb-16">
            <div className="mb-12">
              <h1 className="text-6xl md:text-9xl mb-8 font-bold tracking-tight luxury-shimmer">
                <span className="premium-text">DRIVE</span><span className="text-5xl md:text-7xl font-bold text-primary/90">PRO</span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-foreground/90 mb-8 max-w-5xl mx-auto font-light leading-relaxed">
              Luxury Car Test Drive Experience
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              Discover your perfect vehicle through our premium test drive service. 
              Experience automotive excellence with personalized attention and professional guidance.
            </p>
          </div>

          {/* Search Component */}
          <div className="luxury-glass rounded-3xl p-8 md:p-12 luxury-shadow max-w-5xl mx-auto border border-white/30">
            <HomeSearch />
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 relative luxury-pattern">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
            <div className="luxury-shimmer">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
              <div className="w-24 h-px premium-gradient"></div>
              <p className="text-muted-foreground mt-3 text-lg">Curated selection of exceptional vehicles</p>
            </div>
            <Button variant="outline" className="luxury-button text-white font-medium px-6 py-3" asChild>
              <Link href="/cars">
                <span>Explore All Vehicles</span> 
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="luxury-hover" style={{animationDelay: `${index * 0.1}s`}}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className="py-20 relative premium-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="premium-scan">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Browse by Brand</h2>
              <div className="w-20 h-px premium-gradient"></div>
              <p className="text-muted-foreground mt-2 text-sm">Explore vehicles from top manufacturers</p>
            </div>
            <Button variant="outline" className="flex items-center premium-glass premium-border hover:premium-glow transition-all duration-300" asChild>
              <Link href="/cars">
                <span className="text-primary font-semibold">All Brands</span> 
                <ChevronRight className="ml-2 h-4 w-4 text-primary" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="premium-glass rounded-2xl p-4 md:p-6 text-center hover:premium-glow transition-all duration-300 group premium-border"
              >
                <div className="h-16 md:h-20 w-auto mx-auto mb-3 md:mb-4 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={
                      make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                    }
                    alt={make.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="filter brightness-110"
                  />
                </div>
                <h3 className="font-semibold text-primary text-xs md:text-sm tracking-wide">{make.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DrivePro */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="luxury-shimmer">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">The DrivePro Difference</h2>
              <div className="w-32 h-px premium-gradient mx-auto"></div>
              <p className="text-muted-foreground mt-6 text-xl max-w-3xl mx-auto">
                Elevating your automotive experience through uncompromising quality and service excellence
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="text-center premium-card rounded-3xl p-10 md:p-12 luxury-hover group">
              <div className="luxury-gradient rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <Car className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Curated Excellence</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Each vehicle undergoes rigorous selection from premium dealers and certified sources, ensuring only the finest automobiles reach our collection.
              </p>
            </div>
            <div className="text-center premium-card rounded-3xl p-10 md:p-12 luxury-hover group">
              <div className="luxury-gradient rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <Calendar className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Seamless Experience</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Effortless scheduling with premium time slots, instant confirmations, and white-glove service that respects your valuable time.
              </p>
            </div>
            <div className="text-center premium-card rounded-3xl p-10 md:p-12 luxury-hover group">
              <div className="luxury-gradient rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Complete Confidence</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Comprehensive protection, verified partnerships, and secure processes designed to provide absolute peace of mind throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="py-20 relative premium-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="premium-scan">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Vehicle Categories</h2>
              <div className="w-20 h-px premium-gradient"></div>
              <p className="text-muted-foreground mt-2 text-sm">Find the perfect vehicle type for your needs</p>
            </div>
            <Button variant="outline" className="flex items-center premium-glass premium-border hover:premium-glow transition-all duration-300" asChild>
              <Link href="/cars">
                <span className="text-primary font-semibold">All Categories</span> 
                <ChevronRight className="ml-2 h-4 w-4 text-primary" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer premium-glass rounded-2xl overflow-hidden premium-border hover:premium-glow transition-all duration-300"
              >
                <div className="overflow-hidden rounded-2xl flex justify-end h-36 md:h-40 relative">
                  <Image
                    src={
                      type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
                    }
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                    {type.name}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full car-pulse"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="premium-scan">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-px premium-gradient mx-auto"></div>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                Get answers to common questions about our test drive services
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="premium-glass rounded-2xl premium-border">
                  <AccordionTrigger className="text-foreground font-semibold text-left px-6 py-5 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 premium-pattern text-foreground relative overflow-hidden">
        <div className="absolute inset-0 automotive-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="premium-scan mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 premium-text">
              Start Your Journey
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Experience premium vehicles with professional test drive services. 
              Book your appointment today and discover your perfect car.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="outline" className="premium-glass premium-border hover:premium-glow transition-all duration-300 px-10 py-4" asChild>
              <Link href="/cars">
                <span className="text-primary font-semibold text-lg">Browse Cars</span>
              </Link>
            </Button>
            <SignedOut>
              <Button size="lg" className="premium-gradient text-black font-bold px-10 py-4 transition-all duration-300 hover:scale-105 shadow-lg" asChild>
                <Link href="/sign-up">
                  <span className="text-lg">Get Started</span>
                </Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </div>
  );
}
