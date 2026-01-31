import { useScooters } from "@/hooks/useScooters";


export default function Scooters() {
    const { isLoading, data: scooters } = useScooters();

    if (isLoading) return <div>Loading...</div>

    if (!scooters) {
        return <div>No Scooters....</div>
    }

    return (
        <div>
            {scooters.map(scooter => (
                <div key={scooter.id}>{scooter.name}</div>
            ))}
        </div>
    )
}