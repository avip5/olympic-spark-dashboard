import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Trophy, Award } from "lucide-react";

const stats = [
  { title: "Total Athletes", value: "0", icon: Users, color: "text-primary" },
  { title: "Countries", value: "0", icon: Globe, color: "text-primary" },
  { title: "Events", value: "0", icon: Trophy, color: "text-primary" },
  { title: "Medals Awarded", value: "0", icon: Award, color: "text-primary" },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Overview of Olympics database statistics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              • Add new athletes to the database
            </p>
            <p className="text-sm text-muted-foreground">
              • Register countries and events
            </p>
            <p className="text-sm text-muted-foreground">
              • Record medal achievements
            </p>
            <p className="text-sm text-muted-foreground">
              • View detailed reports
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
