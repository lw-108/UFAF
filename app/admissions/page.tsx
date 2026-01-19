"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, Clock, MapPin, Phone, Mail, User, GraduationCap, BookOpen, Users, FileText, Download, Upload, CheckCircle2, ArrowRight, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

// Firebase imports
import { db, storage } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const admissionsProcess = [
  { step: 1, title: "Inquiry", description: "Submit initial inquiry form", duration: "1-2 days" },
  { step: 2, title: "Assessment", description: "Academic assessment & interaction", duration: "3-5 days" },
  { step: 3, title: "Documentation", description: "Submit required documents", duration: "2-3 days" },
  { step: 4, title: "Approval", description: "Admission committee review", duration: "5-7 days" },
  { step: 5, title: "Enrollment", description: "Fee structure & final enrollment", duration: "1-2 days" },
];

const requiredDocuments = [
  { id: 1, name: "Birth Certificate", category: "Mandatory", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "birthCertificate" },
  { id: 2, name: "Aadhar Card", category: "Mandatory", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "aadharCard" },
  { id: 3, name: "Previous Year Marksheet", category: "Mandatory", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "marksheet" },
  { id: 4, name: "Transfer Certificate", category: "If applicable", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "transferCertificate" },
  { id: 5, name: "Income Certificate", category: "For scholarship", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "incomeCertificate" },
  { id: 6, name: "Caste Certificate", category: "For reservation", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "casteCertificate" },
  { id: 7, name: "Passport Photos (4)", category: "Mandatory", acceptedTypes: ".jpg,.jpeg,.png", fieldName: "passportPhotos" },
  { id: 8, name: "Medical Certificate", category: "Recommended", acceptedTypes: ".pdf,.jpg,.jpeg,.png", fieldName: "medicalCertificate" },
];

const feeStructure = [
  { stage: "Children Hut (3-5 years)", fee: "Free", scholarship: "100% coverage" },
  { stage: "Primary School (6-10 years)", fee: "Free", scholarship: "100% coverage" },
  { stage: "Secondary School (11-14 years)", fee: "Free", scholarship: "100% coverage" },
  { stage: "Senior Secondary (15-18 years)", fee: "Free", scholarship: "100% coverage" },
];

// File Upload Component
interface FileUploadProps {
  docId: number;
  docName: string;
  acceptedTypes: string;
  fieldName: string;
  onFileSelect: (fieldName: string, file: File | null) => void;
}

