import { useState } from "react";

export const useVerse = () => {
  const [verseText, setVerseText] = useState("");
  const [verseRef, setVerseRef] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchVerse = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const data = await res.json();
      const verse = data[0];
      setVerseText(verse?.text || "No verse found");
      setVerseRef(
        verse ? `${verse.bookname} ${verse.chapter}:${verse.verse}` : ""
      );
    } catch {
      setVerseText("Error fetching verse...");
      setVerseRef("");
    } finally {
      setLoading(false);
    }
  };

  return { verseText, verseRef, fetchVerse, loading };
};
