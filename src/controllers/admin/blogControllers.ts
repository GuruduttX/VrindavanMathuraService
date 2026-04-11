import { createAdminBlogService, deleteAdminBlogService, getAllAdminBlogsService, getAdminBlogByIdService , updateAdminBlogService} from "@/services/admin/blogServices";
import { blogSchema } from "@/zodSchema/blogSchema";

import { NextResponse } from "next/server";
import { success } from "zod";


export const createAdminBlogController = async (req: Request) => {

    try {

        const body = await req.json();
        const result = blogSchema.safeParse(body);

        if(!result.success){
            return Response.json({
                success : false,
                error : result.error.flatten()
            }, {status : 400})
        }

        const blogData = result.data;

        const blog = await createAdminBlogService(blogData);

        return NextResponse.json({
            success: true,
            data: blog
        }, { status: 201 });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};



export const getAllAdminBlogController = async () => {

    try {

        const blogs = await getAllAdminBlogsService();

        return NextResponse.json({
            success: true,
            data: blogs
        }, { status: 200 });

    } catch (error) {
        console.log("Error Mesage", error);
        return NextResponse.json({
            success: false,
            message: "Blogs Not Found. There Are Some Errors"
        }, { status: 500 });

    }

};



export const getAdmingBlogByIdController = async (id : string) => {

    try {

        const blog = await getAdminBlogByIdService(id);

        if (!blog) {
            return NextResponse.json({
                success: false,
                message: "Blog Not Found"
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: blog
        });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};



export const updateAdminBlogController = async (req: Request, id: string) => {

    try {

        const body = await req.json();

        if(!id){
            return Response.json({success : false, error : 'Id is required'}, {status : 400})
        }
        const result = blogSchema.safeParse(body);

        if(!result.success){
            return Response.json({
                success : false,
                error : result.error.flatten()
            }, {status : 400})
        }

        const blogData = result.data;

        const blog = await updateAdminBlogService(id, blogData);

        return NextResponse.json({
            success: true,
            data: blog
        });

    } catch (error: any) {
        console.log("Error in admin", error);

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};



export const deleteAdminBlogController = async (id: string) => {

    try {

        await deleteAdminBlogService(id);

        return NextResponse.json({
            success: true,
            message: "Blog Deleted Successfully"
        });

    } catch (error: any) {

        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });

    }

};