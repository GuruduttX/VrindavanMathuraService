"use client"
import CMSActions from '@/components/Admin/CMS/CMSActions';
import CMSHeader from '@/components/Admin/CMS/CMSHeader';
import CMSMediaSection from '@/components/Admin/CMS/CMSMediaSection';
import CMSMetaSection from '@/components/Admin/CMS/CMSMetaSection';
import CMSSeoSection from '@/components/Admin/CMS/CMSSeoSection';
import FaqHandler from '@/components/Admin/CMS/FaqHandler';
import { useState } from 'react';
import toast from 'react-hot-toast';
import PackageDetails from '@/components/Admin/PackageEditor/PackageDetails';
import TripHighlights from '@/components/Admin/PackageEditor/TripHighlights';
import Inclusion from '@/components/Admin/PackageEditor/Inclusion';
import Exclusion from '@/components/Admin/PackageEditor/Exclusion';
import Policy from '@/components/Admin/PackageEditor/Policy';
import Document from '@/components/Admin/PackageEditor/Document';
import Testimonials from '@/components/Admin/PackageEditor/Testimonials';
import ItinearyMaker from '@/components/Admin/PackageEditor/Itinerary';
import DANDestination, { destinations } from '@/components/Admin/PackageEditor/DANDestination';
import ChildImagePicker from '@/components/Admin/PackageEditor/ChildImagePicker';
import CMSSchema from '@/components/Admin/CMS/CMSSchema';
import DurationSection from '@/components/Admin/PackageEditor/DurationSection';
import DestRoutes from '@/components/Admin/PackageEditor/DestRoute';
import SelectedInclusion from '@/components/Admin/PackageEditor/SelectedInclusion';
import PackageOverview from '@/components/Admin/PackageEditor/PackageOverview';
import SourceCitySelector from '@/components/Admin/PackageEditor/SourceCitySelector';

type PackageForm = {
  title: string;
  category: string;
  slug: string;
  price: string;
  overview: string;
  duration: string;
  metaTitle: string;
  metaDescription: string;
  schemaTitle: string;
  schemaDescription: string;
  image: string;
  alt: string;
  refund: string;
  cancel: string;
  confirmation: string;
  payment: string;
  day: string;
  night: string;
  destination: string;
  reviews: string;
  rating: string;
  breakfast_included: boolean;
  stay_included: boolean;
  transfer_included: boolean;
  sightseeing_included: boolean;
  status: string;
};

type FAQ        = { id: string; question: string; answer: string };
type Testimonial = { id: string; name: string; description: string; rating: string };
type HighLights  = { id: string; description: string };
type Inclusions  = { id: string; description: string };
type Exclusions  = { id: string; description: string };
type Documents   = { id: string; description: string };
type Itinerary   = { id: string; day: number; title: string; description: string };
type ChildImage  = { id: string; image: string; alt: string };
type BreakdownItem = { id: string; days: string; place: string };
type SegmentType = { id: string; from: string; to: string };
type RouteType   = { source: string; destination: string; segments: SegmentType[] };

