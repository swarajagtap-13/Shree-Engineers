import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DraftingCompass, HardHat, LandPlot, Map, Milestone } from "lucide-react";
import Image from "next/image";

const servicesList = [
    {
        icon: <Map className="h-8 w-8 text-primary" />,
        title: "Boundary & Cadastral Surveys",
        description: "We provide legally defensible surveys to establish and re-establish property boundaries for private, commercial, and government clients. This is essential for property transactions, resolving disputes, and land registration."
    },
    {
        icon: <DraftingCompass className="h-8 w-8 text-primary" />,
        title: "Topographic & Site Surveys",
        description: "Our team creates detailed maps of land areas, showing natural and man-made features, elevations, and contours. These are critical for architects, engineers, and planners to design and execute development projects effectively."
    },
    {
        icon: <HardHat className="h-8 w-8 text-primary" />,
        title: "Construction & Engineering Surveys",
        description: "We offer precise staking and layout services to guide the construction of buildings, roads, bridges, and utilities. Our work ensures that projects are built according to design specifications, on time and within budget."
    },
    {
        icon: <LandPlot className="h-8 w-8 text-primary" />,
        title: "Land Subdivision & Development Planning",
        description: "From large-scale residential subdivisions to commercial developments, we provide comprehensive planning and surveying services, including lot layout, road design, and utility planning, navigating regulatory requirements."
    },
    {
        icon: <Milestone className="h-8 w-8 text-primary" />,
        title: "GIS & Mapping Services",
        description: "Leveraging Geographic Information Systems (GIS), we provide advanced spatial analysis and data management solutions to help clients make informed decisions about their land assets."
    }
];

export default function ServicesPage() {
    return (
        <div>
            <section className="bg-primary/10 py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Delivering a full spectrum of land surveying and development services with unmatched precision and professionalism.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service) => (
                            <Card key={service.title} className="flex flex-col">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="p-3 bg-secondary rounded-full">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="bg-card py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <Image
                                src="https://placehold.co/600x450.png"
                                alt="Advanced surveying equipment"
                                width={600}
                                height={450}
                                className="rounded-lg shadow-xl"
                                data-ai-hint="surveying equipment"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Technology-Driven Accuracy</h2>
                            <p className="text-lg text-muted-foreground">
                                We invest in the latest surveying technology, including GPS, robotic total stations, and drone mapping, to ensure the highest level of accuracy and efficiency. This commitment to technology allows us to tackle complex projects and deliver superior results for our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}