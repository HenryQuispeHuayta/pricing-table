import type { Plan } from "./plan.type";

export const plans: Plan[] = [
  {
    tier: 'Free',
    pricing: 0,
    number: 1,
    storage: 100,
    database: 0,
    bandwidth: false,
    ssd: false,
    vcpus: false,
    wordpress: false,
    serverSpeed: false
  },
  {
    tier: 'Team',
    pricing: 59,
    number: 10,
    storage: 500,
    database: 15,
    bandwidth: true,
    ssd: false,
    vcpus: false,
    wordpress: false,
    serverSpeed: false
  },
  {
    tier: 'Popular',
    pricing: 99,
    number: 50,
    storage: 1024,
    database: 999,
    bandwidth: true,
    ssd: true,
    vcpus: true,
    wordpress: true,
    serverSpeed: true
  },
  {
    tier: 'Enterprise',
    pricing: 299,
    number: 999,
    storage: 9999,
    database: 999,
    bandwidth: true,
    ssd: true,
    vcpus: true,
    wordpress: true,
    serverSpeed: true
  }
];