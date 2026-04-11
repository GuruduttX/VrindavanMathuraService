"use client"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import CMSHeader from "@/components/Admin/CMS/CMSHeader"
import Inclusion from "@/components/Admin/TaxiEditor/TaxiInclusion"
import Exclusion from "@/components/Admin/TaxiEditor/TaxiExclusion"
import CMSMediaSection from "@/components/Admin/CMS/CMSMediaSection"
import TaxiDetailsSection from "@/components/Admin/TaxiEditor/TaxiDetails"
import CMSActions from "@/components/Admin/CMS/CMSActions"

type TaxiForm = {
  name: string
  price: string
  image: string
  alt: string
  seat: string
  cabtype: string
  fueltype: string
}

type InclusionType = {
  id: string
  description: string
}

type ExclusionType = {
  id: string
  description: string
}

export default function EditTaxi() {

  const { id } = useParams()
  const router = useRouter()

  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState<TaxiForm>({
    name: "",
    price: "",
    image: "",
    alt: "",
    seat: "",
    cabtype: "",
    fueltype: ""
  })

  const [inclusions, setInclusions] = useState<InclusionType[]>([]);

  const [exclusions, setExclusions] = useState<ExclusionType[]>([]);

  const updateForm = (field: keyof TaxiForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  /* ---------------- Fetch Taxi ---------------- */

  const fetchTaxi = async () => {

    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/taxi/${id}`, {
        cache: "no-store"
      })

      const data = await res.json()

      if (!data.success) {
        toast.error("Taxi not found")
        router.push("/admin-x9AqP7mK2/taxis")
        return
      }

      const taxi = data.data
      console.log(taxi, "get request data from the taxi edit page")
      setForm({
        name: taxi.title || "",
        price: taxi.basePrice || "",
        image: taxi.image || "",
        alt: taxi.alt || "",
        seat: taxi.seats || "",
        cabtype: taxi.cabType || "",
        fueltype: taxi.fuelType || "",
      });

      setInclusions(taxi.inclusions || []);
      setExclusions(taxi.exclusions || []);

    } catch (error) {

      toast.error("Failed to fetch Taxi")

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {
    fetchTaxi()
  }, [])

  /* ---------------- Update Taxi ---------------- */

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const payload = {
      title: form.name,
      seats: form.seat,
      cabType: form.cabtype,
      fuelType: form.fueltype,
      baseprice: form.price,
      image: form.image,
      alt: form.alt,
      inclusions: inclusions,
      exclusions: exclusions
    }

    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/taxi/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (!data.success) {
        toast.error("Failed to update Taxi")
        return
      }

      toast.success("Taxi Updated Successfully")


    } catch (error) {

      toast.error("Server Error")

    }

  }

  const SaveDraft = () => {

  }

  if (loading) {
    return <div className="text-pink-400">Loading Taxi...</div>
  }

  return (
    <div
      className="max-w-8xl mx-auto p-8 rounded-2xl
      bg-[#1e0d14]
      backdrop-blur-xl border border-white/10
      shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]"
    >

      <form onSubmit={handleUpdate} className="space-y-6">

        <CMSHeader editorType="Taxi"/>

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

        <CMSActions actionType="update" editorType="Taxi" onSaveDraft={SaveDraft}/>

      </form>

    </div>
  )
}