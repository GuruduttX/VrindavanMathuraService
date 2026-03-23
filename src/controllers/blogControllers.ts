import { 
    createBlogService, 
    deleteBlogService, 
    getAllBlogsService, 
    getBlogByIdService, 
    updateBlogService 
} from "@/services/blogServices";

import { NextResponse } from "next/server";


export const createBlog = async (req: Request) => {

    try {

        const blogData = await req.json();

        const blog = await createBlogService(blogData);

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



export const getAllBlogs = async () => {

    try {

        const blogs = await getAllBlogsService();

        return NextResponse.json({
            success: true,
            data: blogs
        }, { status: 200 });

    } catch (error) {

        return NextResponse.json({
            success: false,
            message: "Blogs Not Found. There Are Some Errors"
        }, { status: 500 });

    }

};



export const getBlogById = async (id: string) => {

    try {

        const blog = await getBlogByIdService(id);

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



export const updateBlog = async (req: Request, id: string) => {

    try {

        const blogData = await req.json();

        const blog = await updateBlogService(id, blogData);

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



export const deleteBlog = async (id: string) => {

    try {

        await deleteBlogService(id);

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