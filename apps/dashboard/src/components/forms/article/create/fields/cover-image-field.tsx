import { AlertCircleIcon, ImageIcon, UploadIcon, X } from "lucide-react";
import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "@workspace/ui/components/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { useFileUpload } from "@/core/hooks/use-file-upload";
import { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";

export default function CoverImageField({
  form,
}: {
  form: UseFormReturn<CreateArticleSchemaValues>;
}) {
  const maxSizeMB = 2;
  const maxSize = maxSizeMB * 1024 * 1024; // 2MB default
  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  });

  const previewUrl = files[0]?.preview || null;

  return (
    <FormField
      control={form.control}
      name="cover_image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Capa</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2">
              <div className="relative">
                {/** biome-ignore lint/a11y/noStaticElementInteractions: false */}
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  data-dragging={isDragging || undefined}
                  className="relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-input p-4 transition-colors has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
                >
                  <input
                    {...getInputProps()}
                    onChange={(e) =>
                      field.onChange(e.target.files?.[0] || null)
                    }
                    className="sr-only"
                    aria-label="Upload image file"
                  />
                  {previewUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Image
                        src={previewUrl}
                        alt={files[0]?.file?.name || "Uploaded image"}
                        fill
                        className="mx-auto max-h-full rounded object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                      <div
                        className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-lg border bg-background"
                        aria-hidden="true"
                      >
                        <ImageIcon className="size-4 opacity-60" />
                      </div>
                      <p className="mb-1.5 text-sm font-medium">
                        Deixe sua imagem aqui
                      </p>
                      <p className="text-xs text-muted-foreground">
                        SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={openFileDialog}
                      >
                        <UploadIcon
                          className="-ms-1 size-4 opacity-60"
                          aria-hidden="true"
                        />
                        Selecione a imagem
                      </Button>
                    </div>
                  )}

                  {previewUrl && (
                    <div className="absolute top-4 right-4">
                      <button
                        type="button"
                        className="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        onClick={() => files[0]?.id && removeFile(files[0]?.id)}
                        aria-label="Remove image"
                      >
                        <X className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}

                  {errors.length > 0 && (
                    <div
                      className="flex items-center gap-1 text-xs text-destructive"
                      role="alert"
                    >
                      <AlertCircleIcon className="size-3 shrink-0" />
                      <span>{errors[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
