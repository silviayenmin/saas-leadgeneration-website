import { ContactFormData } from '../types/contact';

export interface ContactSubmissionResponse {
  success: boolean;
  message?: string;
}

/**
 * Service abstraction for submitting the MapFlow AI contact form.
 * Decoupled from UI components to allow seamless API endpoint integration.
 */
export const submitContactForm = async (
  formData: ContactFormData
): Promise<ContactSubmissionResponse> => {
  // Simulate network request latency (1.2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Log payload in development mode to assist debugging
  if (import.meta.env.DEV) {
    console.log('[ContactService] Submitted Payload:', formData);
  }

  // Return simulated successful submission result
  return {
    success: true,
    message: 'Message sent successfully! Thanks for reaching out.'
  };
};
