"use client";
import {
  signInSchema,
  SignInSchemaValues,
} from "@/core/schemas/auth/sign-in.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import { Spinner } from "@workspace/ui/components/spinner";
import { Input } from "@workspace/ui/components/input";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { action } from "@/core/actions";

export const SignInForm = () => {
  const router = useRouter();
  const form = useForm<SignInSchemaValues>({
    mode: "all",
    resolver: zodResolver(signInSchema),
    criteriaMode: "firstError",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignInSchemaValues) => {
    const result = await action.api.auth.signIn({
      email: formData.email,
      password: formData.password,
    });

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    form.reset();
    toast.success(result.message);
    router.replace("/");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="exemplo@email.com"
                  autoComplete="email"
                  aria-autocomplete="list"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Senha</FormLabel>
                <Link
                  href="/forgot"
                  className="text-sm text-primary hover:text-brand-700 hover:underline"
                  as="/forgot"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Pelo menos 8 caractes"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? (
            <div className="flex items-center">
              <Spinner className="mr-2 inline-block" />
              <span>Entrando...</span>
            </div>
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </Form>
  );
};
