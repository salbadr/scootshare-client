import { supabase } from "@/libs/supabase"
import type { Scooter } from "@/types/scooter";
import type { QueryFunctionContext } from "@tanstack/react-query";

export async function getScooters(): Promise<Scooter[]> {
    const { data, error } = await supabase.from("scooters").select('*');
    if (error) throw error
    return data as Scooter[] 
}

export async function getScooterDetails(context:QueryFunctionContext): Promise<Scooter> {
    const { data, error } = await supabase.from("scooters").select('*').eq('id', context.meta!.id);
    if (error) throw error
    return data[0] as Scooter 
}