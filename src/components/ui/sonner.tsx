"use client";
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
import CustomToast from "./CustomToast"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "right-[0rem]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// Helper to show a custom toast everywhere
export function showToast({ title, description }: { title: string; description?: string }) {
  return toast.custom((t) => (
    <CustomToast
      title={title}
      description={description}
      onClose={() => toast.dismiss(t)}
    />
  ));
}

export { Toaster }
