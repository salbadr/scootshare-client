import { deleteScooter } from "@/api/scooters";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useScooterDelete() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteScooter,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['scooters']})
        },
        onError: (error) => {
            console.log(error)
        },
    })
}