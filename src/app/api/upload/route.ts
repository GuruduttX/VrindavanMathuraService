import { uploadImage } from "@/controllers/uploadImageControllers";

export async function POST(req: Request) {
  return uploadImage(req);
}