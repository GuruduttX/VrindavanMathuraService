import React from 'react'
import BlogHero from '../components/BlogArchive/BlogHero'
import BlogSearch from '../components/BlogArchive/BlogSearch'
import BlogCategories from '../components/BlogArchive/BlogCategories'
import BlogCTA from '../components/BlogArchive/BlogCTA'

export default function Page(){
    return (
        <div>
            <BlogHero/>
            <BlogSearch/>
            <BlogCategories/>
            <BlogCTA/>
        </div>
    )
}