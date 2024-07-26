"use client";

import a from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreatePage = () => {
  const router = useRouter();
  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      title: ""
    }
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values) => {
    try {
      const response = await a.post("/api/course", values);
      router.push(`/instructor/courses/${response.data.id}`);
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:items-center md:justify-center h-full p-6">
      <h1 className="text-2xl pb-6">Name your course</h1>
      <p className="text-sm text-slate-600 pb-6">
        A good course name is clear, concise, and compelling, capturing the essence of the content and grabbing the attention of your target audience. Don't worry if you are not 100% sure about this, though! You can change it later.
      </p>
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Course title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Advanced web development'"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  What will you teach in this course
                </FormDescription>
                <FormMessage>
                  {fieldState.error ? fieldState.error.message : ""}
                </FormMessage>
              </FormItem>
            )}
            rules={{
              required: "Course title is required", 
              minLength: {
                value: 5,
                message: "Course title must be at least 5 characters long" 
              }
            }}
          />
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Button type="button" variant="ghost">Cancel</Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </form> 
      </Form>
    </div>
  );
}

export default CreatePage;
