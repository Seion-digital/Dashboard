"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { NumberTicker } from "@/components/ui/number-ticker"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { BorderBeam } from "@/components/ui/border-beam"
import { Meteors } from "@/components/ui/meteors"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive"
import { DataTable } from "@/components/dashboard/data-table"
import { SiteHeader } from "@/components/dashboard/site-header"
import { DashboardEntrance } from "@/components/dashboard/loading-animation"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell, TrendingUp, AlertTriangle, Users, Bot, Target, Activity, CheckCircle, DollarSign, Flame, Phone, Mail } from "lucide-react"

// Demo data for SNR AI Automation
const departmentData = [
  { id: 1, department: "Lead Qualification", status: "Active", progress: 87, alerts: 2, efficiency: "High" },
  { id: 2, department: "Content Creation", status: "Active", progress: 94, alerts: 0, efficiency: "Excellent" },
  { id: 3, department: "Social Media Automation", status: "Warning", progress: 73, alerts: 3, efficiency: "Medium" },
  { id: 4, department: "Team Coordination", status: "Active", progress: 89, alerts: 1, efficiency: "High" },
  { id: 5, department: "Strategy Research", status: "Active", progress: 92, alerts: 0, efficiency: "Excellent" },
  { id: 6, department: "Feedback Analysis", status: "Maintenance", progress: 45, alerts: 5, efficiency: "Low" },
]

const hotLeads = [
  { id: 1, company: "TechCorp Solutions", score: 95, value: "$125K", stage: "Proposal", priority: "High" },
  { id: 2, company: "Digital Dynamics", score: 89, value: "$87K", stage: "Discovery", priority: "High" },
  { id: 3, company: "Innovation Labs", score: 76, value: "$52K", stage: "Qualification", priority: "Medium" },
  { id: 4, company: "Future Systems", score: 92, value: "$98K", stage: "Negotiation", priority: "High" },
]

