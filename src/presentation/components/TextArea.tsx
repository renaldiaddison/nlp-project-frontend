import React, {FC} from "react";

interface TextAreaProps {
    disabled: boolean,
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const TextArea: FC<TextAreaProps> = (props) => {

    return (
        <textarea disabled={props.disabled} value={props.value} placeholder={props.placeholder}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      props.setValue(e.target.value)
                  }}
                  className={`sm:text-2xl text-xl p-3 resize-none focus:outline-none border border-gray-300 w-full rounded-md h-[100%] ${props.disabled ? "bg-gray-200" : "bg-white"}`}
        />
    );
};
