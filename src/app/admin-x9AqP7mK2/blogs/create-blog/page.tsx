"use client";
import { useState } from "react";
import CMSContentSection from "@/components/Admin/CMS/CMSContentSection";
import CMSHeader from "@/components/Admin/CMS/CMSHeader";
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection";
import CMSMetaSection from "@/components/Admin/CMS/CMSMetaSection";
import CMSSeoSection from "@/components/Admin/CMS/CMSSeoSection";
import FaqHandler from "@/components/Admin/CMS/FaqHandler";
import CMSSchema from "@/components/Admin/CMS/CMSSchema";

type BlogForm = {
  title: string;
  category: string;
  slug: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  alt: string;
  subContent: string;
  content: string;
  schemaTitle: string;
  schemaDescription: string;
};

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export default function CreateNewBlog() {

  const [form, setForm] = useState<BlogForm>({
    title: "",
    category: "",
    slug: "",
    author: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    subContent: "",
    content: "",
    schemaTitle: "",
    schemaDescription: "",
  });

  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const updateForm = (field: keyof BlogForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (

    <section className="relative min-h-screen p-6">

      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-pink-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/10 blur-3xl" />
      </div>
    
      <div className="grid lg:grid-cols-1 gap-6">

        <div className="lg:col-span-2 space-y-6 bg-[#1e0d14] border border-pink-900/40 p-6 rounded-xl
          shadow-[0_0_30px_rgba(236,72,153,0.08)]">

          <CMSHeader editorType="Blog" />

          <CMSMetaSection category={form.category} slug={form.slug} title={form.title} onChange={updateForm} editorType="Blog" />

          <div className="bg-[#1e0d14] border border-pink-900/40 p-4 rounded-xl
    shadow-[0_0_20px_rgba(236,72,153,0.05)]">

            <label className="text-pink-400/70 text-sm">Author</label>

            <input
              value={form.author}
              onChange={(e) => updateForm("author", e.target.value)}
              placeholder="Author name..."
              className="mt-2 w-full px-3 py-2 bg-pink-950/40
      border border-pink-900/40 rounded-lg text-pink-200"
            />
          </div>

          <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Blog" />

          <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType="Blog" />

          <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Blog" />

          <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Blog" />

          <CMSContentSection subContent={form.subContent} content={form.content} onChange={updateForm} editorType="Blog" />

        </div>

      </div>

    </section>
  );
}