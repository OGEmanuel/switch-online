"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import BriefIcon from "@/public/icons/brief-icon";
import TextInput from "@/components/ui/text-input";
import PersonIcon from "@/public/icons/person-icon";
import PhoneIcon from "@/public/icons/phone-icon";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import EnvelopeIcon from "@/public/icons/envelope-icon";
import { Textarea } from "@/components/ui/textarea";
import MessageIcon from "@/public/icons/message-icon";
import { Loader2 } from "lucide-react";
import { useThemeContext } from "@/context";

const FormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().min(2, { message: "Invalid value in field" }).trim(),
  message: z
    .string()
    .min(25, { message: "Message should be at least 25 characters long" })
    .trim(),
});

export function ContactForm({ onSetPage }: { onSetPage: () => void }) {
  const { theme } = useThemeContext();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      companyName: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    scrollToTop();

    try {
      await axios.post("https://formspree.io/f/xzbnygev", data);
      onSetPage();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data;
        toast({
          variant: "destructive",
          title: `${errorData.errors}!`,
        });
      } else {
        toast({
          title: "An Error Occurred!",
          variant: "destructive",
          description: "Something went wrong! Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-7 rounded-3xl p-8 ${
          theme === "dark" ? "bg-[#0F1B1B]" : "bg-[#F8F8F8]"
        }`}
      >
        <FormField
          control={form.control}
          name="companyName"
          render={({ field, fieldState }) => (
            <TextInput
              placeholder="Enter company name"
              label={
                <>
                  <BriefIcon
                    fill={`${theme === "dark" ? "#BAD0D0" : "#506363"}`}
                  />
                  Company name
                </>
              }
              fieldState={fieldState}
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <TextInput
              placeholder="Enter name"
              label={
                <>
                  <PersonIcon
                    fill={`${theme === "dark" ? "#BAD0D0" : "#506363"}`}
                  />
                  Name
                </>
              }
              fieldState={fieldState}
              field={field}
            />
          )}
        />
        <fieldset className={"space-y-2"}>
          <label
            className={`flex items-center gap-[6px] font-medium ${
              theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
            }`}
          >
            <PhoneIcon fill={`${theme === "dark" ? "#BAD0D0" : "#506363"}`} />
            Phone number
          </label>
          <Controller
            name="phone"
            control={form.control}
            render={({ field }) => (
              <PhoneInput
                inputClass={`!w-full !py-2 !rounded-xl !h-auto ${
                  theme === "dark"
                    ? "!border-[#5B6464] !text-[#6C8585] !bg-[#FFFFFF1A]"
                    : "!border-[#D7DBDB]"
                }`}
                dropdownClass="!rounded-xl"
                country={"ng"}
                value={field.value}
                onChange={(e) => field.onChange(e)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  autoComplete: "none",
                  "data-testid": "input-id",
                }}
                specialLabel=""
              />
            )}
          />
          {form.formState.errors.phone ? (
            <p className="text-red-500">Phone number is required</p>
          ) : null}
        </fieldset>
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <TextInput
              placeholder="Enter email"
              type="email"
              label={
                <>
                  <EnvelopeIcon
                    fill={`${theme === "dark" ? "#BAD0D0" : "#506363"}`}
                  />
                  Email address
                </>
              }
              fieldState={fieldState}
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel
                className={`flex items-center text-base gap-[6px] font-medium ${
                  theme === "dark" ? "text-[#BAD0D0]" : "text-[#506363]"
                }`}
              >
                <MessageIcon
                  fill={`${theme === "dark" ? "#BAD0D0" : "#506363"}`}
                />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={7}
                  placeholder="How can we help you?"
                  className={`border resize-none p-4 placeholder:text-[#98A2B3] rounded-xl
                  ${theme === "dark" ? "!text-[#6C8585] !bg-[#FFFFFF1A]" : ""}
                  
                  ${
                    fieldState?.invalid
                      ? "border-red-500"
                      : `${
                          theme === "dark"
                            ? "!border-[#5B6464]"
                            : "border-[#D7DBDB]"
                        }`
                  }`}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type={loading ? "button" : "submit"}
          className="bg-[#1E9B97] hover:!bg-[rgb(30,130,151)]"
        >
          {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Send mail"}
        </Button>
      </form>
    </Form>
  );
}
