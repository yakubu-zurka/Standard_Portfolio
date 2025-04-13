
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import AttendanceLayout from "@/components/attendance/AttendanceLayout";
import Dashboard from "@/components/attendance/Dashboard";
import Students from "@/components/attendance/Students";
import Classes from "@/components/attendance/Classes";
import MarkAttendance from "@/components/attendance/MarkAttendance";
import Reports from "@/components/attendance/Reports";

const AttendanceSystem = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      <Helmet>
        <title>School Attendance Management System</title>
      </Helmet>
      
      <AttendanceLayout>
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="attendance">Mark Attendance</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="students">
            <Students />
          </TabsContent>

          <TabsContent value="classes">
            <Classes />
          </TabsContent>

          <TabsContent value="attendance">
            <MarkAttendance />
          </TabsContent>

          <TabsContent value="reports">
            <Reports />
          </TabsContent>
        </Tabs>
      </AttendanceLayout>
    </>
  );
};

export default AttendanceSystem;
