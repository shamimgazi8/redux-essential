"use client";
/* eslint-disable */
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import App from "./App";
import "./globals.css";
import { makeStore } from "./lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={makeStore()}>
      <html lang="en">
        <App children={children} />
      </html>
    </Provider>
  );
}
