import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DraftingCompass, HardHat, Map, Milestone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Map className="h-10 w-10 text-accent" />,
    title: "Boundary Surveys",
    description: "Precisely defining property lines and resolving boundary disputes.",
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-accent" />,
    title: "Topographic Surveys",
    description: "Mapping the contours and features of land for planning and design.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-accent" />,
    title: "Construction Staking",
    description: "Guiding construction projects from blueprints to reality on the ground.",
  },
  {
    icon: <Milestone className="h-10 w-10 text-accent" />,
    title: "Land Development",
    description: "Comprehensive support for subdivision planning and infrastructure layout.",
  },
];

const projects = [
    {
        title: "Maple Creek Residential Subdivision",
        description: "A 200-acre residential development project, including topographic mapping and construction staking for roads and utilities.",
        image: "https://placehold.co/600x400.png",
        hint: "residential construction"
    },
    {
        title: "Downtown Commercial Complex",
        description: "Provided ALTA/NSPS Land Title Survey for a major commercial property transaction in the city center.",
        image: "https://placehold.co/600x400.png",
        hint: "commercial building"
    },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[90vh] sm:h-[80vh] md:h-[80vh] lg:h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-1"></div>
        
        <div className="relative z-10 p-4 max-w-5xl lg:max-w-6xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-3 px-3 py-1 sm:px-4 sm:py-1 rounded-full glass-effect-dark border border-accent/40 text-white animate-pulse-slow">
            <span className="text-sm font-medium tracking-wider">INNOVATIVE LAND SOLUTIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold font-headline mb-2 text-white">
            Precision in Every Line
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent via-primary to-accent mx-auto my-6 rounded-full animate-pulse-slow"></div>
          <p className="mt-4 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto text-white/95 leading-relaxed px-2 sm:px-0">
            Shree Engineers: Leading land surveying and development contractors with a legacy of trust since 1998.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 px-2">
            <Button asChild size="lg" variant="glowing" className="rounded-full">
              <Link href="/request-a-quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="glowing" className="rounded-full">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          

        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background to-card/50 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 animate-color-shift"></div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300">
              <span className="text-sm font-medium tracking-wider">ABOUT US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline gradient-text-subtle px-2 sm:px-0 animate-shimmer bg-[length:200%_auto]">A Legacy of Excellence Since 1998</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="p-4 sm:p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-inner-glow">
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  For over two decades, Shree Engineers has been the cornerstone of land development projects across the region. Our firm was built on a foundation of accuracy, integrity, and a deep understanding of the land. We combine time-honored surveying techniques with the latest technology to deliver results that stand the test of time.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon group">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <CheckCircle className="h-6 w-6"/>
                    </div>
                    <span className="font-medium">Experienced Professionals</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon group">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <CheckCircle className="h-6 w-6"/>
                    </div>
                    <span className="font-medium">Cutting-Edge Technology</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon group">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <CheckCircle className="h-6 w-6"/>
                    </div>
                    <span className="font-medium">Client Satisfaction</span>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="mt-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-neon transition-all duration-300 hover:scale-105">
                <Link href="/contact">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl border border-accent/30 shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Team of engineers"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  data-ai-hint="engineering team"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Our Expert Team</h3>
                    <p className="text-sm text-white/80">Dedicated professionals committed to excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 animate-color-shift"></div>
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300">
            <span className="text-sm font-medium tracking-wider">OUR SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent px-2 sm:px-0 animate-shimmer bg-[length:200%_auto]">Our Expertise</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0 drop-shadow-primary-sm">
            We offer a comprehensive suite of surveying and land development services to meet the needs of any project, big or small.
          </p>
          
          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 xl:gap-10">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group relative bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10 px-3 sm:px-6">
                  <div className="mx-auto p-4 rounded-full w-fit bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300 backdrop-blur-sm">
                    <div className="animate-pulse-glow">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="mt-4 font-headline text-xl group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-3 sm:px-6 pb-6">
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" size="sm" className="rounded-full border-primary/30 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent group-hover:hover:bg-accent/10">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-16 md:py-28 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 animate-color-shift"></div>
        <div className="absolute -left-64 top-64 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-64 bottom-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300">
            <span className="text-sm font-medium tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent px-2 sm:px-0 animate-shimmer bg-[length:200%_auto]">Featured Projects</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0 drop-shadow-primary-sm">
            Discover how we've helped shape communities and infrastructure with our expert services.
          </p>
          
          <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-left">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden group bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-neon"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-6 text-white w-full">
                      <Button variant="outline" size="sm" className="rounded-full border-white/50 text-white hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-105">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110" 
                    data-ai-hint={project.hint} 
                  />
                </div>
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors duration-300 drop-shadow-accent-sm">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Button 
            asChild 
            size="lg" 
            className="mt-10 sm:mt-16 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-full shadow-neon transition-all duration-300 hover:scale-105 hover:shadow-neon-accent"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
