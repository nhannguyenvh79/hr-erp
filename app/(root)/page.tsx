"use client";

import authAPI from "@/lib/apis/authAPI";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div className="accordion-group">
      <div className="accordion">
        <input type="checkbox" id="accordion-1" className="accordion-toggle" />
        <label htmlFor="accordion-1" className="accordion-title">
          Toggle Accordion 1
        </label>
        <div className="accordion-content">
          <div className="min-h-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus iusto laborum autem placeat aspernatur inventore eius
            deleniti reprehenderit? Numquam commodi totam mollitia quod
          </div>
        </div>
      </div>
      <div className="accordion">
        <input type="checkbox" id="accordion-2" className="accordion-toggle" />
        <label htmlFor="accordion-2" className="accordion-title">
          Toggle Accordion 2
        </label>
        <div className="accordion-content">
          <div className="min-h-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            necessitatibus iusto laborum autem placeat aspernatur inventore eius
            deleniti reprehenderit? Numquam commodi totam mollitia quo
          </div>
        </div>
      </div>
    </div>
  );
}
