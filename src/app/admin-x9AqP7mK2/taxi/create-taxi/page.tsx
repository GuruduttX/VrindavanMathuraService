"use client"
import { useState } from "react"
import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import Inclusion from "@/components/Admin/TaxiEditor/TaxiInclusion"
import Exclusion from "@/components/Admin/TaxiEditor/TaxiExclusion"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import TaxiDetailsSection from "@/components/Admin/TaxiEditor/TaxiDetails"
import CMSActions from "@/components/Admin/CMS/CMSActions"
import toast from "react-hot-toast"
import { useEffect } from "react"

type TaxiForm = {
  name: string
  category: string
  price: string
  duration: string
  image: string
  alt: string
  seat: string
  cabtype: string
  fueltype: string
}

type Inclusions = {
  id: string
  description: string
}

type Exclusions = {
  id: string
  description: string
}

export default function CreateNewTaxi() {

  const [form, setForm] = useState<TaxiForm>({
    name: "",
    category: "",
    price: "",
    duration: "",
    image: "",
    alt: "",
    seat: "",
    cabtype: "",
    fueltype: "",
  })

  const [isLoaded, setIsLoaded] = useState(false);


  const [inclusions, setInclusions] = useState<Inclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

  const [exclusions, setExclusions] = useState<Exclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

    useEffect(() => {
      if (typeof window !== "undefined") {
        const savedTaxi = localStorage.getItem("taxi");

        if (!savedTaxi) {
          localStorage.setItem(
            "taxi",
            JSON.stringify({
              title: "",
              seats: "",
              cabType: "",
              fuelType: "",
              basePrice: "",
              image: "",
              alt: "",
              inclusions: [],
              exclusions: [],
            }),
          );
        } else {
          // 1. Parse safely (fallback to empty object to prevent crashes)
          const parsedData = JSON.parse(savedTaxi || "{}");
          console.log(parsedData, "local storage data")

          // 2. Map the parsed data to your specific form keys
          setForm((prev) => ({
            ...prev, // Keeps your category and duration untouched
            name: parsedData.title || "",
            seat: parsedData.seats || "",
            cabtype: parsedData.cabType || "",
            fueltype: parsedData.fuelType || "",
            price: parsedData.basePrice || "",
            image: parsedData.image || "",
            alt: parsedData.alt || "",
          }));

          // 3. Set Inclusions (only if it has data, otherwise keep your default UUID object)
          if (parsedData.inclusions && parsedData.inclusions.length > 0) {
            setInclusions(parsedData.inclusions);
          }

          // 4. Set Exclusions
          if (parsedData.exclusions && parsedData.exclusions.length > 0) {
            setExclusions(parsedData.exclusions);
          }

        }
        setIsLoaded(true);
      }
    }, []);

    useEffect(() => {
      if (typeof window !== "undefined") {
        if (!isLoaded) return;
        // 1. Build the exact payload format you need
        const currentDraft = {
          title: form.name,
          seats: form.seat,
          cabType: form.cabtype,
          fuelType: form.fueltype,
          basePrice: form.price,
          image: form.image,
          alt: form.alt,
          inclusions: inclusions, // Grabs the latest array
          exclusions: exclusions, // Grabs the latest array
        };
        // 2. Save it to local storage
        localStorage.setItem("taxi", JSON.stringify(currentDraft));
      }
    }, [form, inclusions, exclusions, isLoaded]);

  const updateForm = (field: keyof TaxiForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }

    if (!form.image) {
      toast.error("Taxi image is missing")
      return
    }

    if (!form.cabtype) {
      toast.error("Taxi cab type is missing")
      return
    }

    const payload = {
      title: form.name,
      seats: Number(form.seat),
      cabType: form.cabtype,
      fuelType: form.fueltype,
      basePrice: Number(form.price),
      image: form.image,
      alt: form.alt,
      inclusions: inclusions,
      exclusions: exclusions,
      status : "published"
    }

    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/taxi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        toast.error( "Failed to publish Taxi");
        return;
      }

      toast.success("Taxi Published Successfully")

      setForm({
        name: "",
        category: "",
        price: "",
        duration: "",
        image: "",
        alt: "",
        seat: "",
        cabtype: "",
        fueltype: ""
      });

    } catch (error) {

      toast.error("Server Error");

    }
  }


  const SaveDraft = async () => {

     const payload = {
      title: form.name,
      seats: Number(form.seat),
      cabType: form.cabtype,
      fuelType: form.fueltype,
      basePrice: Number(form.price),
      image: form.image,
      alt: form.alt,
      inclusions: inclusions,
      exclusions: exclusions,
      status : "draft"
    }

    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/taxi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        console.log(data.error);
        toast.error( "Failed to Draft Taxi");
        return;
      }
      

      toast.success("Taxi Drafted Successfully");

        setForm({
        name: "",
        category: "",
        price: "",
        duration: "",
        image: "",
        alt: "",
        seat: "",
        cabtype: "",
        fueltype: ""

      });

    } catch (error) {
      toast.error("Server Error");
    }

  };

  return (
    <div
      className="max-w-8xl mx-auto p-8 rounded-2xl
      bg-[#1e0d14]
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]"
    >

      <form className="space-y-6" onSubmit={handleSave}>

        <CMSHeader editorType="Taxi" />

        <TaxiDetailsSection
          name={form.name}
          seat={form.seat}
          price={form.price}
          cabtype={form.cabtype}
          fueltype={form.fueltype}
          onChange={updateForm}
          editorType="Taxi"
        />

        <Inclusion
          inclusions={inclusions}
          setInclusions={setInclusions}
          editorType="Taxi"
        />

        <Exclusion
          exclusions={exclusions}
          setExclusions={setExclusions}
          editorType="Taxi"
        />

        <CMSMediaSection
          image={form.image}
          alt={form.alt}
          onChange={updateForm}
          editorType="Taxi"
        />

        <CMSActions actionType="create" editorType="Taxi" onSaveDraft={SaveDraft} />

      </form>
    </div>
  )
}