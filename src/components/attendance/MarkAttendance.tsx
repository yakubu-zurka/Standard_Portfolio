
import { useState } from "react";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Student, AttendanceRecord } from "@/lib/types";

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

const SAMPLE_CLASSES = ["10A", "10B", "11A", "11B", "12A", "12B"];

const MarkAttendance = () => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Filter students by selected class
  const filteredStudents = SAMPLE_STUDENTS.filter(
    student => student.class === selectedClass
  );
  
  const handlePreviousDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setCurrentDate(prevDay);
  };
  
  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay);
  };
  
  const handleAttendanceChange = (studentId: string, status: "present" | "absent" | "late") => {
    const updatedRecords = [...attendanceRecords];
    const existingRecordIndex = updatedRecords.findIndex(
      record => record.studentId === studentId
    );
    
    if (existingRecordIndex !== -1) {
      updatedRecords[existingRecordIndex].status = status;
    } else {
      updatedRecords.push({
        id: `${Date.now()}-${studentId}`,
        studentId,
        date: format(currentDate, "yyyy-MM-dd"),
        status,
        notes: ""
      });
    }
    
    setAttendanceRecords(updatedRecords);
  };
  
  const getStudentAttendanceStatus = (studentId: string): "present" | "absent" | "late" | null => {
    const record = attendanceRecords.find(
      r => r.studentId === studentId && r.date === format(currentDate, "yyyy-MM-dd")
    );
    
    return record ? record.status : null;
  };
  
  const handleSubmitAttendance = () => {
    if (!selectedClass) {
      toast({
        title: "Error",
        description: "Please select a class first.",
        variant: "destructive"
      });
      return;
    }
    
    if (attendanceRecords.length === 0) {
      toast({
        title: "Error",
        description: "No attendance records to submit.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success",
        description: `Attendance for ${selectedClass} on ${format(currentDate, "PP")} has been saved.`,
      });
      
      // Reset attendance records after successful submission
      setAttendanceRecords([]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Mark Attendance</h2>
        <p className="text-muted-foreground">
          Record daily attendance for classes
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="w-full md:w-64">
              <Select
                value={selectedClass}
                onValueChange={setSelectedClass}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {SAMPLE_CLASSES.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePreviousDay}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-2 px-3 py-2 rounded-md border">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{format(currentDate, "PPP")}</span>
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleNextDay}
                disabled={format(currentDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {!selectedClass ? (
            <div className="text-center py-8 text-muted-foreground">
              Please select a class to view students.
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No students found in this class.
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Roll #</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map(student => {
                    const status = getStudentAttendanceStatus(student.id);
                    
                    return (
                      <TableRow key={student.id}>
                        <TableCell>{student.rollNumber}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell className="text-center">
                          {status === "present" && (
                            <span className="text-green-500 font-medium">Present</span>
                          )}
                          {status === "absent" && (
                            <span className="text-red-500 font-medium">Absent</span>
                          )}
                          {status === "late" && (
                            <span className="text-amber-500 font-medium">Late</span>
                          )}
                          {!status && (
                            <span className="text-gray-400">Not marked</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant={status === "present" ? "default" : "outline"}
                              size="sm"
                              className={status === "present" ? "bg-green-500 hover:bg-green-600" : ""}
                              onClick={() => handleAttendanceChange(student.id, "present")}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Present
                            </Button>
                            <Button
                              variant={status === "absent" ? "default" : "outline"}
                              size="sm"
                              className={status === "absent" ? "bg-red-500 hover:bg-red-600" : ""}
                              onClick={() => handleAttendanceChange(student.id, "absent")}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Absent
                            </Button>
                            <Button
                              variant={status === "late" ? "default" : "outline"}
                              size="sm"
                              className={status === "late" ? "bg-amber-500 hover:bg-amber-600" : ""}
                              onClick={() => handleAttendanceChange(student.id, "late")}
                            >
                              <Clock className="h-4 w-4 mr-1" />
                              Late
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              
              <div className="mt-6 flex justify-end">
                <Button 
                  onClick={handleSubmitAttendance}
                  disabled={attendanceRecords.length === 0 || isSubmitting}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Save Attendance"}
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkAttendance;
