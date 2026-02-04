import { getScooterDetails } from "@/api/scooters"
import { useQuery } from "@tanstack/react-query"

export function useScooterDetails(id?: string) {
    return useQuery({
        queryKey: ['scooters', id],
        queryFn: getScooterDetails,
        meta: { id },
        enabled: !!id

    })
}