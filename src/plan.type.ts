export interface Plan {
  tier: string;
  pricing: number;
  number: number;
  storage: number;
  database?: number;
  bandwidth?: boolean;
  ssd?: boolean;
  vcpus?: boolean;
  wordpress?: boolean;
  serverSpeed?: boolean;
}
