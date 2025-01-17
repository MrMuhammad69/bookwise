import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSVG";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";
const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: "book-cover_extra_small",
    small: "book-cover_small",
    medium: "book-cover_medium",
    regular: "book-cover_regular",
    wide: "book-cover_wide",
  };
type Props = {
 className?: string
 variant?: BookCoverVariant
 coverColor: string
 coverUrl: string   
}
const BookCover = ({coverColor = '#012B48',coverUrl = 'https://placdeholder.co/600x400',variant = 'regular',className}:Props) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant],className)}>
      <BookCoverSvg coverColor={coverColor}/>
      <div className="absolute z-10" style={{left: '12%', width: '87.5%', height: '88%'}}>
        <Image src={coverUrl} alt='book cover' fill className="rounded-sm object-fill" />

      </div>
    </div>
  )
}

export default BookCover