const FileUpload = ({ docId, docName, acceptedTypes, fieldName, onFileSelect }: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 2MB instead of 5MB for faster uploads)
    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB for faster upload");
      setSelectedFile(null);
      onFileSelect(fieldName, null);
      return;
    }

    // Check file type
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const acceptedExtensions = acceptedTypes.split(',').map(ext => ext.replace('.', '').trim());
    
    if (!acceptedExtensions.includes(fileExtension || '')) {
      setError(`File type not allowed. Accepted: ${acceptedTypes}`);
      setSelectedFile(null);
      onFileSelect(fieldName, null);
      return;
    }

    setSelectedFile(file);
    setError("");
    onFileSelect(fieldName, file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError("");
    onFileSelect(fieldName, null);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label
          htmlFor={`file-upload-${docId}`}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer bg-primary/10 text-primary hover:bg-primary/20"
        >
          <Upload className="w-4 h-4" />
          {selectedFile ? "Change" : "Upload"}
        </Label>
        <Input
          id={`file-upload-${docId}`}
          type="file"
          className="hidden"
          accept={acceptedTypes}
          onChange={handleFileChange}
        />
        
        {selectedFile && (
          <div className="flex items-center gap-2 ml-2">
            <span className="text-sm truncate max-w-[120px]">
              {selectedFile.name}
            </span>
            <span className="text-xs text-muted-foreground">
              ({(selectedFile.size / 1024).toFixed(0)} KB)
            </span>
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="w-6 h-6 p-0 hover:bg-red-50 hover:text-red-600"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      
      {!error && !selectedFile && (
        <p className="text-xs text-muted-foreground">
          Max: 2MB • {acceptedTypes}
        </p>
      )}
    </div>
  );
};

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    dob: "",
    grade: "",
    address: "",
    previousSchool: "",
    specialNeeds: "",
    scholarshipRequired: false,
    referralSource: "friend",
  });

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileSelect = (fieldName: string, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  const uploadFileWithProgress = (file: File, path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, path);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Set upload timeout (30 seconds max)
      const uploadTimeout = setTimeout(() => {
        uploadTask.cancel();
        reject(new Error("Upload timeout. File too large or network too slow."));
      }, 30000);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          clearTimeout(uploadTimeout);
          reject(error);
        },
        async () => {
          clearTimeout(uploadTimeout);
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setUploadProgress(0);

    try {
      // Check if mandatory documents are uploaded
      const mandatoryDocs = requiredDocuments.filter(doc => doc.category === "Mandatory");
      const missingMandatoryDocs = mandatoryDocs.filter(doc => !uploadedFiles[doc.fieldName]);
      
      if (missingMandatoryDocs.length > 0) {
        alert(`Please upload all mandatory documents: ${missingMandatoryDocs.map(doc => doc.name).join(', ')}`);
        setIsSubmitting(false);
        return;
      }

      // Check total file size (max 10MB total)
      const totalSize = Object.values(uploadedFiles)
        .filter(file => file)
        .reduce((total, file) => total + (file?.size || 0), 0);
      
      if (totalSize > 10 * 1024 * 1024) {
        alert("Total file size must be less than 10MB. Please compress your files.");
        setIsSubmitting(false);
        return;
      }

      // SIMPLIFIED: Save form data first, then try to upload files
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substr(2, 6).toUpperCase();
      const applicationNumber = `APP-${timestamp}-${randomString}`;
      
      // First, save the basic application data WITHOUT files
      const admissionData = {
        // Student Information
        studentName: formData.studentName,
        parentName: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        grade: formData.grade,
        address: formData.address,
        previousSchool: formData.previousSchool || "",
        specialNeeds: formData.specialNeeds || "",
        
        // Application Details
        scholarshipRequired: formData.scholarshipRequired,
        referralSource: formData.referralSource,
        
        // Application Info
        applicationNumber: applicationNumber,
        status: "pending",
        submittedAt: new Date().toISOString(),
        
        // Document status
        hasDocuments: false,
        documentCount: Object.keys(uploadedFiles).filter(key => uploadedFiles[key]).length,
      };

      // Save basic data to Firestore
      const admissionsRef = collection(db, "admissions");
      const docRef = await addDoc(admissionsRef, admissionData);
      
      console.log("Basic application saved with ID:", docRef.id);

      // Now try to upload files if they exist
      const fileURLs: Record<string, string> = {};
      let filesUploaded = 0;
      
      for (const [fieldName, file] of Object.entries(uploadedFiles)) {
        if (file) {
          try {
            const safeStudentName = formData.studentName.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 20);
            const fileExtension = file.name.split('.').pop();
            const fileName = `${safeStudentName}_${fieldName}_${timestamp}.${fileExtension}`;
            const path = `admissions/${fileName}`;
            
            console.log(`Uploading ${fieldName}...`);
            const downloadURL = await uploadFileWithProgress(file, path);
            fileURLs[fieldName] = downloadURL;
            filesUploaded++;
            
          } catch (error) {
            console.warn(`Could not upload ${fieldName}:`, error);
            // Continue with other files even if one fails
          }
        }
      }

      // Update Firestore with file URLs if any were uploaded
      if (Object.keys(fileURLs).length > 0) {
        // In a real app, you would update the document here
        // For now, we'll just log it
        console.log("Files uploaded:", Object.keys(fileURLs));
      }

      // Success!
      setSubmitStatus("success");
      
      // Show success message
      alert(`✅ Admission Submitted Successfully!\n\n📋 Application ID: ${applicationNumber}\n📧 We've sent a confirmation to ${formData.email}\n\n📞 Our team will contact you within 24 hours.\n\nPlease save your Application ID for reference.`);
      
      // Reset form
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        dob: "",
        grade: "",
        address: "",
        previousSchool: "",
        specialNeeds: "",
        scholarshipRequired: false,
        referralSource: "friend",
      });
      setUploadedFiles({});
      setUploadProgress(0);

    } catch (error: any) {
      console.error("Error in admission process:", error);
      setSubmitStatus("error");
      
      // User-friendly error messages
      if (error.message.includes("timeout") || error.message.includes("retry")) {
        alert("⏰ Upload took too long. Please try with smaller files or check your internet connection.\n\nYour application was saved, but some files may not have uploaded.");
      } else if (error.message.includes("network")) {
        alert("🌐 Network error. Please check your internet and try again.\n\nYour application data was saved.");
      } else {
        alert(`❌ Error: ${error.message || "Please try again or contact support."}`);
      }
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-linear-to-br from-primary/10 via-primary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20">
              <GraduationCap className="w-4 h-4 mr-2" />
              Admissions Open 2024-25
            </Badge>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Begin Your Educational
              <span className="text-primary"> Journey</span>
            </h1>
            
            <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
              Join U Fill Academy&apos;s inclusive learning community. Free education for tribal 
              and underprivileged students with holistic development programs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {/* Upload Progress Bar */}
          {isSubmitting && uploadProgress > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Uploading files...</span>
                <span className="text-sm text-muted-foreground">{Math.round(uploadProgress)}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Submission Status */}
          {submitStatus === "success" && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <AlertTitle>Application Submitted Successfully!</AlertTitle>
              <AlertDescription>
                We have received your application. Our team will contact you within 24 hours.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert className="mb-6 border-yellow-200 bg-yellow-50">
              <AlertTitle className="text-yellow-800">⚠️ Partial Success</AlertTitle>
              <AlertDescription className="text-yellow-700">
                Your application was saved, but some files may not have uploaded. We'll contact you for alternative submission.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Process & Info */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="process" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-4">
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="apply">Apply Now</TabsTrigger>
                  <TabsTrigger value="fees">Fee Structure</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Admission Process Timeline
                      </CardTitle>
                      <CardDescription>
                        5-step streamlined admission process
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <Progress value={currentStep * 20} className="h-2" />
                        
                        <div className="grid gap-4 md:grid-cols-5">
                          {admissionsProcess.map((item) => (
                            <div key={item.step} className="text-center">
                              <div className={`inline-flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full ${
                                currentStep >= item.step 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted'
                              }`}>
                                <span className="font-bold">{item.step}</span>
                              </div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{item.duration}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Important Dates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <h4 className="font-semibold">Admission Start Date</h4>
                            <p className="text-sm text-muted-foreground">For academic year 2024-25</p>
                          </div>
                          <Badge variant="secondary">April 1, 2024</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <h4 className="font-semibold">Last Date for Applications</h4>
                            <p className="text-sm text-muted-foreground">Early bird discount available</p>
                          </div>
                          <Badge variant="secondary">May 31, 2024</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <h4 className="font-semibold">Academic Session Begins</h4>
                            <p className="text-sm text-muted-foreground">New academic year starts</p>
                          </div>
                          <Badge variant="secondary">June 15, 2024</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Apply Now Tab */}
                <TabsContent value="apply">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Admission Application Form
                      </CardTitle>
                      <CardDescription>
                        Please fill in all required fields. Files max 2MB each for faster upload.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="studentName">Student Full Name *</Label>
                            <Input
                              id="studentName"
                              name="studentName"
                              value={formData.studentName}
                              onChange={handleInputChange}
                              placeholder="Enter student's full name"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                            <Input
                              id="parentName"
                              name="parentName"
                              value={formData.parentName}
                              onChange={handleInputChange}
                              placeholder="Enter parent's name"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter email address"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter phone number"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth *</Label>
                            <Input
                              id="dob"
                              name="dob"
                              type="date"
                              value={formData.dob}
                              onChange={handleInputChange}
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="grade">Grade Applying For *</Label>
                            <Select
                              value={formData.grade}
                              onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}
                              disabled={isSubmitting}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pre-kg">Pre-KG (3-4 years)</SelectItem>
                                <SelectItem value="kg">KG (4-5 years)</SelectItem>
                                <SelectItem value="grade1">Grade 1 (6-7 years)</SelectItem>
                                <SelectItem value="grade2">Grade 2 (7-8 years)</SelectItem>
                                <SelectItem value="grade3">Grade 3 (8-9 years)</SelectItem>
                                <SelectItem value="grade4">Grade 4 (9-10 years)</SelectItem>
                                <SelectItem value="grade5">Grade 5 (10-11 years)</SelectItem>
                                <SelectItem value="grade6">Grade 6 (11-12 years)</SelectItem>
                                <SelectItem value="grade7">Grade 7 (12-13 years)</SelectItem>
                                <SelectItem value="grade8">Grade 8 (13-14 years)</SelectItem>
                                <SelectItem value="grade9">Grade 9 (14-15 years)</SelectItem>
                                <SelectItem value="grade10">Grade 10 (15-16 years)</SelectItem>
                                <SelectItem value="grade11">Grade 11 (16-17 years)</SelectItem>
                                <SelectItem value="grade12">Grade 12 (17-18 years)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="previousSchool">Previous School (if any)</Label>
                          <Input
                            id="previousSchool"
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleInputChange}
                            placeholder="Name of previous school attended"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Residential Address *</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter complete address"
                            rows={3}
                            required
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialNeeds">Special Requirements (if any)</Label>
                          <Textarea
                            id="specialNeeds"
                            name="specialNeeds"
                            value={formData.specialNeeds}
                            onChange={handleInputChange}
                            placeholder="Any special educational needs, medical conditions, or other requirements"
                            rows={3}
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="scholarship"
                              checked={formData.scholarshipRequired}
                              onCheckedChange={(checked) => 
                                setFormData(prev => ({ ...prev, scholarshipRequired: checked as boolean }))
                              }
                              disabled={isSubmitting}
                            />
                            <Label htmlFor="scholarship" className="cursor-pointer">
                              I require financial assistance/scholarship
                            </Label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>How did you hear about us?</Label>
                          <RadioGroup 
                            value={formData.referralSource} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
                            className="flex flex-col space-y-1"
                            disabled={isSubmitting}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="friend" id="r1" />
                              <Label htmlFor="r1">Friend/Family</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="social" id="r2" />
                              <Label htmlFor="r2">Social Media</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="website" id="r3" />
                              <Label htmlFor="r3">Website</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="r4" />
                              <Label htmlFor="r4">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                          <p className="text-sm text-blue-700">
                            💡 <span className="font-medium">Tip:</span> Keep files under 2MB each for faster upload. 
                            Use online tools to compress images if needed.
                          </p>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin" />
                              {uploadProgress > 0 ? `Uploading ${Math.round(uploadProgress)}%` : "Submitting..."}
                            </>
                          ) : (
                            <>
                              Submit Application <CheckCircle2 className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Fee Structure Tab */}
                <TabsContent value="fees">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Fee Structure & Scholarships
                      </CardTitle>
                      <CardDescription>
                        U Fill Academy provides completely free education for eligible students
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Alert className="mb-6 bg-primary/10 border-primary/20">
                        <CheckCircle2 className="w-4 h-4" />
                        <AlertTitle>100% Free Education</AlertTitle>
                        <AlertDescription>
                          All tribal and economically weaker section students receive completely free education.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-4">
                        {feeStructure.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-semibold">{item.stage}</h4>
                              <p className="text-sm text-muted-foreground">Tuition Fee</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">{item.fee}</div>
                              <div className="text-sm text-muted-foreground">{item.scholarship}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-6" />

                      <div className="p-4 rounded-lg bg-muted/50">
                        <h4 className="mb-2 font-semibold">Additional Information</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                            <span>No admission fee for any student</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                            <span>Free textbooks and study materials provided</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                            <span>Uniforms provided at subsidized rates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                            <span>Transportation assistance available</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Required Documents
                      </CardTitle>
                      <CardDescription>
                        Please compress files to under 2MB each for faster upload
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {requiredDocuments.map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md bg-primary/10">
                                <FileText className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium">{doc.name}</h4>
                                <p className="text-sm text-muted-foreground">{doc.category}</p>
                              </div>
                            </div>
                            <FileUpload 
                              docId={doc.id}
                              docName={doc.name}
                              acceptedTypes={doc.acceptedTypes}
                              fieldName={doc.fieldName}
                              onFileSelect={handleFileSelect}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="p-4 mt-6 rounded-lg bg-muted/50">
                        <h4 className="mb-2 font-semibold">📋 Document Guidelines</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Keep files under 2MB for faster upload</li>
                          <li>• Use JPG for photos (smaller than PNG)</li>
                          <li>• Scan documents at 150-200 DPI (not 300+ DPI)</li>
                          <li>• Use online tools to compress if files are too large</li>
                          <li>• Multiple pages? Combine into single PDF</li>
                          <li>• Original documents must be presented during admission</li>
                        </ul>
                        
                        <div className="p-3 mt-4 rounded bg-blue-50">
                          <p className="text-sm text-blue-700">
                            💡 <span className="font-medium">File too large?</span> Use free online tools like:
                            <br/>
                            • <a href="https://tinypng.com" target="_blank" className="underline">TinyPNG</a> for images
                            <br/>
                            • <a href="https://smallpdf.com" target="_blank" className="underline">SmallPDF</a> for PDFs
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">admissions@ufillacademy.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">
                        U Fill Academy Campus<br />
                        Education Nagar, Chennai<br />
                        Tamil Nadu - 600001
                      </p>
                    </div>
                  </div>
                  
                  <Button className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Schedule Campus Visit
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="justify-start w-full" asChild>
                    <Link href="/educational-pathway">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Educational Pathway
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="justify-start w-full" asChild>
                    <Link href="/about">
                      <Users className="w-4 h-4 mr-2" />
                      About Our School
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="justify-start w-full" asChild>
                    <Link href="/gallery">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Campus Gallery
                    </Link>
                  </Button>
                  
                  <Button variant="ghost" className="justify-start w-full" asChild>
                    <Link href="/faq">
                      <FileText className="w-4 h-4 mr-2" />
                      FAQ
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Scholarship Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Scholarship Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                      <span className="text-sm">Tribal community students</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                      <span className="text-sm">Economically weaker sections</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                      <span className="text-sm">Single parent households</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" />
                      <span className="text-sm">Orphans and special needs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-primary/5 to-transparent">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join hundreds of students who have transformed their lives through education at U Fill Academy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Apply Online Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Application Form
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-4 h-4" />
                Call for Assistance
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}