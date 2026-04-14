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
import { useParams } from 'next/navigation';
import QuickInclusion from '@/components/Admin/HotelEditor/QuickInclusion';
import RatingSummary from '@/components/Admin/HotelEditor/SummaryPackage';
import CMSHostField from '@/components/Admin/HotelEditor/CMSHostField';

type HotelForm = {
  title: string;
  category: string;
  slug: string;
  price: string;
  duration : string,
  subcontent : string;
  host : string,
  metaTitle: string;
  metaDescription: string;
  schemaTitle: string;
  schemaDescription: string;
  image: string;
  alt: string;
  destination: string;
  reviews: string;
  rating: string;
  status: string;
  location : string;
};

type FAQ         = { id: string; question: string; answer: string };
type Inclusions  = { id: string; description: string };
type Exclusions  = { id: string; description: string };

type QuickInclusions = {freeWifi: boolean;
  breakfast: boolean;
  parking: boolean;}

export default function CreateNewPackage() {

    const {id} = useParams();


  const [form, setForm] = useState<HotelForm>({
    title: "", 
    category: "", 
    slug: "", 
    price: "",
    subcontent : "", 
    duration : "",
    host : "",
    destination: "", 
    metaTitle: "", 
    metaDescription: "",
    schemaTitle: "", 
    schemaDescription: "", 
    image: "", 
    alt: "",
    reviews: "", 
    rating: "",
    status: "",
    location : ""
  });

  const [loading, setLoading] = useState(false);
  const [faqs,         setFaqs]         = useState<FAQ[]>([{ id: crypto.randomUUID(), question: "", answer: "" }]);
  const [inclusions,   setInclusions]   = useState<Inclusions[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [exclusions,   setExclusions]   = useState<Exclusions[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [quickInclusions, setQuickInclusions] = useState<QuickInclusions>({freeWifi: false,
  breakfast: false,
  parking: false});

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

   const handleZodErrors = (errors : any)=>{
        const fieldErrors = errors.fieldErrors;
  
  
        for(const [field , messages] of Object.entries(fieldErrors) as [string, string[]][]){
            if (messages && messages?.length > 0) {
              toast.error(`${field}: ${messages[0]}`); 
              return;
            }
        }
  
        if (errors.formErrors?.length) {
          toast.error(errors.formErrors[0]);
    }
   }

   const getHotel = async()=>{
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/hotels/${id}`);

        if(!res.ok){
           throw new Error("Get Error In Updating fields");
        }

        const response = await res.json();

        const data = response.data;
        console.log("data", data);

        setForm({
            title: data.title, 
            category: data.category, 
            slug: data.slug, 
            price: data.price,
            subcontent : data.subContent, 
            duration : data.duration,
            host : data.host,
            destination: data.destination, 
            metaTitle: data.metaTitle, 
            metaDescription: data.metaDescription,
            schemaTitle: data.schemaTitle, 
            schemaDescription: data.schemaDescription, 
            image: data.image, 
            alt: data.alt,
            reviews: data.reviews, 
            rating: data.rating,
            status: data.status,
            location : data.location
        });

        setFaqs(data.faqs ?? []);
        setInclusions(data.inclusions ?? []);
        setExclusions(data.exclusions ?? []);
        setQuickInclusions(data.quickInclusions ?? {freeWifi: false,
        breakfast: false,
        parking: false});

        setRatingSummary(data.ratingSummary ?? {
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
      })

        
    } catch (error) {
        
    }
   }

  useEffect(()=>{
     getHotel();
  },[id]);
  
  

  const updateForm = (field: keyof HotelForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildPayload = (status: "published" | "draft") => ({
      title: form.title,
      category: form.category,
      slug: form.slug,
      subContent : form.subcontent,
      duration : form.duration,
      price: Number(form.price),
      rating: form.rating,
      reviews : form.reviews,
      host : form.host,
      image : form.image,
      alt : form.alt,
      metaTitle: form.metaTitle,
      metaDescription: form.metaDescription,
      schemaTitle: form.schemaTitle,
      schemaDescription: form.schemaDescription,
      location : form.location,
      faqs,
      inclusions,
      exclusions,
      quickInclusions,
      status,
      ratingSummary
  });

  const postPayload = async (payload: object) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/hotels/${id}`, {
      method:  "PUT",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    const data = await res.json();

    console.log("THE DATA OF THE HOTELS COME FROM THE DATABASE IS : ")
    
    if (!res.ok || !data.success){
      console.log("Errs", data.errors);
       handleZodErrors(data.errors);
       throw new Error(data.message || "Something went wrong");
    }
    return data;
  };

  const validateForPublish = (formEl: HTMLFormElement): boolean => {
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return false;
    }
   
    if (!form.category) {
      toast.error("Hotel Package category is missing");
      return false;
    }
    
    return true;
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForPublish(e.currentTarget)) return;


    setLoading(true);
    try {
      await postPayload(buildPayload("published"));
      toast.success("Hotel Package published successfully!");
    } catch (err: any) {
      toast.error( "Failed to publish hotel package");
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

    setLoading(true);
    try {
      await postPayload(buildPayload("draft"));
      toast.success("Draft saved successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to save draft");
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
        <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Hotel" />
          <CMSHostField
            host={form.host}
            location={form.location}
            onChange={updateForm}
          />
        <PackageDetails reviews={form.reviews} rating={form.rating} price={form.price} duration={form.duration} onChange={updateForm} editorType="Package"/>
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Hotel" />
        <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType="Hotel" />
        
        <QuickInclusion
          quickInclusions={quickInclusions}
          setQuickInclusions={setQuickInclusions}
        />
         <RatingSummary
          ratingSummary={ratingSummary}
          setRatingSummary={setRatingSummary}
        />
        <Inclusion inclusions={inclusions} setInclusions={setInclusions} editorType="Hotel" />
        <Exclusion exclusions={exclusions} setExclusions={setExclusions} editorType="Hotel" />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Package" />

        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Hotel" />
        <CMSActions actionType="create" editorType="Hotel" onSaveDraft={handleSaveDraft} loading={loading}
        />
      </form>
    </div>
  );
}