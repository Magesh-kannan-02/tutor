import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { EditPenIcon } from "@/assets";

interface EditableProfileAvatarProps {
  value?: string;
  onChange?: (file: File, preview: string) => void;
  defaultImage?: string;
  size?: number;
  className?: string;
  editbuttonClassName?: string;
  imgClassName?: string;
  baseClassName?: string;
}

export const ProfileAvatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  EditableProfileAvatarProps
>(
  (
    {
      value,
      onChange,
      defaultImage = "",
      size = 112,
      className,
      editbuttonClassName,
      imgClassName,
      baseClassName,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [preview, setPreview] = React.useState(value || defaultImage);

    /* sync external value */
    React.useEffect(() => {
      if (value) setPreview(value);
    }, [value]);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file, url);
    };

    return (
      <div 
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: size, height: size }} {...props}
      >
        {/* GREEN RING */}
        <div
          className={cn(
            "absolute inset-0 rounded-full border-[0.625rem] border-primary-200",
            baseClassName
          )}
        />

        {/* AVATAR */}
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(
            "relative z-10 overflow-hidden rounded-full",
            className
          )}
          style={{ width: size - 16, height: size - 16 }}
        >
          <AvatarPrimitive.Image
            src={preview}
            alt="profile"
            className={cn("h-full w-full object-cover", imgClassName)}
          />
        </AvatarPrimitive.Root>

        {/* EDIT BUTTON */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={cn(
            "absolute -bottom-3 z-20 flex h-[2.813rem] w-[2.813rem] items-center justify-center rounded-full bg-content1-foreground",
            editbuttonClassName
          )}
        >
          <EditPenIcon className="text-primary" />
        </button>

        {/* FILE INPUT */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleSelect}
        />
      </div>
    );
  }
);
