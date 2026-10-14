"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "birthdayMessages"),
      orderBy("createdAt", "desc")
    );

    return onSnapshot(messagesQuery, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#F9E6A8] px-3 py-12 text-black md:px-12 lg:px-16">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#4D2A00]">
        Birthday wishes 
      </h1>

      {loading ? (
        <p className="text-center text-[#4D2A00">Loading wishes...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-[#4D2A00">No wishes yet.</p>
      ) : (
        <ul className="mx-auto max-w-2xl space-y-4">
          {messages.map((wish) => (
            <li key={wish.id} className="rounded-lg border border-[#CC6F00] p-4">
              <p className="mt-2 font-semibold text-[#4D2A00">— {wish.name}</p>
              <p>{wish.message}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}