import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function BreadcrumbDemo({
  currentPath,
  breadcrumData,
}: {
  currentPath: string;
  breadcrumData: { title: string; href: string }[][];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumData.map((breadcrum, i) => {
          // 하나의 경로만 가질 경우
          if (breadcrum.length === 1) {
            return (
              <>
                <BreadcrumbItem key={breadcrum[0].title}>
                  {breadcrum[0].href === currentPath ? (
                    <BreadcrumbPage>{breadcrum[0].title}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrum[0].href}>
                      {breadcrum[0].title}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {i !== breadcrumData.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          }
          return (
            <>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">더 보기</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {breadcrum.map((data) => (
                      <DropdownMenuItem key={data.title}>
                        <BreadcrumbLink href={data.href}>
                          {data.title}
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              {i !== breadcrumData.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbDemo;
