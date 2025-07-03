import clsx from "clsx";
import React from "react";

interface labelInput extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  classLabel?: String;
  classInput?: String;

}

export function Input({children, classLabel, classInput, onChange, value, placeholder, type}:labelInput) {
    return(
        <div>
            <label className={clsx('', classLabel)}>{children}</label>
            <input 
            type={type} 
            onChange={onChange}
            value={value}
            placeholder={placeholder} 
            className={clsx('outline-none border border-gray-400 w-[250px] h-[40px] px-3 rounded-lg text-sm text-gray-200 placeholder:text-gray-200', classInput)}/>
        </div>
    );
}