import { useEffect, useState } from "react";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [message, setMessage] = useState(""); // 👉 state để lưu dữ liệu từ BE

  console.log("🚀 ~ DocsPage ~ message:", message);

  useEffect(() => {
    fetch("/api/hello") // Nếu bạn đã setup proxy trong vite.config.ts
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Gọi API bị lỗi:", err));
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Blog</h1>
          <p className="mb-4 text-gray-600">Backend nói: {message}</p>
          <Button className="bg-red-200">click me nè</Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
