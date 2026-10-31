/** Direct sales line. Local number: 04121689393 */
export const WHATSAPP_PHONE = "584121689393";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
