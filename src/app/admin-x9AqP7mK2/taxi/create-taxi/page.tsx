"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import TaxiInclusion from "@/components/Admin/TaxiEditor/TaxiInclusion"
import TaxiExclusion from "@/components/Admin/TaxiEditor/TaxiExclusion"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import TaxiDetailsSection from "@/components/Admin/TaxiEditor/TaxiDetails"

type CarForm = {
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

  const [form, setForm] = useState<CarForm>({
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

  const updateForm = (field: keyof CarForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  // const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   if (!e.currentTarget.checkValidity()) {
  //     e.currentTarget.reportValidity()
  //     return
  //   }

  //   if (!form.image) {
  //     toast.error("Car image is missing")
  //     return
  //   }

  //   if (!form.cabtype) {
  //     toast.error("Car cabcategory is missing")
  //     return
  //   }

  //   const payload = {
  //     name: form.name,
  //     seat: form.seat,
  //     cabtype: form.cabtype,
  //     fueltype: form.fueltype,
  //     baseprice: form.price,
  //     image: form.image,
  //     alt: form.alt,
  //     inclusion: inclusions,
  //     exclusion: exclusions
  //   }

  //   const { error } = await supabase
  //     .from("Cars")
  //     .insert([payload])   // ✅ must be array

  //   if (error) {
  //     toast.error(error.message)
  //     return
  //   }

  //   toast.success("Car Published Successfully")

  //   // Optional: reset form
  //   setForm({
  //     name: "",
  //     category: "",
  //     price: "",
  //     duration: "",
  //     image: "",
  //     alt: "",
  //     seat : "",
  //     cabtype :"",
  //     fueltype : ""

  //   })
  // }

  return (
    <section className="relative min-h-screen p-6">


      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-pink-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/10 blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-1 gap-6">


        <div className="space-y-6 bg-[#1e0d14] border border-pink-900/40 p-6 rounded-xl
          shadow-[0_0_30px_rgba(236,72,153,0.08)]">

          <form className="space-y-6">

            <CMSHeader editorType="Taxi" />

            <TaxiDetailsSection
              name={form.name}
              seat={form.seat}
              price={form.price}
              cabtype={form.cabtype}
              fueltype={form.fueltype}
              onChange={updateForm}
              editorType="Car"
            />

            <TaxiInclusion
              inclusions={inclusions}
              setInclusions={setInclusions}
              editorType="Taxi"
            />

            <TaxiExclusion
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


            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-white
              bg-pink-600 hover:bg-pink-700
              transition-all duration-300
              shadow-[0_0_15px_rgba(236,72,153,0.4)]
              hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]"
            >
              Save Taxi
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}