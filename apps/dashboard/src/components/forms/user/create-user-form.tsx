"use client";

import {
  registerUserSchema,
  RegisterUserSchemaValues,
} from "@/core/schemas/auth/register-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Spinner } from "@workspace/ui/components/spinner";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";

interface CreateUserFormProps {
  onFinishSubmit?: () => void;
}

export function CreateUserForm({ onFinishSubmit }: CreateUserFormProps) {
  const form = useForm({
    mode: "all",
    criteriaMode: "firstError",
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      role: "reader",
    },
  });

  const name = useWatch({ control: form.control, name: "name" });

  useEffect(() => {
    if (!name) {
      form.setValue("username", "");
      return;
    }

    const username = name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ".")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    form.setValue("username", username);
  }, [name, form]);

  const onSubmit = async (formData: RegisterUserSchemaValues) => {
    toast.success("Serviço indisponivel.");
    /*  const result = await action.api.user.create({
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            passwordConfirmation: formData.passwordConfirmation,
            role: formData.role,
        });

        if (!result.success) {
            toast.error(result.error);
            return;
        }

        toast.success(result.message); */
    console.log({ formData });

    onFinishSubmit?.();
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome + Username */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Nome completo</FormLabel>
                <div className="text-sm text-muted-foreground">
                  Username:{" "}
                  <span className="font-medium">
                    {form.watch("username") || "---"}
                  </span>
                </div>
              </div>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex: João da Silva"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* E-mail */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="exemplo@dominio.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Senha */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Mínimo de 8 caracteres"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirmar Senha */}
        <FormField
          name="passwordConfirmation"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Repita sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Role */}
        <FormField
          name="role"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permissão</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value: RegisterUserSchemaValues["role"]) =>
                    form.setValue("role", value)
                  }
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a permissão" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="reader">Leitor</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botão */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? (
            <div className="flex items-center gap-2">
              <Spinner />
              <span>Cadastrando usuário...</span>
            </div>
          ) : (
            "Criar conta"
          )}
        </Button>
      </form>
    </Form>
  );
}
