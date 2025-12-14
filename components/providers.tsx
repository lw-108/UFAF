"use client";

import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { RadixProvider } from "@radix-ui/react-id";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RadixProvider unstable_idMode="logic">
      {children}
    </RadixProvider>
  );
}
