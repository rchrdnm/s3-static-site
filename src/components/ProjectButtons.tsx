"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectButtonsProps {
  sourceUrl: string;
}

export function ProjectButtons({ sourceUrl }: ProjectButtonsProps) {
  return (
    <div className="pt-2">
      <Button variant="outline" size="sm" asChild>
        <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
          View Source <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
} 