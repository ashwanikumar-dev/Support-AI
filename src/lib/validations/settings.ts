import { z } from "zod";

export const settingsSchema = z.object({
  ownerId: z.string().min(1, "Owner ID is required"),
  businessName: z.string().min(1, "Business name is required"),
  supportEmail: z.email("Invalid support email"),
  knowledge: z.string().min(1, "Knowledge is required"),
});
