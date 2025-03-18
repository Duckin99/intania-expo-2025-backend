import { z } from "zod";

export const DataSchema = {};
export const SortingSchema = z.object({
  columns: z.array(z.string().min(1, "Cannot be empty")),
  ascending: z.boolean(),
});
export const BuildingParamsSchema = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  workshopSlots: z.boolean().optional(),
  intaniaLocation: z.boolean().optional(),
  intaniaLocationId: z.boolean().optional()
}).strict()
export const GroupingSchema = {};
export const FetchLevelSchema = {};
