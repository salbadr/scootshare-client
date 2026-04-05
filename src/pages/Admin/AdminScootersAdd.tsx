import { Button } from "@/components/Button";
import { ButtonVariant } from "@/components/ButtonVariant";
import { Overlay } from "@/components/Overlay";
import { MdClose } from "react-icons/md";

type AdminScootersAddProps = {
    close: () => void
}

export function AdminScootersAdd({ close }: AdminScootersAddProps) {

    const handleSubmit = (formData: FormData) => {

        for (const key of formData.keys()) {
            console.log(key);
        }
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
                    <div className="flex flex-col">
                        <label htmlFor="scooter_name" className="font-bold">Scooter Name*</label>
                        <input id="scooter_name" name="name" type="text" className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="scooter_price" className="font-bold">Price per Hour ($)*</label>
                        <input id="scooter_price" name="price" type="number" className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500" min="10" max="50" required />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="scooter_type" className="font-bold">Scooter Type*</label>
                        <select id="scooter_type" name="type" className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500 " required>
                            <option value=""></option>
                            <option value="electric">Electric</option>
                            <option value="gas">Gas</option>
                            <option value="kick">Kick</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="scooter_location" className="font-bold">Location*</label>
                        <input id="scooter_location" name="location" type="text" className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500" required />

                    </div>
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