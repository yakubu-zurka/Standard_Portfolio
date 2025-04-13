
import { useState } from "react";
import { Plus, Search, Trash, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormLabel } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { SchoolClass } from "@/lib/types";

// Sample data
const SAMPLE_CLASSES: SchoolClass[] = [
  { id: "1", name: "10A", teacher: "Mrs. Johnson", totalStudents: 32, attendanceRate: 94 },
  { id: "2", name: "10B", teacher: "Mr. Smith", totalStudents: 30, attendanceRate: 91 },
  { id: "3", name: "11A", teacher: "Ms. Davis", totalStudents: 28, attendanceRate: 88 },
  { id: "4", name: "11B", teacher: "Mr. Wilson", totalStudents: 31, attendanceRate: 92 },
  { id: "5", name: "12A", teacher: "Mrs. Anderson", totalStudents: 26, attendanceRate: 96 },
  { id: "6", name: "12B", teacher: "Mr. Thomas", totalStudents: 29, attendanceRate: 90 },
];

const Classes = () => {
  const [classes, setClasses] = useState<SchoolClass[]>(SAMPLE_CLASSES);
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  
  // Filter classes based on search query
  const filteredClasses = classes.filter(cls => 
    cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cls.teacher.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddClass = (data: Omit<SchoolClass, "id">) => {
    // In a real app, this would be an API call
    const newClass: SchoolClass = {
      id: `${classes.length + 1}`,
      ...data,
    };
    
    setClasses([...classes, newClass]);
    setAddDialogOpen(false);
    toast({
      title: "Success",
      description: `Class ${data.name} has been added.`,
    });
  };
  
  const handleDeleteClass = (id: string) => {
    setClasses(classes.filter(cls => cls.id !== id));
    toast({
      title: "Class Deleted",
      description: "The class has been removed from the system.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
          <p className="text-muted-foreground">
            Manage class information and assignments
          </p>
        </div>
        
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Class</DialogTitle>
              <DialogDescription>
                Enter the class details below to add it to the system.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <FormLabel htmlFor="name">Class Name</FormLabel>
                <Input id="name" placeholder="e.g., 10A" />
              </div>
              
              <div className="space-y-2">
                <FormLabel htmlFor="teacher">Teacher Name</FormLabel>
                <Input id="teacher" placeholder="Enter teacher's name" />
              </div>
              
              <div className="space-y-2">
                <FormLabel htmlFor="totalStudents">Total Students</FormLabel>
                <Input 
                  id="totalStudents" 
                  type="number" 
                  placeholder="Enter number of students"
                  min="1"
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                // Simulate adding a class
                handleAddClass({
                  name: "New Class", 
                  teacher: "New Teacher", 
                  totalStudents: 25, 
                  attendanceRate: 0
                });
              }}>
                Add Class
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Class Directory</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search classes..."
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
                <TableHead>Class</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Total Students</TableHead>
                <TableHead>Attendance Rate</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    No classes found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredClasses.map((cls) => (
                  <TableRow key={cls.id}>
                    <TableCell className="font-medium">{cls.name}</TableCell>
                    <TableCell>{cls.teacher}</TableCell>
                    <TableCell>{cls.totalStudents}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full max-w-24">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary" 
                              style={{ width: `${cls.attendanceRate}%` }}
                            />
                          </div>
                        </div>
                        <span>{cls.attendanceRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClass(cls.id)}
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

export default Classes;
