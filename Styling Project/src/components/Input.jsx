import { styled } from "styled-components";

export default function CustomInput({ label, invalid, ...props }) {
  let lableClasess = "block mb-2 font-bold text-xl tracking-wide uppercase";
  let inputClasess = 'w-full px-3 py-2 border rounded leading-tight shadow'
  if (invalid) {
    lableClasess += " text-red-400";
    inputClasess += ' text-red-400 bg-red-300'
  } else {
    lableClasess += " text-stone-200";
    inputClasess += ' text-gray-700 bg-gray-400'
  }
  return (
    <p>
      <label className={lableClasess} invalid={invalid}>
        {label}
      </label>
      <input
        className={inputClasess}
        $invalid={invalid}
        {...props}
      />
    </p>
  );
}
