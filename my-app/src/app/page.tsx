"use client";

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar'

import HeroSection from '@/components/HeroSection'
import React from 'react'

export default function Page({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/signUp"];
  return (
    <>
      {!hideNavbarRoutes.includes(pathname) && <Navbar />}
      {children}
        <HeroSection/>
    </>
  )
}
