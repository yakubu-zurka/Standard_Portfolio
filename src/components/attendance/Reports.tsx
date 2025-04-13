
import { useState } from "react";
import { Calendar, Download, FilePieChart, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, subDays, subMonths } from "date-fns";
import { toast } from "@/components/ui/use-toast";

type ReportType = "daily" | "weekly" | "monthly" | "custom";
type ReportFormat = "table" | "summary";

const SAMPLE_CLASSES = ["All Classes", "10A", "10B", "11A", "11B", "12A", "12B"];

// Sample attendance data
const generateAttendanceData = () => {
  const today = new Date();
  const result = [];

  for (let i = 0; i < 30; i++) {
    const date = subDays(today, i);
    const totalStudents = 250;
    const presentCount = Math.floor(Math.random() * 40) + 210; // Random between 210-250
    const absentCount = totalStudents - presentCount;
    const attendanceRate = (presentCount / totalStudents) * 100;

    result.push({
      date: format(date, "yyyy-MM-dd"),
      formattedDate: format(date, "PP"),
      totalStudents,
      presentCount,
      absentCount,
      attendanceRate: Math.round(attendanceRate * 10) / 10 // Round to 1 decimal
    });
  }

  return result;
};

// Class-specific attendance data
const generateClassAttendanceData = (className: string) => {
  const today = new Date();
  const result = [];
  const totalStudents = className === "All Classes" ? 250 : 30;

  for (let i = 0; i < 30; i++) {
    const date = subDays(today, i);
    const presentCount = Math.floor(Math.random() * (totalStudents * 0.15)) + (totalStudents * 0.85); // 85-100% attendance
    const absentCount = totalStudents - presentCount;
    const attendanceRate = (presentCount / totalStudents) * 100;

    result.push({
      date: format(date, "yyyy-MM-dd"),
      formattedDate: format(date, "PP"),
      totalStudents,
      presentCount,
      absentCount,
      attendanceRate: Math.round(attendanceRate * 10) / 10
    });
  }

  return result;
};

