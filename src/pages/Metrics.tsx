import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PageMetric {
  timeSpent: number;
  maxScroll: number;
}

interface MetricsByPage {
  [path: string]: PageMetric;
}

interface ProcessedMetric {
  path: string;
  timeSpentMinutes: number;
  timeSpentSeconds: number;
  maxScroll: number;
  category: string;
  page: string;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0 
    ? `${minutes}m ${remainingSeconds}s`
    : `${remainingSeconds}s`;
};

const Metrics = () => {
  const [metrics, setMetrics] = useState<ProcessedMetric[]>([]);

  useEffect(() => {
    const rawMetrics: MetricsByPage = JSON.parse(
      localStorage.getItem("page_metrics") || "{}"
    );

    const processed = Object.entries(rawMetrics).map(([path, data]) => {
      const pathParts = path.split("/").filter(Boolean);
      return {
        path,
        timeSpentSeconds: data.timeSpent,
        timeSpentMinutes: Math.round(data.timeSpent / 60),
        maxScroll: data.maxScroll,
        category: pathParts[0] || "Home",
        page: pathParts[1] || "Home",
      };
    });

    setMetrics(processed.sort((a, b) => b.timeSpentSeconds - a.timeSpentSeconds));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container flex-1 py-8">
        <h1 className="text-3xl font-bold mb-8">User Metrics</h1>
        
        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Page</TableHead>
                <TableHead className="text-right">Time Spent</TableHead>
                <TableHead className="text-right">Max Scroll %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{metric.category}</TableCell>
                  <TableCell>{metric.page}</TableCell>
                  <TableCell className="text-right">
                    {formatTime(metric.timeSpentSeconds)}
                  </TableCell>
                  <TableCell className="text-right">{metric.maxScroll}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Metrics;