const recentAlerts = [
  { id: 1, type: "warning", title: "Social Media Bot Threshold Reached", time: "2 min ago" },
  { id: 2, type: "success", title: "New Hot Lead Qualified", time: "5 min ago" },
  { id: 3, type: "info", title: "Weekly Strategy Report Ready", time: "15 min ago" },
  { id: 4, type: "error", title: "Feedback Bot Requires Attention", time: "1 hour ago" },
]

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [totalLeads, setTotalLeads] = useState(0)
  const [qualifiedLeads, setQualifiedLeads] = useState(0)
  const [activeAIBots, setActiveAIBots] = useState(0)
  const [conversionRate, setConversionRate] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    if (authStatus !== 'true') {
      router.push('/login')
      return
    }
    setIsAuthenticated(true)

    // Simulate loading time
    setTimeout(() => {
      setDataLoaded(true)
      // Animate numbers after loading
      setTimeout(() => {
        setTotalLeads(1247)
        setActiveAIBots(6)
        setConversionRate(23.7)
        setRevenue(487350)
      }, 200)
    }, 800)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    router.push('/login')
  }

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "280px",
        "--header-height": "60px",
      } as React.CSSProperties}
    >
      <AppSidebar onLogout={handleLogout} />
      <SidebarInset>
        <SiteHeader />
        <div className="relative flex-1 space-y-4 p-4 md:p-8 pt-6 overflow-hidden overflow-x-hidden">
          <Meteors number={15} className="opacity-30" />
          <DashboardEntrance isVisible={dataLoaded}>
            <div className="flex items-center justify-between space-y-2 relative z-10">
            <div>
              <AnimatedGradientText className="text-3xl font-bold tracking-tight">
                🚀 SNR AI Automation Hub
              </AnimatedGradientText>
              <p className="text-muted-foreground">
                Your central command center for AI-powered business automation
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4 relative z-10">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="leads">Hot Leads</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Executive Metrics */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={8} size={100} />
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <NumberTicker value={totalLeads} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">+12.5%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <BorderBeam duration={12} size={120} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active AI Bots</CardTitle>
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <NumberTicker value={activeAIBots} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">All systems operational</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <BorderBeam duration={10} size={80} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      <NumberTicker value={conversionRate} />%
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">+2.3%</span> from last month
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden">
                  <BorderBeam duration={6} size={90} colorFrom="#ebde10" colorTo="#f5ed6b" reverse />
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      $<NumberTicker value={revenue} />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent">+18.2%</span> from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Department Overview */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Department Performance</CardTitle>
                    <CardDescription>
                      Real-time status of all AI automation departments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {departmentData.map((dept) => (
                      <div key={dept.id} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{dept.department}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant={dept.status === 'Active' ? 'default' : dept.status === 'Warning' ? 'destructive' : 'secondary'}>
                              {dept.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Efficiency: {dept.efficiency}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm font-medium">{dept.progress}%</p>
                            <Progress value={dept.progress} className="w-16" />
                          </div>
                          {dept.alerts > 0 && (
                            <Badge variant="outline" className="text-destructive border-destructive">
                              {dept.alerts} alerts
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Recent Alerts
                    </CardTitle>
                    <CardDescription>
                      Latest system notifications and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentAlerts.map((alert) => (
                      <Alert key={alert.id} className="py-2">
                        <AlertDescription>
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium text-sm">{alert.title}</p>
                              <p className="text-xs text-muted-foreground">{alert.time}</p>
                            </div>
                          </div>
                        </AlertDescription>
                      </Alert>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Performance Chart */}
              <ChartAreaInteractive />
            </TabsContent>

            <TabsContent value="departments" className="space-y-4 relative z-10">
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {departmentData.map((dept, index) => (
                  <Card key={dept.id} className="relative overflow-hidden">
                    {index === 0 && <BorderBeam duration={15} size={100} colorFrom="#ebde10" colorTo="#f5ed6b" />}
                    {index === 1 && <BorderBeam duration={12} size={80} colorFrom="#ebde10" colorTo="#f5ed6b" />}
                    {index === 4 && <BorderBeam duration={18} size={120} colorFrom="#ebde10" colorTo="#f5ed6b" />}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {dept.department === "Lead Qualification" && <Target className="h-5 w-5 text-accent" />}
                          {dept.department === "Content Creation" && <Activity className="h-5 w-5 text-muted-foreground" />}
                          {dept.department === "Social Media Automation" && <Users className="h-5 w-5 text-muted-foreground" />}
                          {dept.department === "Team Coordination" && <Bot className="h-5 w-5 text-accent" />}
                          {dept.department === "Strategy Research" && <TrendingUp className="h-5 w-5 text-muted-foreground" />}
                          {dept.department === "Feedback Analysis" && <AlertTriangle className="h-5 w-5 text-destructive" />}
                          {dept.department}
                        </div>
                        <Badge variant={dept.status === 'Active' ? 'default' : dept.status === 'Warning' ? 'destructive' : 'secondary'}>
                          {dept.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription>Performance: {dept.efficiency}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-medium">
                            <NumberTicker value={dept.progress} />%
                          </span>
                        </div>
                        <Progress value={dept.progress} />
                        
                        {/* Additional metrics */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="text-center">
                            <p className="text-lg font-bold">
                              <NumberTicker value={Math.floor(Math.random() * 100) + 500} />
                            </p>
                            <p className="text-xs text-muted-foreground">Tasks/Day</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold">
                              <NumberTicker value={Math.floor(Math.random() * 10) + 95} />%
                            </p>
                            <p className="text-xs text-muted-foreground">Accuracy</p>
                          </div>
                        </div>
                        
                        {dept.alerts > 0 && (
                          <div className="flex items-center justify-between pt-2 border-t">
                            <span className="text-sm text-destructive flex items-center gap-1">
                              <AlertTriangle className="h-4 w-4" />
                              Active Alerts
                            </span>
                            <Badge variant="outline" className="text-destructive border-destructive">
                              {dept.alerts}
                            </Badge>
                          </div>
                        )}
                        
                        {/* Action buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Configure
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Department Overview Stats */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={8} size={60} colorFrom="#e74c3c" colorTo="#f39c12" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Departments</p>
                        <p className="text-2xl font-bold">
                          <NumberTicker value={6} />
                        </p>
                      </div>
                      <Bot className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Bots</p>
                        <p className="text-2xl font-bold text-accent">
                          <NumberTicker value={4} />
                        </p>
                      </div>
                      <Activity className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Alerts</p>
                        <p className="text-2xl font-bold text-destructive">
                          <NumberTicker value={11} />
                        </p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-destructive" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Avg Performance</p>
                        <p className="text-2xl font-bold">
                          <NumberTicker value={81.3} />%
                        </p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leads" className="space-y-4 relative z-10">
              {/* Lead Pipeline Stats */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={10} size={80} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">New Leads</p>
                        <p className="text-2xl font-bold text-accent">
                          <NumberTicker value={27} />
                        </p>
                        <p className="text-xs text-accent">+18% this week</p>
                      </div>
                      <Target className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Qualified</p>
                        <p className="text-2xl font-bold">
                          <NumberTicker value={15} />
                        </p>
                        <p className="text-xs text-muted-foreground">+22% this week</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Closed Deals</p>
                        <p className="text-2xl font-bold text-accent">
                          <NumberTicker value={8} />
                        </p>
                        <p className="text-xs text-accent">+33% this week</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={12} size={90} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Conversion Rate</p>
                        <p className="text-2xl font-bold">
                          <NumberTicker value={29.6} />%
                        </p>
                        <p className="text-xs text-muted-foreground">+5.2% this week</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Hot Leads Table */}
              <Card className="relative overflow-hidden">
                <BorderBeam duration={20} size={150} colorFrom="#ebde10" colorTo="#f5ed6b" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-accent" />
                    Hot Leads Pipeline
                  </CardTitle>
                  <CardDescription>High-priority leads requiring immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hotLeads.map((lead, index) => (
                      <Card key={lead.id} className="relative overflow-hidden">
                        {index === 0 && <BorderBeam duration={8} size={60} colorFrom="#ebde10" colorTo="#f5ed6b" />}
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <Avatar className="h-12 w-12">
                                  <AvatarFallback>{lead.company.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                {index < 2 && (
                                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full flex items-center justify-center">
                                    <Flame className="h-2 w-2 text-accent-foreground" />
                                  </div>
                                )}
                              </div>
                              
                              <div>
                                <h4 className="font-semibold">{lead.company}</h4>
                                <p className="text-sm text-muted-foreground">Stage: {lead.stage}</p>
                                <p className="text-xs text-muted-foreground">Last contact: {index === 0 ? '2 hours ago' : index === 1 ? '1 day ago' : '3 hours ago'}</p>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant={lead.priority === 'High' ? 'destructive' : 'default'}>
                                  {lead.priority}
                                </Badge>
                                <div className="text-right">
                                  <p className="text-sm font-medium">Score: {lead.score}/100</p>
                                  <Progress value={lead.score} className="w-20" />
                                </div>
                              </div>
                              <p className="text-lg font-bold text-accent">{lead.value}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 pt-3 border-t">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4 mr-1" />
                                Call
                              </Button>
                              <Button variant="outline" size="sm">
                                <Mail className="h-4 w-4 mr-1" />
                                Email
                              </Button>
                              <Button size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Lead Sources & Pipeline Velocity */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Lead Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { source: "Website Forms", count: 12, percentage: 35 },
                        { source: "Social Media", count: 8, percentage: 24 },
                        { source: "Referrals", count: 7, percentage: 21 },
                        { source: "Cold Outreach", count: 5, percentage: 15 },
                        { source: "Events", count: 2, percentage: 5 }
                      ].map((source, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{source.source}</span>
                          <div className="flex items-center gap-3">
                            <Progress value={source.percentage} className="w-20" />
                            <span className="text-sm font-medium w-8">
                              <NumberTicker value={source.count} />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Pipeline Velocity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Avg. Deal Size</span>
                        <span className="text-lg font-bold text-accent">
                          $<NumberTicker value={108600} />
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sales Cycle (days)</span>
                        <span className="text-lg font-bold">
                          <NumberTicker value={42} />
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Win Rate</span>
                        <span className="text-lg font-bold">
                          <NumberTicker value={68} />%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Monthly Forecast</span>
                        <span className="text-lg font-bold text-accent">
                          $<NumberTicker value={847000} />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4 relative z-10">
              {/* Analytics Overview Cards */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={14} size={100} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Revenue</p>
                        <p className="text-2xl font-bold text-accent">
                          $<NumberTicker value={2847000} />
                        </p>
                        <p className="text-xs text-accent">+23% this month</p>
                      </div>
                      <DollarSign className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Campaigns</p>
                        <p className="text-2xl font-bold">
                          <NumberTicker value={47} />
                        </p>
                        <p className="text-xs text-muted-foreground">+12% this month</p>
                      </div>
                      <Target className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Automation Hours</p>
                        <p className="text-2xl font-bold text-accent">
                          <NumberTicker value={1248} />
                        </p>
                        <p className="text-xs text-accent">+45% this month</p>
                      </div>
                      <Bot className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={16} size={110} colorFrom="#ebde10" colorTo="#f5ed6b" />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="text-2xl font-bold text-accent">
                          <NumberTicker value={427} />%
                        </p>
                        <p className="text-xs text-accent">+67% this month</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Charts */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="relative overflow-hidden">
                  <BorderBeam duration={25} size={120} colorFrom="#2ecc71" colorTo="#3498db" />
                  <CardHeader>
                    <CardTitle>Department Performance</CardTitle>
                    <CardDescription>AI Bot efficiency across all departments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartAreaInteractive />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Growth Metrics</CardTitle>
                    <CardDescription>Key performance indicators over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 border rounded-lg">
                          <p className="text-2xl font-bold text-accent">
                            <NumberTicker value={34} />%
                          </p>
                          <p className="text-sm text-muted-foreground">Lead Conversion</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <p className="text-2xl font-bold">
                            <NumberTicker value={89} />%
                          </p>
                          <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 border rounded-lg">
                          <p className="text-2xl font-bold text-purple-600">
                            <NumberTicker value={156} />
                          </p>
                          <p className="text-sm text-muted-foreground">New Leads</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                          <p className="text-2xl font-bold text-orange-600">
                            <NumberTicker value={92} />%
                          </p>
                          <p className="text-sm text-muted-foreground">Automation Rate</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Analytics Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Analytics</CardTitle>
                  <CardDescription>Comprehensive performance data for all AI automation departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataTable data={departmentData.map(dept => ({
                    id: dept.id,
                    header: dept.department,
                    type: "AI Bot",
                    status: dept.status,
                    target: dept.progress.toString(),
                    limit: "100",
                    reviewer: "System",
                  }))} />
                </CardContent>
              </Card>

              {/* Activity Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest automated activities across all departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "2 minutes ago", department: "Lead Qualification", action: "Qualified 3 new leads", status: "success" },
                      { time: "5 minutes ago", department: "Content Creation", action: "Generated 12 social media posts", status: "success" },
                      { time: "12 minutes ago", department: "Social Media Automation", action: "Scheduled 24 posts across platforms", status: "success" },
                      { time: "18 minutes ago", department: "Team Coordination", action: "Updated project timelines", status: "info" },
                      { time: "25 minutes ago", department: "Strategy Research", action: "Analyzed competitor trends", status: "success" },
                      { time: "32 minutes ago", department: "Feedback Analysis", action: "Alert: System maintenance required", status: "warning" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.status === 'success' ? 'bg-green-500' :
                            activity.status === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-muted-foreground">{activity.department}</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          </DashboardEntrance>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