const Reports = () => {
  const [reportType, setReportType] = useState<ReportType>("daily");
  const [reportFormat, setReportFormat] = useState<ReportFormat>("table");
  const [selectedClass, setSelectedClass] = useState<string>("All Classes");
  const [dateRange, setDateRange] = useState<[Date, Date]>([
    subDays(new Date(), 7),
    new Date(),
  ]);
  
  const getReportTitle = () => {
    switch (reportType) {
      case "daily":
        return "Daily Attendance Report";
      case "weekly":
        return "Weekly Attendance Report";
      case "monthly":
        return "Monthly Attendance Report";
      case "custom":
        return "Custom Attendance Report";
      default:
        return "Attendance Report";
    }
  };
  
  const getDateRangeText = () => {
    switch (reportType) {
      case "daily":
        return format(new Date(), "PPP");
      case "weekly":
        return `${format(subDays(new Date(), 7), "PP")} - ${format(new Date(), "PP")}`;
      case "monthly":
        return `${format(subMonths(new Date(), 1), "PP")} - ${format(new Date(), "PP")}`;
      case "custom":
        return `${format(dateRange[0], "PP")} - ${format(dateRange[1], "PP")}`;
      default:
        return "";
    }
  };
  
  // Get filtered data based on report type and class
  const getReportData = () => {
    const allData = selectedClass === "All Classes" 
      ? generateAttendanceData() 
      : generateClassAttendanceData(selectedClass);
    
    switch (reportType) {
      case "daily":
        return allData.slice(0, 1);
      case "weekly":
        return allData.slice(0, 7);
      case "monthly":
        return allData.slice(0, 30);
      case "custom":
        // In a real app, this would filter by the actual date range
        return allData.slice(0, 14);
      default:
        return allData;
    }
  };
  
  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: `${getReportTitle()} for ${selectedClass} has been generated.`,
    });
  };
  
  const handleExportReport = (format: string) => {
    toast({
      title: "Report Exported",
      description: `The report has been exported in ${format.toUpperCase()} format.`,
    });
  };
  
  const reportData = getReportData();
  // Calculate averages for summary
  const averageAttendance = reportData.reduce((sum, day) => sum + day.attendanceRate, 0) / reportData.length;
  const totalStudents = reportData[0]?.totalStudents || 0;
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">
          Generate and export attendance reports
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Generate Report</CardTitle>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select
                value={reportType}
                onValueChange={(value) => setReportType(value as ReportType)}
              >
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              
              <Select
                value={selectedClass}
                onValueChange={setSelectedClass}
              >
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {SAMPLE_CLASSES.map(cls => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select
                value={reportFormat}
                onValueChange={(value) => setReportFormat(value as ReportFormat)}
              >
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Report Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="table">Table View</SelectItem>
                  <SelectItem value="summary">Summary</SelectItem>
                </SelectContent>
              </Select>
              
              <Button onClick={handleGenerateReport}>
                <FilePieChart className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{getReportTitle()}</h3>
            <div className="flex items-center mt-2 text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{getDateRangeText()}</span>
            </div>
            <div className="mt-1 text-muted-foreground">
              <span>Class: {selectedClass}</span>
            </div>
          </div>
          
          {reportFormat === "table" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Total Students</TableHead>
                  <TableHead className="text-right">Present</TableHead>
                  <TableHead className="text-right">Absent</TableHead>
                  <TableHead className="text-right">Attendance Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((day) => (
                  <TableRow key={day.date}>
                    <TableCell>{day.formattedDate}</TableCell>
                    <TableCell className="text-right">{day.totalStudents}</TableCell>
                    <TableCell className="text-right">{day.presentCount}</TableCell>
                    <TableCell className="text-right">{day.absentCount}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${day.attendanceRate >= 90 ? 'bg-green-500' : day.attendanceRate >= 75 ? 'bg-amber-500' : 'bg-red-500'}`}
                              style={{ width: `${day.attendanceRate}%` }}
                            />
                          </div>
                        </div>
                        <span>{day.attendanceRate}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Attendance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-muted-foreground text-sm mb-1">Average Attendance Rate</div>
                      <div className="flex items-center gap-2">
                        <div className="w-full">
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${averageAttendance >= 90 ? 'bg-green-500' : averageAttendance >= 75 ? 'bg-amber-500' : 'bg-red-500'}`}
                              style={{ width: `${averageAttendance}%` }}
                            />
                          </div>
                        </div>
                        <span className="font-medium text-lg">{averageAttendance.toFixed(1)}%</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-muted-foreground text-sm">Total Days</div>
                          <div className="font-medium text-lg">{reportData.length}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-sm">Total Students</div>
                          <div className="font-medium text-lg">{totalStudents}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-muted-foreground text-sm mb-1">Attendance Trend</div>
                      <div className="h-24 bg-muted/50 rounded-md flex items-end justify-between p-2">
                        {reportData.slice(0, 10).map((day, index) => (
                          <div key={index} className="flex flex-col items-center gap-1">
                            <div 
                              className={`w-5 ${day.attendanceRate >= 90 ? 'bg-green-500' : day.attendanceRate >= 75 ? 'bg-amber-500' : 'bg-red-500'}`}
                              style={{ height: `${day.attendanceRate * 0.2}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-muted-foreground text-sm mb-1">Highest Attendance</div>
                      <div className="font-medium">
                        {Math.max(...reportData.map(day => day.attendanceRate)).toFixed(1)}%
                        <span className="text-muted-foreground text-sm ml-2">
                          on {reportData.sort((a, b) => b.attendanceRate - a.attendanceRate)[0].formattedDate}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-muted-foreground text-sm mb-1">Lowest Attendance</div>
                      <div className="font-medium">
                        {Math.min(...reportData.map(day => day.attendanceRate)).toFixed(1)}%
                        <span className="text-muted-foreground text-sm ml-2">
                          on {reportData.sort((a, b) => a.attendanceRate - b.attendanceRate)[0].formattedDate}
                        </span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-muted-foreground text-sm mb-2">Status Distribution</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-green-100 p-3 rounded-md text-center">
                          <div className="text-green-600 font-semibold">On Track</div>
                          <div className="text-muted-foreground text-sm">
                            {reportData.filter(day => day.attendanceRate >= 90).length} days
                          </div>
                        </div>
                        <div className="bg-amber-100 p-3 rounded-md text-center">
                          <div className="text-amber-600 font-semibold">Caution</div>
                          <div className="text-muted-foreground text-sm">
                            {reportData.filter(day => day.attendanceRate >= 75 && day.attendanceRate < 90).length} days
                          </div>
                        </div>
                        <div className="bg-red-100 p-3 rounded-md text-center">
                          <div className="text-red-600 font-semibold">At Risk</div>
                          <div className="text-muted-foreground text-sm">
                            {reportData.filter(day => day.attendanceRate < 75).length} days
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="flex justify-end mt-6 gap-3">
            <Button variant="outline" onClick={() => handleExportReport("pdf")}>
              <FileText className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline" onClick={() => handleExportReport("csv")}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" onClick={() => handleExportReport("print")}>
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
