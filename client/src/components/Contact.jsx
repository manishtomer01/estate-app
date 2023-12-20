import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Contact({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [message, setMessage] = useState("");
  console.log("message >>>", message);
  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchLandLord();
  }, [listing.userRef]);
  return (
    <>
      {landLord && (
        <div className="flex flex-col gap-4">
          <p>
            Contact <span className="font-semibold">{landLord.username}</span>{" "}
            for {""}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            rows="2"
            value={message}
            placeholder="enter your message here...."
            className="w-full p-3 rounded-xl focus:outline-sky-700"
          ></textarea>
          <Link
            to={`mailto:${landLord.email}?subject=Regarding${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
