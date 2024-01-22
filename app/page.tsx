"use client"

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid Email Address" }),
  address: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  message: z.string().optional(),
});

const ContactForm = () => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            address: "",
            country: "",
            state: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const res = await fetch("api", {
                method: "POST",
                body: JSON.stringify(values)
            })
            const data  = await res.json()

            if (res.ok) {
                setIsSuccess(true)
                setMessage("Form has been submitted")
            } else {
                setIsSuccess(false)
                setMessage("Form submission failed")
            }
        } catch (error) {
            setIsSuccess(false)
            setMessage("Another error occured during submission")
            console.error(error)
        }
    }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 text-muted-foreground">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex items-start">Fullname</FormLabel>
                        <FormControl>
                            <Input placeholder="Fullname" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input placeholder="Address" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input placeholder="Country" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                            <Input placeholder="State" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Your Message (optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="Message" className="text-black" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Submit</Button>
        </form>
      </Form>
      {isSuccess && (
        <div>Form has been submitted</div>
      )}
        
    </div>
  )

}

export default ContactForm;