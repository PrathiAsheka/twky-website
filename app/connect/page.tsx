import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";

export const metadata: Metadata = {
  title: "Connect — They Will Know You",
  description: "Save our details, follow along, or send us a quick note.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
