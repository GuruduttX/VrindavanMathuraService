"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PackageDetails from '@/components/Admin/PackageEditor/PackageDetails';
import Inclusion from '@/components/Admin/PackageEditor/Inclusion';
import Exclusion from '@/components/Admin/PackageEditor/Exclusion';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';
import QuickInclusion from '@/components/Admin/HotelEditor/QuickInclusion';
import CMSRichText from '@/components/Admin/HotelEditor/CMSReachText';
import RatingSummary from '@/components/Admin/HotelEditor/SummaryPackage';
import CMSHostField from '@/components/Admin/HotelEditor/CMSHostField';

type HotelForm = {
  title: string;
  category: string;
  slug: string;
  price: string;
  about : string;
  duration : string,
  location : string;
  subcontent : string;
  host : string,
  metaTitle: string;
  metaDescription: string;
  schemaTitle: string;
  schemaDescription: string;
  image: string;
  alt: string;
  reviews: string;
  rating: string;
  status: string;
};

type FAQ         = { id: string; question: string; answer: string };
type Inclusions  = { id: string; description: string };
type Exclusions  = { id: string; description: string };
type QuickInclusions = {freeWifi: boolean;
  breakfast: boolean;
  parking: boolean;}

export default function CreateNewPackage() {
  const [form, setForm] = useState<HotelForm>({
    title: "",
    category: "",
    slug: "",
    price: "",
    subcontent: "",
    duration: "",
    about: "",
    host: "",
    metaTitle: "",
    metaDescription: "",
    schemaTitle: "",
    schemaDescription: "",
    image: "",
    alt: "",
    reviews: "",
    rating: "",
    location: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: crypto.randomUUID(), question: "", answer: "" },
  ]);
  const [inclusions, setInclusions] = useState<Inclusions[]>([
    { id: crypto.randomUUID(), description: "" },
  ]);
  const [exclusions, setExclusions] = useState<Exclusions[]>([
    { id: crypto.randomUUID(), description: "" },
  ]);
  const [quickInclusions, setQuickInclusions] = useState<QuickInclusions>({
    freeWifi: false,
    breakfast: false,
    parking: false,
  });
  const [ratingSummary, setRatingSummary] = useState({
    reviewText: "",
    scores: {
      accuracy: 0,
      checkIn: 0,
      communication: 0,
      location: 0,
      value: 0,
      cleanliness: 0,
    },
    highlights: {
      hospitality: 0,
      greatLocation: 0,
      comfortStay: 0,
    },
  });

  // 3. THE READ EFFECT
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHotel = localStorage.getItem("hotel");

      if (!savedHotel) {
        localStorage.setItem(
          "hotel",
          JSON.stringify({
            title: "",
            category: "",
            slug: "",
            subContent: "",
            duration: "",
            price: 0,
            rating: "",
            location: "",
            reviews: "",
            host: "",
            image: "",
            alt: "",
            metaTitle: "",
            metaDescription: "",
            schemaTitle: "",
            schemaDescription: "",
            about: "",
            faqs: [],
            inclusions: [],
            exclusions: [],
            quickInclusions: {
              freeWifi: false,
              breakfast: false,
              parking: false,
            },
            ratingSummary: {
              reviewText: "",
              scores: {
                accuracy: 0,
                checkIn: 0,
                communication: 0,
                location: 0,
                value: 0,
                cleanliness: 0,
              },
              highlights: { hospitality: 0, greatLocation: 0, comfortStay: 0 },
            },
            status: "draft",
          }),
        );
      } else {
        const parsedData = JSON.parse(savedHotel || "{}");

        // Map payload back to flat form state
        setForm((prev) => ({
          ...prev,
          title: parsedData.title || "",
          category: parsedData.category || "",
          slug: parsedData.slug || "",
          subcontent: parsedData.subContent || "", // Mapping payload subContent -> state subcontent
          duration: parsedData.duration || "",
          price: parsedData.price ? String(parsedData.price) : "",
          rating: parsedData.rating || "",
          location: parsedData.location || "",
          reviews: parsedData.reviews || "",
          host: parsedData.host || "",
          image: parsedData.image || "",
          alt: parsedData.alt || "",
          metaTitle: parsedData.metaTitle || "",
          metaDescription: parsedData.metaDescription || "",
          schemaTitle: parsedData.schemaTitle || "",
          schemaDescription: parsedData.schemaDescription || "",
          about: parsedData.about || "",
        }));

        // Arrays
        if (parsedData.faqs?.length > 0) setFaqs(parsedData.faqs);
        if (parsedData.inclusions?.length > 0)
          setInclusions(parsedData.inclusions);
        if (parsedData.exclusions?.length > 0)
          setExclusions(parsedData.exclusions);

        // Objects
        if (parsedData.quickInclusions)
          setQuickInclusions(parsedData.quickInclusions);

        // Nested Object Merge (Safeguards against missing nested keys)
        if (parsedData.ratingSummary) {
          setRatingSummary((prev) => ({
            reviewText: parsedData.ratingSummary.reviewText || "",
            scores: { ...prev.scores, ...parsedData.ratingSummary.scores },
            highlights: {
              ...prev.highlights,
              ...parsedData.ratingSummary.highlights,
            },
          }));
        }
      }

      setIsLoaded(true);
    }
  }, []);

  // 4. THE WRITE EFFECT
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isLoaded) return;

      const currentDraft = {
        title: form.title,
        category: form.category,
        slug: form.slug,
        subContent: form.subcontent,
        duration: form.duration,
        price: Number(form.price) || 0,
        rating: form.rating,
        location: form.location,
        reviews: form.reviews,
        host: form.host,
        image: form.image,
        alt: form.alt,
        metaTitle: form.metaTitle,
        metaDescription: form.metaDescription,
        schemaTitle: form.schemaTitle,
        schemaDescription: form.schemaDescription,
        about: form.about,
        faqs: faqs,
        inclusions: inclusions,
        exclusions: exclusions,
        quickInclusions: quickInclusions,
        status: "draft",
        ratingSummary: ratingSummary,
      };

      localStorage.setItem("hotel", JSON.stringify(currentDraft));
    }
  }, [
    form,
    faqs,
    inclusions,
    exclusions,
    quickInclusions,
    ratingSummary,
    isLoaded,
  ]);

  const updateForm = (field: keyof HotelForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const getHotelsBySlug = async (slug: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/admin/hotels/check-slug?slug=${slug}`,
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

  const buildPayload = (status: "published" | "draft") => ({
    title: form.title,
    category: form.category,
    slug: form.slug,
    subContent: form.subcontent,
    duration: form.duration,
    price: Number(form.price),
    rating: form.rating,
    location: form.location,
    reviews: form.reviews,
    host: form.host,
    image: form.image,
    alt: form.alt,
    metaTitle: form.metaTitle,
    metaDescription: form.metaDescription,
    schemaTitle: form.schemaTitle,
    schemaDescription: form.schemaDescription,
    about: form.about,
    faqs,
    inclusions,
    exclusions,
    quickInclusions,
    status,
    ratingSummary,
  });

  const handleZodErrors = (errors: any) => {
    const fieldErrors = errors.fieldErrors;

    for (const [field, messages] of Object.entries(fieldErrors) as [
      string,
      string[],
    ][]) {
      if (messages && messages?.length > 0) {
        toast.error(`${field}: ${messages[0]}`);
        return;
      }
    }

    if (errors.formErrors?.length) {
      toast.error(errors.formErrors[0]);
    }
  };

  const postPayload = async (payload: object) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/hotels`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    // console.log("THE DATA OF THE HOTELS COME FROM THE DATABASE IS : ")
    // console.log(data);

    if (!res.ok || !data.success) {
      console.log("here are errors", data.errors);
      handleZodErrors(data.errors);

      throw new Error(data.message || "Something went wrong");
    }
    return data;
  };

  const validateForPublish = async (
    formEl: HTMLFormElement,
  ): Promise<boolean> => {
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return false;
    }

    if (!form.category) {
      toast.error("Hotel Package category is missing");
      return false;
    }

    if (!form.slug) {
      toast.error("Hotel Package Slug is required");
      return false;
    }

    const result = await getHotelsBySlug(form.slug);

    if (result?.exists) {
      toast.error("Slug already exists");
      return false;
    }

    // if(form.reviews && typeof form.reviews !== "number"){
    //   toast.error("Reviews fields should be number")
    //   return false;
    // }

    // if(form.rating && typeof form.rating !== 'number'){
    //    return false;
    // }

    return true;
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = await validateForPublish(e.currentTarget);

    if (!valid) {
      return;
    }

    setLoading(true);
    try {
      await postPayload(buildPayload("published"));
      toast.success("Hotel Package published successfully!");
    } catch (err: any) {
      toast.error("Failed to publish hotel package");
    } finally {
      setLoading(false);
    }
  };

  // Save Draft
  const handleSaveDraft = async () => {
    if (!form.title.trim()) {
      toast.error("Please add a title before saving as draft");
      return;
    }

    console.log("sf", form.slug);
    if (form.slug) {
      const result = await getHotelsBySlug(form.slug);

      if (result?.exists) {
        toast.error("Slug already exists");
        return;
      }
    }

    setLoading(true);
    try {
      await postPayload(buildPayload("draft"));
      toast.success("Draft saved successfully!");
    } catch (err: any) {
      toast.error("Failed to save draft");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className=" p-8 rounded-2xl border border-pink-900/40
        shadow-[0_0_60px_-15px_rgba(236,72,153,0.15)]"
      style={{ background: "#1a0b11" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 35% at 15% 15%, rgba(236,72,153,0.08) 0%, transparent 60%), radial-gradient(ellipse 45% 30% at 85% 75%, rgba(244,114,182,0.05) 0%, transparent 55%)",
        }}
      />

      <form className="relative z-10 space-y-6" onSubmit={handleSave}>
        <CMSHeader editorType="Hotel" />
        <CMSMetaSection
          title={form.title}
          category={form.category}
          slug={form.slug}
          onChange={updateForm}
          editorType="Hotel"
        />
        <CMSHostField
          host={form.host}
          location={form.location}
          onChange={updateForm}
        />
        <PackageDetails
          reviews={form.reviews}
          rating={form.rating}
          price={form.price}
          duration={form.duration}
          onChange={updateForm}
          editorType="Package"
        />
        <CMSSeoSection
          metaTitle={form.metaTitle}
          metaDescription={form.metaDescription}
          onChange={updateForm}
          editorType="Hotel"
        />
        <CMSSchema
          schemaTitle={form.schemaTitle}
          schemaDescription={form.schemaDescription}
          onChange={updateForm}
          editorType="Hotel"
        />
        <QuickInclusion
          quickInclusions={quickInclusions}
          setQuickInclusions={setQuickInclusions}
        />
        <CMSRichText
          label="Main Content"
          value={form.about}
          field="about"
          onChange={updateForm}
        />
        <RatingSummary
          ratingSummary={ratingSummary}
          setRatingSummary={setRatingSummary}
        />

        <Inclusion
          inclusions={inclusions}
          setInclusions={setInclusions}
          editorType="Hotel"
        />
        <Exclusion
          exclusions={exclusions}
          setExclusions={setExclusions}
          editorType="Hotel"
        />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Package" />
        <CMSMediaSection
          image={form.image}
          alt={form.alt}
          onChange={updateForm}
          editorType="Hotel"
        />
        <CMSActions
          actionType="create"
          editorType="Hotel"
          onSaveDraft={handleSaveDraft}
          loading={loading}
        />
      </form>
    </div>
  );
}