"use client"
import { action } from "@/core/actions";
import { updateProfileSchema, UpdateProfileSchemaValues } from "@/core/schemas/user/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Spinner } from "@workspace/ui/components/spinner";
import { RefreshCcw, Save } from "lucide-react";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

interface ProfileInfoFormProps {
    defaultValues: UpdateProfileSchemaValues;
}

export function ProfileInfoForm({ defaultValues }: ProfileInfoFormProps) {
    const form = useForm<UpdateProfileSchemaValues>({
        mode: "all",
        resolver: zodResolver(updateProfileSchema),
        defaultValues,
    });

    const onSubmit = async (data: UpdateProfileSchemaValues) => {
        const result = await action.api.user.profile.update(data);

        if (!result.success) {
            toast.error(result.error);
            return;
        }

        toast.success(result.message);
        form.reset(data);
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome completo</FormLabel>
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

                    <FormField
                        name="bio"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Fale um pouco sobre você..."
                                        maxLength={125}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="username"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome de usuário</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Ex: joaosilva"
                                        autoComplete="username"
                                        disabled
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
                                        disabled
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <p className="text-xs tracking-wide text-muted-foreground font-bold">
                    Nota: Email não pode ser alterado
                </p>

                <div className="flex items-center gap-3">
                    <Button
                        type="submit"
                        disabled={
                            !form.formState.isDirty ||
                            form.formState.isSubmitting
                        }
                        className="text-white"
                    >
                        {form.formState.isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <Spinner />
                                <span>Salvando...</span>
                            </div>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                Salvar Alterações
                            </>
                        )}
                    </Button>

                    <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        title="Restaurar dados originais"
                        disabled={!form.formState.isDirty}
                        onClick={() => form.reset(defaultValues)}
                    >
                        <RefreshCcw />
                    </Button>
                </div>
            </form>
        </Form>
    );
}