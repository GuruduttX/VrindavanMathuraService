import { deleteBlog, getBlogById, updateBlog } from "@/controllers/blogControllers";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  { params }: { params: Promise<{ slug : string }> }
) {

  try {

    await connectDB();

    const {slug} = await params;

    return getBlogById(slug);

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Blog not found"
    }, { status: 500 });

  }

}



export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();

    const { id } = await params;

    return updateBlog(req, id);

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Failed to update blog"
    }, { status: 500 });

  }

}



export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();

    const { id } = await params;

    return deleteBlog(id);

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Failed to delete blog"
    }, { status: 500 });

  }

}