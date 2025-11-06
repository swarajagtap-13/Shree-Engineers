import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const projectsList = [
    {
        title: "Maple Creek Residential Subdivision",
        category: "Residential Development",
        description: "A 200-acre residential development project, including topographic mapping and construction staking for over 5 miles of roads and utilities.",
        image: "https://placehold.co/600x400.png",
        hint: "suburban houses aerial"
    },
    {
        title: "Downtown Commercial Complex",
        category: "Commercial Survey",
        description: "Provided a comprehensive ALTA/NSPS Land Title Survey for a major commercial property transaction in the city center, facilitating a smooth closing.",
        image: "https://placehold.co/600x400.png",
        hint: "city skyscraper"
    },
    {
        title: "Greenway Park Expansion",
        category: "Public Works",
        description: "Conducted detailed topographic and boundary surveys for a 50-acre park expansion, including trail layout and environmental feature mapping.",
        image: "https://placehold.co/600x400.png",
        hint: "city park"
    },
    {
        title: "Highway 101 Interchange",
        category: "Infrastructure",
        description: "Provided high-precision control and construction staking for a complex highway interchange project, ensuring adherence to strict DOT specifications.",
        image: "https://placehold.co/600x400.png",
        hint: "highway interchange"
    },
    {
        title: "Northwood Industrial Park",
        category: "Industrial Development",
        description: "Managed all surveying aspects for a new industrial park, from initial site planning and platting to construction layout for multiple large facilities.",
        image: "https://placehold.co/600x400.png",
        hint: "industrial park aerial"
    },
    {
        title: "Lakeside Resort & Marina",
        category: "Recreational",
        description: "Executed bathymetric surveys of the lakebed and topographic surveys of the surrounding land for the design and development of a new marina and resort.",
        image: "https://placehold.co/600x400.png",
        hint: "lakeside marina"
    }
];

export default function ProjectsPage() {
    return (
        <div>
            <section className="bg-primary/10 py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Project Portfolio</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Explore a selection of our successful projects that demonstrate our firm's capabilities and commitment to quality.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsList.map((project) => (
                            <Card key={project.title} className="overflow-hidden group flex flex-col">
                                <div className="overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                        data-ai-hint={project.hint}
                                    />
                                </div>
                                <CardHeader>
                                    <p className="text-sm font-medium text-accent">{project.category}</p>
                                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{project.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Areas Served Across India</h2>
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-3xl">
                            <div className="aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative w-full h-full">
                                    {/* Map with highlighted border */}
                                    <div className="absolute inset-0 border-4 border-primary/30 rounded-lg m-2 z-10"></div>
                                    <Image
                                        src="https://placehold.co/800x600.png"
                                        alt="Map of India with service areas"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-contain"
                                        data-ai-hint="map of India with highlighted border"
                                    />
                                    
                                    {/* Country-wide service indicator */}
                                    <div className="absolute top-4 right-4 bg-primary/10 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/30 shadow-sm z-20">
                                        Nationwide Coverage
                                    </div>
                                    
                                    {/* Maharashtra Region Marker */}
                                    <div className="absolute" style={{ left: '40%', top: '60%' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                                            <div className="mt-1 bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md">
                                                Maharashtra
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Delhi Region Marker */}
                                    <div className="absolute" style={{ left: '38%', top: '30%' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                                            <div className="mt-1 bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md">
                                                Delhi
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Indore, M.P. Region Marker */}
                                    <div className="absolute" style={{ left: '32%', top: '45%' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                                            <div className="mt-1 bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md">
                                                Indore, M.P.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Chilkha, Odisha Region Marker */}
                                    <div className="absolute" style={{ left: '55%', top: '55%' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                                            <div className="mt-1 bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md">
                                                Chilkha, Odisha
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Goa Region Marker */}
                                    <div className="absolute" style={{ left: '28%', top: '65%' }}>
                                        <div className="flex flex-col items-center">
                                            <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                                            <div className="mt-1 bg-white/90 px-2 py-1 rounded text-xs font-medium shadow-md">
                                                Goa
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center text-muted-foreground">
                                <p>Our surveying services cover the entire nation, with specialized teams strategically located across India to serve all your engineering needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
