"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
interface DynamicBreadcrumbProps {
  nameMap?: Record<string, string>;
}

export function DynamicBreadcrumb({ nameMap = {} }: DynamicBreadcrumbProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    const label =
      nameMap[segment] || (!isNaN(Number(segment)) ? `#${segment}` : segment);

    return { href, label, isLast };
  });

  if (!breadcrumbItems.length) return null;

  return (
    <Breadcrumb className="hidden sm:block">
      <BreadcrumbList>
        {breadcrumbItems.map((item, i) => (
          <BreadcrumbItem key={i}>
            {item.isLast ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
