import { addScooter } from "@/api/scooters";
import { useMutation } from "@tanstack/react-query";

export function useScooterAdd() {
    return useMutation({
        mutationFn: addScooter,
        onError: (error) => {
            console.log(error)
            // I will fire second!
        },
    })
}