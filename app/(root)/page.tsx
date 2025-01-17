import BookList from "@/components/global/BookList";
import BookOverView from "@/components/global/bookOverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverView {...sampleBooks[0]} />
      <BookList title="Popular books" books={sampleBooks} containerClassName="mt-28" />
    </>
  );
}
