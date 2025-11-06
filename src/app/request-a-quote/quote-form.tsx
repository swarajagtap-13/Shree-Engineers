'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getQuoteResponse } from './actions';
import { useToast } from '@/hooks/use-toast';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Copy } from 'lucide-react';

const QuoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(3, "Project type is required."),
  projectDetails: z.string().min(10, "Please provide more details about your project."),
  relevantServices: z.string().min(3, "Please enter relevant services."),
});

type QuoteFormValues = z.infer<typeof QuoteFormSchema>;

export function QuoteForm() {
  const [quoteResponse, setQuoteResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const responseRef = useRef<HTMLDivElement>(null);
  
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      projectDetails: '',
      relevantServices: ''
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsLoading(true);
    setQuoteResponse(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await getQuoteResponse({ message: null, errors: null, quoteResponse: null }, formData);

    setIsLoading(false);

    if (result.errors) {
      toast({
        title: 'Error submitting form',
        description: 'Please check the errors and try again.',
        variant: 'destructive',
      });
    } else if (result.quoteResponse) {
      setQuoteResponse(result.quoteResponse);
      toast({
        title: 'Success!',
        description: 'Your AI-powered response has been generated.',
      });
      form.reset();
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
       toast({
        title: 'An unexpected error occurred.',
        description: result.message,
        variant: 'destructive',
      });
    }
  };
  
  const copyToClipboard = () => {
    if(quoteResponse) {
        navigator.clipboard.writeText(quoteResponse);
        toast({
            title: "Copied!",
            description: "Email response copied to clipboard.",
        })
    }
  }


  return (
    <div className="space-y-8">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline">Project Information</CardTitle>
              <CardDescription>
                The more details you provide, the more accurate our response will be.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Residential Boundary Survey" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relevantServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relevant Services</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Topographic Mapping, Construction Staking" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your project, including location, size, and specific requirements." rows={6} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? 'Generating Response...' : 'Get AI-Powered Response'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      
      {quoteResponse && (
        <div ref={responseRef} className="pt-8">
            <Card className="bg-primary/5">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="font-headline text-primary">Generated Email Response</CardTitle>
                            <CardDescription>Here is a preliminary response tailored to your request. Our team will follow up shortly.</CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                           <Copy className="h-5 w-5"/>
                           <span className="sr-only">Copy to clipboard</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="p-4 bg-card rounded-md border whitespace-pre-wrap font-mono text-sm">
                        {quoteResponse}
                    </div>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
