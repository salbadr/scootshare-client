import { Card } from "@/components/Card";

export function AdminScooters() {

    return (
        <section>
            <section className="mb-10">
                <h1 className="text-2xl md:text-4xl font-semi-bold">Scooters Inventory</h1>
                <p>
                    Manage your scooter fleet
                </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                <Card className="bg-white" alignment="left">
                    <p>Total Scooters</p>
                </Card>
                <Card className="bg-white" alignment="left">
                    <p>Available</p>
                </Card>
                <Card className="bg-white" alignment="left">
                    <p>Currently Rented</p>
                </Card>
            </section>
            <Card className="bg-white scroll-smooth overflow-x-auto" alignment="left">
                <section>
                    <h2 className="font-bold">Scooter List (6)</h2>
                    <table className="w-5xl md:w-full mt-5 [&_td]:py-5 [&_th]:pb-3">
                        <thead className="font-bold">
                            <tr className="border-b border-zinc-300 text-left">
                                <th>
                                    Scooter
                                </th>
                                <th>
                                    Price/Hour
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-zinc-300">
                                <td>
                                    Rambo
                                </td>
                                <td>
                                    $10/hr
                                </td>
                                <td>
                                    Electric
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                            <tr className="border-b border-zinc-300">
                                <td>
                                    Rambo
                                </td>
                                <td>
                                    $10/hr
                                </td>
                                <td>
                                    Electric
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                            <tr className="border-b border-zinc-300">
                                <td>
                                    Rambo
                                </td>
                                <td>
                                    $10/hr
                                </td>
                                <td>
                                    Electric
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                            <tr className="border-b border-zinc-300">
                                <td>
                                    Rambo
                                </td>
                                <td>
                                    $10/hr
                                </td>
                                <td>
                                    Electric
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                            <tr className="border-b border-zinc-300">
                                <td>
                                    Rambo
                                </td>
                                <td>
                                    $10/hr
                                </td>
                                <td>
                                    Electric
                                </td>
                                <td>
                                    Edit
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </section>


            </Card>
        </section>
    )
}