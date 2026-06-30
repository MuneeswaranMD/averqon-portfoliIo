import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Inbox,
  AlertCircle,
  Database
} from "lucide-react";
import DashboardClient from "./DashboardClient";

// Force dynamic execution since we query DB and check cookies
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login?callbackUrl=/admin/dashboard");
  }

  let contactRequests = [];
  let quoteRequests = [];
  let databaseOffline = false;

  try {
    contactRequests = await prisma.contactRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    quoteRequests = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Database connection issue: Falling back to mock data.", error);
    databaseOffline = true;

    // Premium Mock Data Fallbacks
    contactRequests = [
      {
        id: "mock-c1",
        name: "Jane Miller",
        email: "jane@techcorp.com",
        company: "TechCorp Industries",
        message: "We need an assessment of our current AWS infrastructure setup. Looking forward to discussing this.",
        serviceRequested: "Cloud & DevOps",
        status: "PENDING",
        createdAt: new Date(),
      },
      {
        id: "mock-c2",
        name: "Arthur Dent",
        email: "arthur@guide.org",
        company: "Interstellar Inc.",
        message: "Interested in developing a multi-platform mobile application for tracking navigation pathways.",
        serviceRequested: "Mobile App Development",
        status: "RESPONDED",
        createdAt: new Date(Date.now() - 86400000),
      }
    ];

    quoteRequests = [
      {
        id: "mock-q1",
        name: "David Sterling",
        email: "david@finflow.io",
        company: "FinFlow Software",
        projectDetails: "We require a secure, multi-tenant B2B SaaS payment gateway app built with Next.js and Prisma.",
        serviceRequested: "SaaS Development",
        budgetRange: "$25k - $50k",
        timeline: "1 - 3 months",
        status: "PENDING",
        createdAt: new Date(),
      },
      {
        id: "mock-q2",
        name: "Sarah Connors",
        email: "sarah@cyberdyne.com",
        company: "Cyberdyne Systems",
        projectDetails: "Building a localized warehouse inventory optimization system with pgvector predictive models.",
        serviceRequested: "AI Solutions",
        budgetRange: "$50k - $100k",
        timeline: "Immediate (< 1 month)",
        status: "PENDING",
        createdAt: new Date(Date.now() - 43200000),
      }
    ];
  }

  // Pre-calculate statistics
  const totalInquiries = contactRequests.length + quoteRequests.length;
  const pendingQuotes = quoteRequests.filter((q) => q.status === "PENDING").length;
  const totalBudgetRequested = quoteRequests.reduce((acc, curr) => {
    if (curr.budgetRange === "$100k+") return acc + 100000;
    if (curr.budgetRange?.includes("$50k")) return acc + 75000;
    if (curr.budgetRange?.includes("$25k")) return acc + 37500;
    return acc + 15000;
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back, {session.user?.name || "Administrator"}
          </p>
        </div>
      </div>

      {/* Database Offline Warning Alert */}
      {databaseOffline && (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-700 dark:text-amber-400">
          <Database className="h-5 w-5 flex-shrink-0" />
          <div className="space-y-1">
            <div className="font-bold">Database Offline / Unconfigured</div>
            <p className="text-xs opacity-90 leading-relaxed">
              Prisma could not connect to your PostgreSQL database. We are displaying stylized mock leads. Configure your `DATABASE_URL` in `.env` to connect.
            </p>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border p-6 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Leads</span>
            <Inbox className="h-4 w-4 text-primary" />
          </div>
          <div className="text-3xl font-black text-foreground">{totalInquiries}</div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider">Pending Quotes</span>
            <FileText className="h-4 w-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-foreground">{pendingQuotes}</div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider">Estimated pipeline</span>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-black text-foreground">
            ${totalBudgetRequested.toLocaleString()}
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider">General Messages</span>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-foreground">{contactRequests.length}</div>
        </div>
      </div>

      {/* Interactive table panel (Client Component) */}
      <DashboardClient
        initialContacts={contactRequests}
        initialQuotes={quoteRequests}
      />
    </div>
  );
}
