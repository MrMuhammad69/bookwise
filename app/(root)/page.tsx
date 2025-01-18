import BookList from "@/components/global/BookList";
import BookOverView from "@/components/global/bookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/lib/drizzle";
import { users } from "@/lib/schema";

export default async function  Home() {
  const result = await db.select().from(users)
  return (
    <>
      <BookOverView {...sampleBooks[0]} />
      <BookList title="Popular books" books={sampleBooks} containerClassName="mt-28" />
    </>
  );
}
