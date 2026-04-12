import type { InputHTMLAttributes } from "react";

type FormInputProps = {
    label: string;
}

export function FormInput({ id, name, label, value, required, max, min, type='text', onChange }: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={id} className="font-bold">{label}{required ? '*' : ''}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                required={required}
                max={max}
                min={min}
                onChange={onChange}
                className="border border-zinc-500 rounded-sm px-2 py-1 focus:outline-amber-500" />
        </div>)
}