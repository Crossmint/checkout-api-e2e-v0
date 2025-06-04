/**
 * Extracts an ASIN from an Amazon URL or returns the input if it's already an ASIN
 * @param input - Amazon URL or ASIN
 * @returns The extracted ASIN or the original input if it's already an ASIN
 */
export function extractAsin(input: string): string | null {
  // If it's already a valid ASIN, return it
  if (/^[A-Z0-9]{10}$/.test(input.toUpperCase())) {
    return input.toUpperCase();
  }

  try {
    // Try to parse as URL
    const url = new URL(input);
    
    // Check if it's an Amazon URL
    if (!url.hostname.includes('amazon.')) {
      return null;
    }

    // Extract ASIN from different URL patterns
    const patterns = [
      /\/dp\/([A-Z0-9]{10})/, // Standard product URL
      /\/gp\/product\/([A-Z0-9]{10})/, // Alternative product URL
      /\/product\/([A-Z0-9]{10})/, // Another product URL pattern
      /\/ASIN\/([A-Z0-9]{10})/, // ASIN direct URL
      /\/dp\/[A-Z0-9]{10}\/ref=/, // URL with ref parameter
      /\/[A-Z0-9]{10}\/ref=/ // URL with just ASIN and ref
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match && match[1]) {
        return match[1].toUpperCase();
      }
    }

    return null;
  } catch {
    // If URL parsing fails, return null
    return null;
  }
}

/**
 * Validates if a string is a valid Amazon ASIN
 * @param asin - The ASIN to validate
 * @returns boolean indicating if the ASIN is valid
 */
export function isValidAsin(asin: string): boolean {
  return /^[A-Z0-9]{10}$/.test(asin.toUpperCase());
} 