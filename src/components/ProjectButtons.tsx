"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectButtons() {
  return (
    <>
      <div className="pt-2">
        <Button variant="outline" size="sm" asChild>
          <Link href="https://github.com/rchrdnm/s3-static-site" target="_blank" rel="noopener noreferrer">
            View Source <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Button variant="outline" asChild>
        <Link href="https://github.com/rchrdnm" target="_blank" rel="noopener noreferrer">
          View More on GitHub <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </>
  )
} 