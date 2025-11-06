import { QuoteForm } from "./quote-form";

export default function RequestQuotePage() {
  return (
    <div>
      <section className="bg-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Request a Quote</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Provide us with your project details, and our team will get back to you with a personalized estimate and our AI-powered preliminary response.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
