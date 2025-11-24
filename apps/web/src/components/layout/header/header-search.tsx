"use client";

import { Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { ScrollArea } from "@workspace/ui/components/scroll-area";

export function HeaderSearch() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const resultados = [
    {
      titulo: "Tendências 2025",
      categoria: "Tendências",
      destaque: "Estilo e sustentabilidade em alta",
    },
    {
      titulo: "A cultura do vestir",
      categoria: "Cultura",
      destaque: "Como a arte influencia o design contemporâneo",
    },
    {
      titulo: "Moda e crítica social",
      categoria: "Crítica Social",
      destaque: "O impacto das marcas na inclusão e diversidade",
    },
    {
      titulo: "Editorial: Minimalismo consciente",
      categoria: "Tendências",
      destaque: "Menos consumo, mais propósito",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-700 hover:text-primary"
        >
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="lg:min-w-2xl max-w-xl p-0 overflow-hidden border border-gray-200 shadow-2xl bg-white backdrop-blur-md"
      >
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">Area de search</DialogTitle>
          <DialogDescription className="sr-only">
            Area de search
          </DialogDescription>
        </DialogHeader>
        <div className="relative p-4 border-b border-gray-200 flex items-center gap-2">
          <Search className="absolute top-1/2 left-4 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar artigos, coleções ou temas..."
            className="border-none shadow-none pl-8 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-sm text-gray-800 placeholder:text-gray-400"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <Badge
            variant="outline"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-xs text-gray-500 bg-gray-100 border-gray-300"
          >
            ESC
          </Badge>
        </div>

        <ScrollArea className="max-h-[300px] bg-white">
          <div className="p-3 space-y-3">
            <p className="text-xs uppercase text-gray-500 px-2 tracking-wide">
              Explorar
            </p>

            {resultados.map((item) => (
              <div
                key={item.titulo}
                className="flex flex-col px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition"
              >
                <span className="text-sm font-medium text-gray-800">
                  {item.titulo}
                </span>
                <span className="text-xs text-gray-500">
                  {item.categoria} — {item.destaque}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t border-gray-200 p-3 text-center text-xs text-gray-500">
          Descubra mais no{" "}
          <span className="text-primary font-semibold">Diário do Estilo</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
