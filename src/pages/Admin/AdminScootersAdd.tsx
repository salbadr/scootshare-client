import { Button } from "@/components/Button";
import { ButtonVariant } from "@/components/ButtonVariant";
import { FormInput } from "@/components/FormInput";
import { FormSelect } from "@/components/FormSelect";
import { Overlay } from "@/components/Overlay";
import { ScooterTypes } from "@/types/scooter";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type AdminScootersAddProps = {
    close: () => void
}

export function AdminScootersAdd({ close }: AdminScootersAddProps) {
    const [scooterData, setScooterData] = useState({
        name: '',
        price: 10,
        type: 'electric',
        location: '',
    });

    const scooter_types = Object
        .entries(ScooterTypes)
        .map(([value, label], index) => ({ label, value, id: `${index}`, selected: false }))

    const handleSubmit = (formData: FormData) => {

        console.log(Array.from(formData.entries()))

    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setScooterData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <Overlay>
            <div className="w-full flex justify-end">
                <Button
                    className="text-sm border-0 p-0"
                    aria-label="Close modal"
                    onClick={close}
                >
                    <MdClose />
                </Button>
            </div>

            <form className="w-full" action={handleSubmit}>
                <fieldset className="flex flex-col space-y-4">
                    <div className="leading-4">
                        <legend className="font-bold">Add New Scooter</legend>
                        <span className="text-xs">Fields marked with (*) are required</span>
                    </div>
                    <FormInput name="name" id="scooter_name" label="Name" required value={scooterData.name} onChange={handleChange} />
                    <FormInput name="price" id="scooter_price" label="Price" type="number" min="10" max="50" required value={scooterData.price} onChange={handleChange} />
                    <FormSelect name="type" id="scooter_type" label="Type" options={scooter_types} value={scooterData.type} required onChange={handleChange} />
                    <FormInput name="location" id="scooter_location" label="Location" required value={scooterData.location} onChange={handleChange} />
                    <div className="flex justify-end gap-2">
                        <ButtonVariant className='md:w-30 p-2' value='Cancel' onClick={close}
                        />
                        <ButtonVariant className='md:w-30 p-2' variant="callout" value='Submit' />
                    </div>
                </fieldset>

            </form>
        </Overlay>

    )
}