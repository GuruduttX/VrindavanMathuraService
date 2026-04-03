"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSContentSection from '@/components/Admin/CMS/CMSContentSection';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
import toast from 'react-hot-toast';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';

type BlogForm = {

  title: string;
  category: string
  slug: string
  author: string
  metaTitle: string
  metaDescription: string
  image: string
  alt: string
  subContent: string
  content: string
  schemaTitle: string
  schemaDescription: string
  
}

type FAQ = {
  id: string
  question: string
  answer: string
}

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
    schemaDescription: ""
  });

  const [faqs, setFaqs] = useState<FAQ[]>([])

  const updateForm = (field: keyof BlogForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validateBeforePublish = async () => {

    if (form.content.length < 300) {
      toast.error("At least 300 characters required in blog content");
      return false;
    }

    if (!form.image) {
      toast.error("Blog image is missing");
      return false;
    }

    if (!form.category) {
      toast.error("Blog category is missing");
      return false;
    }


    try {

      const res = await fetch(`/api/blog/${form.slug}`);
      const data = await res.json();

      if (data?.exists) {
        toast.error("Slug already exists");
        return false;
      }

    } catch (error) {
      toast.error("Error validating slug");
      return false;
    }

    return true;
  };


  const handleSave = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }

    const isValid = await validateBeforePublish();

    if (!isValid) return;

    const payload = {
      title: form.title,
      category: form.category,
      slug: form.slug,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      structuredData: {
        title: form.schemaTitle,
        description: form.schemaDescription
      },
      image: form.image,
      alt: form.alt,
      subContent: form.subContent,
      content: form.content,
      author: form.author,
      status : "published",
      faqs
    };

    try {

      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.error || "Failed to publish blog");
        return;
      }

      toast.success("Blog Published Successfully");

      setForm({
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
        schemaDescription: ""
      });

      setFaqs([{ id: crypto.randomUUID(), question: "", answer: "" }])

    } catch (error) {
      toast.error("Server Error");
    }

  };



  const SaveDraft = async () => {

    const payload = {
      title: form.title,
      category: form.category,
      slug: form.slug,
      meta: {
        title: form.metaTitle,
        description: form.metaDescription,
      },
      structuredData: {
        title: form.schemaTitle,
        description: form.schemaDescription
      },
      image: form.image,
      alt: form.alt,
      subContent: form.subContent,
      content: form.content,
      author: form.author,
      status : "draft",
      faqs
    };

    try {

      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.error || "Failed to publish blog");
        return;
      }

      toast.success("Blog Drafted Successfully");

      setForm({
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
        schemaDescription: ""
      });

      setFaqs([{ id: crypto.randomUUID(), question: "", answer: "" }])

    } catch (error) {
      toast.error("Server Error");
    }

  };


  return (

    <section className="relative min-h-screen p-6">


      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-400/10 blur-3xl" />
      </div>

      <div className="max-w-8xl mx-auto p-8 rounded-2xl
      bg-[#1e0d14]
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">

        <form className='space-y-6' onSubmit={handleSave}>

          <CMSHeader editorType="Blog" />

          <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Blog"
          />

          <div>
            <label className="text-sm text-white/70">Author</label>

            <input
              value={form.author}
              required
              onChange={(e) => updateForm("author", e.target.value)}
              placeholder="author name..."
              className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
            />

          </div>

          <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Blog"
          />

          <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType='Blog'
          />

          <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Blog"
          />

          <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Blog"
          />

          <CMSContentSection subContent={form.subContent} content={form.content} onChange={updateForm} editorType="Blog"
          />

          <CMSActions actionType="create" editorType="Blog" onSaveDraft={SaveDraft} />

        </form>
      </div>

    </section>

  );
}