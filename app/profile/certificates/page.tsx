"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Eye } from "lucide-react"

export default function CertificatesPage() {
  // Mock data for certificates
  const certificates = [
    {
      id: "cert1",
      name: "Data Structures Mastery",
      issueDate: "March 20, 2023",
      issuer: "SRM University",
      course: "Data Structures - 1",
      downloadUrl: "#",
      previewUrl: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-template-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png",
    },
    {
      id: "cert2",
      name: "C Programming Expert",
      issueDate: "February 15, 2023",
      issuer: "SRM University",
      course: "C Programming",
      downloadUrl: "#",
      previewUrl: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-template-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png",
    },
    {
      id: "cert3",
      name: "Leadership Excellence",
      issueDate: "April 25, 2023",
      issuer: "SRM University",
      course: "Leadership & Management",
      downloadUrl: "#",
      previewUrl: "#",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate-template-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/profile"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Link>
          <h1 className="text-2xl font-bold mt-4">My Certificates</h1>
          <p className="text-gray-500">View and download all your earned certificates.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle>{certificate.name}</CardTitle>
                <CardDescription>Issued by {certificate.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-1">Course: {certificate.course}</p>
                <p className="text-sm text-gray-500">Issued on {certificate.issueDate}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={certificate.previewUrl}>
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={certificate.downloadUrl}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

