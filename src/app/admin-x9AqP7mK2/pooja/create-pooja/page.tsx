"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import CMSHeader from "@/components/Admin/CMS/CMSHeader";
import CMSSeoSection from "@/components/Admin/CMS/CMSSeoSection";
import CMSSchema from "@/components/Admin/CMS/CMSSchema";
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection";
import CMSActions from "@/components/Admin/CMS/CMSActions";
import FaqHandler from "@/components/Admin/CMS/FaqHandler";
import CMSContentSection from "@/components/Admin/CMS/CMSContentSection";
import PoojaMeta from "@/components/Admin/PoojaEditor/PoojaMeta";
import PoojaPricing from "@/components/Admin/PoojaEditor/PoojaPricing";
import BenefitsHandler from "@/components/Admin/PoojaEditor/BenefitsHandler";
import Testimonials from "@/components/Admin/PackageEditor/Testimonials";

const inputClass = `
  mt-2 w-full px-5 py-3 rounded-xl
  bg-pink-950/30 text-pink-100
  placeholder-pink-400/40
  border border-pink-900/50
  focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-600/50
  transition
`;

const locations = [
  "Vrindavan",
  "Mathura",
  "Barsana",
  "Gokul",
  "Govardhan",
  "Nandgaon",
];

type FAQ = { id: string; question: string; answer: string };
export type TestimonialType = {
  id: string;
  name: string;
  description: string;
  rating: string;
};

export type BenefitType =  {
  id: string,
  description: string
}

export default function CreatePoojaPage() {

  const [form, setForm] = useState({
    title: "",
    slug: "",
    temple: "",
    location: "",
    price: "",
    discountPrice: "",
    rating: "",
    subContent: "",
    content: "",
    duration: "",
    image: "",
    alt: "",
    metaTitle: "",
    metaDescription: "",
    schemaTitle: "",
    schemaDescription: "",
    status: "",
    category : ""
    
  });

  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: crypto.randomUUID(), question: "", answer: "" },
  ]);


  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([{ id: crypto.randomUUID(), name: "", description: "", rating: "" }]);
  

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  /* PAYLOAD  */
  const buildPayload = (status: "published" | "draft") => ({
    title: form.title,
    slug: form.slug,

    temple: form.temple,
    location: form.location,

    price: Number(form.price),
    discountPrice: Number(form.discountPrice),

    rating: form.rating,
    reviews : testimonials,

    metaData : {
        title : form.metaTitle,
        description : form.metaDescription
    },
    
    schemaData : {
        title : form.schemaTitle,
        description : form.schemaDescription
    }
     ,

    description: form.subContent,
    aboutContent: form.content,
    duration: form.duration,
    category : form.category,

    heroImage: {
      image: form.image,
      alt: form.alt,
    },

    faqs,
    status,
  });

   const getPoojaBySlug = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/admin/pooja/check-slug?slug=${slug}`
    );

    if (res.status === 404) {
      return { exists: false };
    }

    const data = await res.json();

    return {
      exists: true,
      data: data.data || data, // handle both formats
    };

  } catch (error) {
    console.error("Slug check error:", error);
    return { exists: false };
  }
};

  /* ---------------- API ---------------- */
  const postData = async (payload: any) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/pooja`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!data.success) throw new Error(data.message);
  };

  /* ---------------- ACTIONS ---------------- */
  const handlePublish = async (e: any) => {
    e.preventDefault();

    if (!form.title || !form.slug) {
      toast.error("Title & Slug required");
      return;
    }

     if (!form.slug) {
        toast.error("Package slug is required");
        return ;
      }

   if (form.subContent && form.subContent.length > 200) {
      toast.error("SubContent should be less than 200 characters");
      return;
    }
    
     
      const result = await getPoojaBySlug(form.slug);
    
      if (result?.exists) {
          toast.error("Slug already exists");
          return;
      }
      

    setLoading(true);
    try {
      await postData(buildPayload("published"));
      toast.success("Pooja Published ");
    } catch (err: any) {
      toast.error(err.message || "Failed To Publish");
    } finally {
      setLoading(false);
    }
  };

  const handleDraft = async () => {
    if (!form.title) {
      toast.error("Title required");
      return;
    }

    if (form.slug) {
    
  

 
  const result =  await getPoojaBySlug(form.slug);

  if (result?.exists) {
      toast.error("Slug already exists");
      return false;
  }}

    setLoading(true);
    try {
      await postData(buildPayload("draft"));
      toast.success("Draft Saved ✨");
    } catch (err: any) {
      toast.error(err.message || "Failed to Save in Draft");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div
      className="p-8 rounded-2xl border border-pink-900/40"
      style={{ background: "#1a0b11" }}
    >
      <form onSubmit={handlePublish} className="space-y-6">
        <CMSHeader editorType="Pooja" />
        <PoojaMeta
          title={form.title}
          temple={form.temple}
          location={form.location}
          slug={form.slug}
          rating={form.rating}
          duration={form.duration}
          updateForm={updateForm}
        />

        <PoojaPricing
          category={form.category}
          price={form.price}
          discountPrice={form.discountPrice}
          updateForm={updateForm}
        />

        {/* MEDIA */}
        <CMSMediaSection
          image={form.image}
          alt={form.alt}
          onChange={updateForm}
          editorType="Pooja"
        />
        

        {/* FAQ */}
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Pooja" />

        {/* Testimotionals */}
        <Testimonials
          testimonials={testimonials}
          setTestimonials={setTestimonials}
          editorType="Package"
        />

        {/* SEO */}
        <CMSSeoSection
          metaTitle={form.metaTitle}
          metaDescription={form.metaDescription}
          onChange={updateForm}
          editorType="Pooja"
        />

        <CMSContentSection
          subContent={form.subContent}
          content={form.content}
          onChange={updateForm}
          editorType="Blog"
        />

        {/* SCHEMA */}
        <CMSSchema
          schemaTitle={form.schemaTitle}
          schemaDescription={form.schemaDescription}
          onChange={updateForm}
          editorType="Pooja"
        />

        {/* ACTIONS */}
        <CMSActions
          actionType="create"
          editorType="Pooja"
          onSaveDraft={handleDraft}
          loading={loading}
        />
      </form>
    </div>
  );
}