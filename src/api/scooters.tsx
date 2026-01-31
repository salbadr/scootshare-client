import { supabase } from "@/libs/supabase"
import type { Scooter } from "@/types/scooter";


export async function getScooters(): Promise<Scooter[]> {
    const { data, error } = await supabase.from("scooters").select('*');
    if (error) throw error
    return data as Scooter[] 


}