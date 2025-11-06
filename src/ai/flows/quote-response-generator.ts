'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized quote responses.
 *
 * - personalizedQuoteResponse - A function that generates a personalized email response to a quote request.
 * - QuoteRequestInput - The input type for the personalizedQuoteResponse function.
 * - QuoteResponseOutput - The return type for the personalizedQuoteResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuoteRequestInputSchema = z.object({
  name: z.string().describe('The name of the person requesting the quote.'),
  email: z.string().email().describe('The email address of the person requesting the quote.'),
  projectType: z.string().describe('The type of project the quote is for.'),
  projectDetails: z.string().describe('Detailed description of the project.'),
  relevantServices: z.string().describe('Services relevant to the project.'),
});
export type QuoteRequestInput = z.infer<typeof QuoteRequestInputSchema>;

const QuoteResponseOutputSchema = z.object({
  emailResponse: z.string().describe('The personalized email response to the quote request.'),
});
export type QuoteResponseOutput = z.infer<typeof QuoteResponseOutputSchema>;

export async function personalizedQuoteResponse(input: QuoteRequestInput): Promise<QuoteResponseOutput> {
  return personalizedQuoteResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedQuoteResponsePrompt',
  input: {schema: QuoteRequestInputSchema},
  output: {schema: QuoteResponseOutputSchema},
  prompt: `You are an AI assistant for Shree Engineers, a land surveying and development firm established in 1998.
  Your task is to generate a personalized email response to a quote request.
  Use the information provided in the quote request to tailor the response.
  Include relevant services offered by Shree Engineers and examples of past projects that are similar to the request.

  Quote Request Details:
  Name: {{{name}}}
  Email: {{{email}}}
  Project Type: {{{projectType}}}
  Project Details: {{{projectDetails}}}
  Relevant Services: {{{relevantServices}}}

  Generate a professional and informative email response that addresses the quote request and highlights Shree Engineers' expertise and experience.
`,
});

const personalizedQuoteResponseFlow = ai.defineFlow(
  {
    name: 'personalizedQuoteResponseFlow',
    inputSchema: QuoteRequestInputSchema,
    outputSchema: QuoteResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
