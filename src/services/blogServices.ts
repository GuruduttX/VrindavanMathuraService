import Blog from "@/models/blogModel";
import { IBlog } from "@/types/blogTypes";


export const createBlogService = async (data: Partial<IBlog>) => {
  try {
    const blog = await Blog.create(data);
    return blog;
  } catch (error: any) {
    throw new Error(error.message || "Failed to create blog");
  }
};


export const getAllBlogsService = async () => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return blogs;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch blogs");
  }
};



export const getBlogByIdService = async (id: string) => {
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      throw new Error("Blog not found");
    }

    return blog;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch blog");
  }
};



export const updateBlogService = async (
  id: string,
  data: Partial<IBlog>
) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });

    if (!updatedBlog) {
      throw new Error("Blog not found");
    }

    return updatedBlog;
  } catch (error: any) {
    throw new Error(error.message || "Failed to update blog");
  }
};



export const deleteBlogService = async (id: string) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      throw new Error("Blog not found");
    }

    return deletedBlog;
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete blog");
  }
};