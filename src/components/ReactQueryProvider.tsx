
"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ReactQueryProvider({ children }: Props) {
  // Create QueryClient only once per component lifetime
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
