import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
  title: "Connect",
  description: "Save our details, follow along, or send us a quick note.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
