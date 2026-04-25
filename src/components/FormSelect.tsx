import type { InputHTMLAttributes } from "react";

type FormSelectProps = {
    label: string;

    options: {
        value: string,
        id: string;
        label: string;
        selected?: boolean;
    }[]
}

export function FormSelect({ id, name, label, options, value, onChange, required }: FormSelectProps & InputHTMLAttributes<HTMLSelectElement>) {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={id} className="font-bold">{label}{required ? '*' : ''}</label>
            <select
                id={id}
                name={name}
                required={required}
                onChange={onChange}
                value={value}
                className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500 " >
                {
                    options.map((option) =>
                        <option key={option.id} value={option.value}>{option.label}</option>
                    )
                }
            </select>
        </div>)
}