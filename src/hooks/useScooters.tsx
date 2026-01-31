import { getScooters } from "@/api/scooters"
import { useQuery } from "@tanstack/react-query"

export function useScooters() {
    return useQuery({ queryKey: ['scooters'], queryFn: getScooters })
}