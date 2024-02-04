import { z } from 'zod';

const DOMAIN_REGEX =
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;

const m = (type: string) => `Please enter a valid ${type}.`;

export const dnsSchema = z.object({
  domain: z
    .string()
    .trim()
    .refine((domain) => DOMAIN_REGEX.test(domain), {
      message: m('domain name')
    })
});

export const ipSchema = z.object({
  ip: z
    .string()
    .trim()
    .ip({ message: m('IP address') })
});
