
import { useState } from "react";
import { Check, Plus, Search, Trash, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Student } from "@/lib/types";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

// Sample data
const SAMPLE_STUDENTS: Student[] = [
  { id: "1", name: "John Doe", rollNumber: "S001", class: "10A", gender: "Male", contactNumber: "123-456-7890" },
  { id: "2", name: "Jane Smith", rollNumber: "S002", class: "10A", gender: "Female", contactNumber: "123-456-7891" },
  { id: "3", name: "Sam Johnson", rollNumber: "S003", class: "10B", gender: "Male", contactNumber: "123-456-7892" },
  { id: "4", name: "Emma Wilson", rollNumber: "S004", class: "10B", gender: "Female", contactNumber: "123-456-7893" },
  { id: "5", name: "Alex Brown", rollNumber: "S005", class: "11A", gender: "Male", contactNumber: "123-456-7894" },
  { id: "6", name: "Olivia Davis", rollNumber: "S006", class: "11A", gender: "Female", contactNumber: "123-456-7895" },
  { id: "7", name: "James Miller", rollNumber: "S007", class: "11B", gender: "Male", contactNumber: "123-456-7896" },
  { id: "8", name: "Sophia Martinez", rollNumber: "S008", class: "11B", gender: "Female", contactNumber: "123-456-7897" },
];

const Students = () => {
  const [students, setStudents] = useState<Student[]>(SAMPLE_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  
  // Filter students based on search query
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.class.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddStudent = (data: Omit<Student, "id">) => {
    // In a real app, this would be an API call
    const newStudent: Student = {
      id: `S${(students.length + 1).toString().padStart(3, '0')}`,
      ...data,
    };
    
    setStudents([...students, newStudent]);
    setAddDialogOpen(false);
    toast({
      title: "Success",
      description: `Student ${data.name} has been added.`,
    });
  };
  
  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter(student => student.id !== id));
    toast({
      title: "Student Deleted",
      description: "The student has been removed from the system.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <p className="text-muted-foreground">
            Manage student information and records
          </p>
        </div>
        
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enter the student details below to add them to the system.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input id="name" placeholder="Enter full name" />
              </div>
              
              <div className="space-y-2">
                <FormLabel htmlFor="rollNumber">Roll Number</FormLabel>
                <Input id="rollNumber" placeholder="Enter roll number" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormLabel htmlFor="class">Class</FormLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10A">10A</SelectItem>
                      <SelectItem value="10B">10B</SelectItem>
                      <SelectItem value="11A">11A</SelectItem>
                      <SelectItem value="11B">11B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="gender">Gender</FormLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <FormLabel htmlFor="contactNumber">Contact Number</FormLabel>
                <Input id="contactNumber" placeholder="Enter contact number" />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                // Simulate adding a student
                handleAddStudent({
                  name: "New Student", 
                  rollNumber: `S${(students.length + 1).toString().padStart(3, '0')}`, 
                  class: "10A", 
                  gender: "Male", 
                  contactNumber: "123-456-7899"
                });
              }}>
                Add Student
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Student Directory</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search students..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll #</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-24">
                    No students found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.rollNumber}</TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.contactNumber}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        <Trash className="h-4 w-4 text-red-500" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Students;
