"use client"

import { useState } from "react"
import { Upload, Download, Trash2, Lock, Shield, Cloud, File, ImageIcon, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StoragePage() {
  const [storageUsed] = useState(2.4) // GB
  const [storageLimit] = useState(10) // GB

  const files = [
    { name: "contract-abi.json", size: "2.4 KB", type: "json", encrypted: true, uploaded: "2 hours ago" },
    { name: "whitepaper.pdf", size: "1.2 MB", type: "pdf", encrypted: true, uploaded: "1 day ago" },
    { name: "logo.png", size: "45 KB", type: "image", encrypted: true, uploaded: "3 days ago" },
    { name: "demo-video.mp4", size: "15.6 MB", type: "video", encrypted: true, uploaded: "1 week ago" },
    { name: "backup-keys.txt", size: "1.1 KB", type: "text", encrypted: true, uploaded: "2 weeks ago" },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      default:
        return <File className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Secure Storage</h1>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Cloud className="h-4 w-4" />
          AWS S3 Encrypted
        </Badge>
      </div>

      {/* Storage Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{storageUsed} GB</div>
            <Progress value={(storageUsed / storageLimit) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">{storageLimit - storageUsed} GB remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Files Encrypted</CardTitle>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{files.length}</div>
            <p className="text-xs text-muted-foreground">All files quantum-encrypted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Level</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Maximum</div>
            <p className="text-xs text-muted-foreground">Post-quantum encryption</p>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Files</CardTitle>
          <CardDescription>
            Upload files with automatic quantum-resistant encryption and signed URL generation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-medium">Drop files here or click to upload</p>
              <p className="text-sm text-muted-foreground">
                Files are automatically encrypted with post-quantum algorithms
              </p>
            </div>
            <Button className="mt-4">
              <Upload className="mr-2 h-4 w-4" />
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* File Management */}
      <Card>
        <CardHeader>
          <CardTitle>File Management</CardTitle>
          <CardDescription>Manage your encrypted files with secure signed URLs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Input placeholder="Search files..." className="flex-1" />
              <Button variant="outline">Filter</Button>
            </div>

            <div className="space-y-2">
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    {getFileIcon(file.type)}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • Uploaded {file.uploaded}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.encrypted && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Encrypted
                      </Badge>
                    )}
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Encryption</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Post-quantum cryptography (Kyber)</li>
                <li>• AES-256 symmetric encryption</li>
                <li>• End-to-end encryption</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Access Control</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Signed URLs with expiration</li>
                <li>• JWT-based authentication</li>
                <li>• Role-based permissions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Storage</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AWS S3 with server-side encryption</li>
                <li>• Redundant backups</li>
                <li>• 99.999999999% durability</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Compliance</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GDPR compliant</li>
                <li>• SOC 2 Type II certified</li>
                <li>• FIPS 140-2 Level 3</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