export default function CreateNewPackage() {

  const [form, setForm] = useState<PackageForm>({
    title: "", category: "", slug: "", price: "", duration: "", overview: "",
    day: "", night: "", destination: "", metaTitle: "", metaDescription: "",
    schemaTitle: "", schemaDescription: "", image: "", alt: "",
    refund: "", cancel: "", confirmation: "", payment: "",
    reviews: "", rating: "",
    breakfast_included: false, stay_included: false,
    transfer_included: false, sightseeing_included: false,
    status: ""
  });

  const [loading, setLoading] = useState(false);
  const [childImage,   setChildImage]   = useState<ChildImage[]>([{id : crypto.randomUUID(), image : "", alt : ""}]);
  const [faqs,         setFaqs]         = useState<FAQ[]>([{ id: crypto.randomUUID(), question: "", answer: "" }]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([{ id: crypto.randomUUID(), name: "", description: "", rating: "" }]);
  const [highLights,   setHighLights]   = useState<HighLights[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [inclusions,   setInclusions]   = useState<Inclusions[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [exclusions,   setExclusions]   = useState<Exclusions[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [documents,    setDocuments]    = useState<Documents[]>([{ id: crypto.randomUUID(), description: "" }]);
  const [itinerary,    setItinerary]    = useState<Itinerary[]>([{ id: crypto.randomUUID(), day: 1, title: "", description: "" }]);
  const [breakdown,    setBreakdown]    = useState<BreakdownItem[]>([{ id: crypto.randomUUID(), days: "0", place: "" }]);
  const [route,        setRoute]        = useState<RouteType>({ source: "", destination: "", segments: [] });
  const [availableSrc, setAvailableSrc] = useState<string[]>([]);


  const updateForm = (field: keyof PackageForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // const handleZodErrors = (errors : any)=>{
  //     const obj = errors.fieldErrors;

  //     Object.entries(obj).forEach(([field , messages])=>{
  //         if (messages?.length) {
  //         toast.error(messages[0]); // only first error
  // }
  //     })
  // }

  const buildPayload = (status: "published" | "draft") => ({
      title: form.title,
      category: form.category,
      slug: form.slug,

      price: Number(form.price),
      days: Number(form.day),
      nights: Number(form.night),
      reviews : Number(form.reviews),

      destination: form.destination,
      rating: Number(form.rating),

      overview: form.overview,
      duration: form.duration,
      refund: form.refund,
      cancel: form.cancel,
      confirmation: form.confirmation,
      payment: form.payment,


      heroImage:{image: form.image || "" , alt : form.alt  || ""},

      metaTitle: form.metaTitle,
      metaDescription: form.metaDescription,

      schemaTitle: form.schemaTitle,
      schemaDescription: form.schemaDescription,

      childImages: childImage,
      faqs,
      testimonials: testimonials,

      highlights: highLights,
      inclusions,
      exclusions,
      knowBeforeYouGo : documents,
      itinerary,
      availableSrc,

      durationbreakdown: breakdown,

      routes: route,

      isBreakfastIncluded: form.breakfast_included,
      isStayIncluded: form.stay_included,
      isTransferIncluded: form.transfer_included,
      isSightseeingIncluded: form.sightseeing_included,

      status,
  });

  const postPayload = async (payload: object) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/tour-packages`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong");
    return data;
  };

  const validateForPublish = (formEl: HTMLFormElement): boolean => {
    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return false;
    }
    if (!form.image) {
      toast.error("Package image is missing");
      return false;
    }
    if (!form.category) {
      toast.error("Package category is missing");
      return false;
    }
    if (
      childImage.length < 4 ||
      !childImage[0]?.image || !childImage[1]?.image ||
      !childImage[2]?.image || !childImage[3]?.image
    ) {
      toast.error(`Only ${childImage.length} child image(s) added — need 4`);
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
      toast.success("Package published successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to publish package");
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

  const handlePreview = () => {};

  return (
    <div
      className=" p-8 rounded-2xl border border-pink-900/40
        shadow-[0_0_60px_-15px_rgba(236,72,153,0.15)]"
        style={{ background: "#1a0b11" }}
    >

      {/* Ambient glow */}
     
      <form className="relative z-10 space-y-6" onSubmit={handleSave}>
        <CMSHeader editorType="Package" />
        <CMSMetaSection title={form.title} category={form.category} slug={form.slug} onChange={updateForm} editorType="Package" />
        <PackageDetails reviews={form.reviews} rating={form.rating} price={form.price} duration={form.duration} onChange={updateForm} editorType="Package" />
        <DANDestination destination={form.destination} onChange={updateForm} editorType="Package" />
        <CMSSeoSection metaTitle={form.metaTitle} metaDescription={form.metaDescription} onChange={updateForm} editorType="Package" />
        <CMSSchema schemaTitle={form.schemaTitle} schemaDescription={form.schemaDescription} onChange={updateForm} editorType="Package" />
        <SourceCitySelector availableSrc={availableSrc} setAvailableSrc={setAvailableSrc}/>
        <SelectedInclusion transfer_included={form.transfer_included} breakfast_included={form.breakfast_included} stay_included={form.stay_included} sightseeing_included={form.sightseeing_included} onChange={updateForm} />
        <DurationSection days={form.day} nights={form.night} onChange={updateForm} breakdown={breakdown} setBreakdown={setBreakdown} />
        <DestRoutes route={route} setRoute={setRoute} />
        <PackageOverview overview={form.overview} onChange={updateForm} editorType="Package" />
        <ItinearyMaker itinerary={itinerary} setItinerary={setItinerary} editorType="Package" />
        <FaqHandler faqs={faqs} setFaqs={setFaqs} editorType="Package" />
        <TripHighlights highLights={highLights} setHighLights={setHighLights} editorType="Package" />
        <Inclusion inclusions={inclusions} setInclusions={setInclusions} editorType="Package" />
        <Exclusion exclusions={exclusions} setExclusions={setExclusions} editorType="Package" />
        <Testimonials testimonials={testimonials} setTestimonials={setTestimonials} editorType="Package" />
        <Document documents={documents} setDocuments={setDocuments} editorType="Package" />
        <Policy refund={form.refund} cancel={form.cancel} confirm={form.confirmation} payment={form.payment} editorType="Package" onChange={updateForm} />
        <CMSMediaSection image={form.image} alt={form.alt} onChange={updateForm} editorType="Package" />
        <ChildImagePicker childImage={childImage} setChildImage={setChildImage} />
        
        <CMSActions
          actionType="create"
          editorType="Package"
          
          onSaveDraft={handleSaveDraft}
          loading={loading}
        />
      </form>
    </div>
  );
}