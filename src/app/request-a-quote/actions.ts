'use server';

import { personalizedQuoteResponse, QuoteRequestInput } from '@/ai/flows/quote-response-generator';
import { z } from 'zod';

const QuoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(3, "Project type is required."),
  projectDetails: z.string().min(10, "Please provide more details about your project."),
  relevantServices: z.string().min(3, "Please select relevant services."),
});

type State = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    projectType?: string[];
    projectDetails?: string[];
    relevantServices?: string[];
  } | null;
  quoteResponse?: string | null;
};

export async function getQuoteResponse(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = QuoteFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    projectType: formData.get('projectType'),
    projectDetails: formData.get('projectDetails'),
    relevantServices: formData.get('relevantServices'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your inputs.',
      quoteResponse: null,
    };
  }
  
  const input: QuoteRequestInput = validatedFields.data;

  try {
    const result = await personalizedQuoteResponse(input);
    return {
      message: 'Successfully generated quote response.',
      quoteResponse: result.emailResponse,
      errors: null
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while generating the response. Please try again later.',
      errors: null,
      quoteResponse: null,
    };
  }
}
