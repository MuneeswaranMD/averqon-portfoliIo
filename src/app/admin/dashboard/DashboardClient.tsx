"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { MessageSquare, FileText, CheckCircle, Archive, LogOut, Loader2 } from "lucide-react";
import { updateContactStatus, updateQuoteStatus } from "../../actions";

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  serviceRequested: string | null;
  status: string;
  createdAt: Date;
}

interface Quote {
  id: string;
  name: string;
  email: string;
  company: string | null;
  projectDetails: string;
  serviceRequested: string;
  budgetRange: string | null;
  timeline: string | null;
  status: string;
  createdAt: Date;
}

interface Props {
  initialContacts: any[];
  initialQuotes: any[];
}

export default function DashboardClient({ initialContacts, initialQuotes }: Props) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [activeTab, setActiveTab] = useState<"quotes" | "contacts">("quotes");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleUpdateContact = async (id: string, newStatus: string) => {
    setLoadingId(id);
    const res = await updateContactStatus(id, newStatus);
    setLoadingId(null);
    if (res.success) {
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
      );
    }
  };

  const handleUpdateQuote = async (id: string, newStatus: string) => {
    setLoadingId(id);
    const res = await updateQuoteStatus(id, newStatus);
    setLoadingId(null);
    if (res.success) {
      setQuotes((prev) =>
        prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Header & Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-border bg-secondary/30 p-2.5 rounded-xl">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("quotes")}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "quotes"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:bg-background hover:text-foreground"
            }`}
          >
            <FileText className="h-4 w-4" />
            Quote Requests ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "contacts"
                ? "bg-primary text-white"
                : "text-muted-foreground hover:bg-background hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Contact Messages ({contacts.length})
          </button>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-destructive hover:bg-destructive/10 transition-colors border border-destructive/20 cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>

      {/* Leads tables */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {activeTab === "quotes" ? (
          /* Quotes Table */
          <div className="overflow-x-auto">
            {quotes.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground">No quote requests registered.</div>
            ) : (
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border text-muted-foreground font-semibold">
                    <th className="p-4">Contact</th>
                    <th className="p-4">Project Area</th>
                    <th className="p-4">Specs &amp; Details</th>
                    <th className="p-4">Budget / Time</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {quotes.map((q) => (
                    <tr key={q.id} className="hover:bg-secondary/10 transition-colors text-foreground">
                      <td className="p-4 space-y-1">
                        <div className="font-bold">{q.name}</div>
                        <div className="text-xs text-muted-foreground">{q.email}</div>
                        {q.company && <div className="text-[10px] text-primary font-semibold uppercase">{q.company}</div>}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-secondary text-foreground text-xs font-medium">
                          {q.serviceRequested}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs">
                        <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed" title={q.projectDetails}>
                          {q.projectDetails}
                        </p>
                      </td>
                      <td className="p-4 space-y-0.5 text-xs text-muted-foreground">
                        <div>Budget: <span className="text-foreground font-bold">{q.budgetRange}</span></div>
                        <div>Timeline: <span className="text-foreground">{q.timeline}</span></div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                            q.status === "PENDING"
                              ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                              : q.status === "RESPONDED"
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {q.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex gap-1.5 justify-end">
                          {q.status === "PENDING" && (
                            <button
                              disabled={loadingId === q.id}
                              onClick={() => handleUpdateQuote(q.id, "RESPONDED")}
                              className="p-1.5 hover:bg-emerald-500/10 text-emerald-600 rounded-lg transition-colors cursor-pointer"
                              title="Mark as Responded"
                            >
                              {loadingId === q.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                            </button>
                          )}
                          {q.status !== "ARCHIVED" && (
                            <button
                              disabled={loadingId === q.id}
                              onClick={() => handleUpdateQuote(q.id, "ARCHIVED")}
                              className="p-1.5 hover:bg-secondary text-muted-foreground rounded-lg transition-colors cursor-pointer"
                              title="Archive Request"
                            >
                              {loadingId === q.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Archive className="h-4 w-4" />}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          /* Contacts Table */
          <div className="overflow-x-auto">
            {contacts.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground">No contact messages registered.</div>
            ) : (
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border text-muted-foreground font-semibold">
                    <th className="p-4">Contact</th>
                    <th className="p-4">Interest Area</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {contacts.map((c) => (
                    <tr key={c.id} className="hover:bg-secondary/10 transition-colors text-foreground">
                      <td className="p-4 space-y-1">
                        <div className="font-bold">{c.name}</div>
                        <div className="text-xs text-muted-foreground">{c.email}</div>
                        {c.company && <div className="text-[10px] text-primary font-semibold uppercase">{c.company}</div>}
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-secondary text-foreground text-xs font-medium">
                          {c.serviceRequested || "General Info"}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs">
                        <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed" title={c.message}>
                          {c.message}
                        </p>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                            c.status === "PENDING"
                              ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                              : c.status === "RESPONDED"
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="inline-flex gap-1.5 justify-end">
                          {c.status === "PENDING" && (
                            <button
                              disabled={loadingId === c.id}
                              onClick={() => handleUpdateContact(c.id, "RESPONDED")}
                              className="p-1.5 hover:bg-emerald-500/10 text-emerald-600 rounded-lg transition-colors cursor-pointer"
                              title="Mark as Responded"
                            >
                              {loadingId === c.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                            </button>
                          )}
                          {c.status !== "ARCHIVED" && (
                            <button
                              disabled={loadingId === c.id}
                              onClick={() => handleUpdateContact(c.id, "ARCHIVED")}
                              className="p-1.5 hover:bg-secondary text-muted-foreground rounded-lg transition-colors cursor-pointer"
                              title="Archive Request"
                            >
                              {loadingId === c.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Archive className="h-4 w-4" />}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
