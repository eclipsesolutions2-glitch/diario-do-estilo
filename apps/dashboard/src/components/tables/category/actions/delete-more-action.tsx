"use client";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";
import { action } from "@/core/actions";
import { useState } from "react";

interface DeleteMoreActionProps {
    slug: string;
}

export function DeleteMoreAction({ slug }: DeleteMoreActionProps) {
    const [showModal, setShowModal] = useState(false);
    const handleDelete = async () => {
        const result = await action.api.category.delete({ slug });

        if (!result.success) {
            toast.error(result.error);
            return;
        }
        toast.success(result.message);

        setShowModal(false);
    };
    return (
        <AlertDialog open={showModal} onOpenChange={setShowModal}>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Trash2 className="h-4 w-4" />
                    <span>Eliminar</span>
                </DropdownMenuItem>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tem certeza que deseja eliminar esta categoria?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Esta ação não pode ser desfeita. A categoria será
                        removida permanentemente e todos os dados associados
                        serão eliminados.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Eliminar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
