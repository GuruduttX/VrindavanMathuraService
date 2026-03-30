"use client"
import { useState } from "react"
import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import Inclusion from "@/components/Admin/TaxiEditor/TaxiInclusion"
import Exclusion from "@/components/Admin/TaxiEditor/TaxiExclusion"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import TaxiDetailsSection from "@/components/Admin/TaxiEditor/TaxiDetails"
import CMSActions from "@/components/Admin/CMS/CMSActions"
import toast from "react-hot-toast"

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

  const [inclusions, setInclusions] = useState<Inclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

  const [exclusions, setExclusions] = useState<Exclusions[]>([
    { id: crypto.randomUUID(), description: "" }
  ])

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
      seats: form.seat,
      cabType: form.cabtype,
      fuelType: form.fueltype,
      basePrice: form.price,
      image: form.image,
      alt: form.alt,
      inclusions: inclusions,
      exclusions: exclusions
    }

    try {

      const res = await fetch("/api/taxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.error || "Failed to publish Taxi");
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
      seats: form.seat,
      cabType: form.cabtype,
      fuelType: form.fueltype,
      basePrice: form.price,
      image: form.image,
      alt: form.alt,
      inclusions: inclusions,
      exclusions: exclusions
    }

    try {

      const res = await fetch("/api/taxi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.error || "Failed to Draft Taxi");
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