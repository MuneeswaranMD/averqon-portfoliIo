"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceRequested: z.string().optional(),
  honeypot: z.string().optional(),
});

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectDetails: z.string().min(15, "Project details must be at least 15 characters"),
  serviceRequested: z.string().min(1, "Please select a service"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  honeypot: z.string().optional(),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@averqon.com";

export async function submitContact(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      serviceRequested: formData.get("serviceRequested") as string,
      honeypot: formData.get("honeypot") as string,
    };

    const validated = contactSchema.parse(rawData);

    if (validated.honeypot) {
      console.warn("Spam submission blocked via honeypot.");
      return { success: true, message: "Thank you! Your message has been sent successfully." };
    }

    await prisma.contactRequest.create({
      data: {
        name: validated.name,
        email: validated.email,
        company: validated.company || null,
        message: validated.message,
        serviceRequested: validated.serviceRequested || null,
      },
    });

    if (resend) {
      await resend.emails.send({
        from: "Averqon Portal <no-reply@averqon.com>",
        to: notificationEmail,
        subject: `New Contact Request from ${validated.name}`,
        text: `Name: ${validated.name}\nEmail: ${validated.email}\nCompany: ${validated.company || "N/A"}\nMessage: ${validated.message}\nService: ${validated.serviceRequested || "General"}`,
      });
    } else {
      console.log("Mock Email: Contact request logged in database and CLI console.", validated);
    }

    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: any) {
    console.error("Contact submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function submitQuote(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      projectDetails: formData.get("projectDetails") as string,
      serviceRequested: formData.get("serviceRequested") as string,
      budgetRange: formData.get("budgetRange") as string,
      timeline: formData.get("timeline") as string,
      honeypot: formData.get("honeypot") as string,
    };

    const validated = quoteSchema.parse(rawData);

    if (validated.honeypot) {
      console.warn("Spam submission blocked via honeypot.");
      return { success: true, message: "Thank you! Your quote request has been received." };
    }

    await prisma.quoteRequest.create({
      data: {
        name: validated.name,
        email: validated.email,
        company: validated.company || null,
        projectDetails: validated.projectDetails,
        serviceRequested: validated.serviceRequested,
        budgetRange: validated.budgetRange,
        timeline: validated.timeline,
      },
    });

    if (resend) {
      await resend.emails.send({
        from: "Averqon Portal <no-reply@averqon.com>",
        to: notificationEmail,
        subject: `New Quote Request from ${validated.name}`,
        text: `Name: ${validated.name}\nEmail: ${validated.email}\nCompany: ${validated.company || "N/A"}\nService: ${validated.serviceRequested}\nBudget: ${validated.budgetRange}\nTimeline: ${validated.timeline}\nDetails: ${validated.projectDetails}`,
      });
    } else {
      console.log("Mock Email: Quote request logged in database and CLI console.", validated);
    }

    return { success: true, message: "Thank you! Your quote request has been received." };
  } catch (error: any) {
    console.error("Quote submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function updateContactStatus(id: string, status: string) {
  try {
    await prisma.contactRequest.update({
      where: { id },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to update contact status:", error);
    return { success: false };
  }
}

export async function updateQuoteStatus(id: string, status: string) {
  try {
    await prisma.quoteRequest.update({
      where: { id },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to update quote status:", error);
    return { success: false };
  }
}
