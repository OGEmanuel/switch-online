"use client";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChangeEvent, ReactNode, useEffect } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { useThemeContext } from "@/context";

interface Props {
  className?: string;
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  validated?: boolean;
  type?: string;
  label: ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  maxLength?: number;
}

export default function TextInput({
  className = "",
  type = "text",
  label,
  placeholder,
  field,
  fieldState,
  validated,
  value,
  onChange,
  disabled,
  maxLength,
}: Props) {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (validated && (!field || !fieldState)) {
      throw new Error(
        "field and fieldState prop is required when validated is set to true"
      );
    }
  }, []);

  return (
    <FormItem>
      <FormLabel
        className={`flex items-center text-base gap-[6px] font-medium ${
          theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
        }`}
      >
        {label}
      </FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          type={type}
          className={`border focus:outline-none placeholder:text-[#98A2B3] rounded-xl ${
            theme === "dark" ? "text-[#6C8585] bg-[#FFFFFF1A]" : ""
          } ${
            fieldState?.invalid
              ? "border-red-500"
              : `${theme === "dark" ? "border-[#5B6464]" : "!border-[#D7DBDB]"}`
          }`}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
