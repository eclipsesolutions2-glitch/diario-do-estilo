export interface Article {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    is_published: boolean
    is_featured: boolean
    author: Author
    publisher: Publisher
    coverImage: CoverImage
    images: Image[]
    published_at: string
    created_at: string
    updated_at: string
    deleted_at?: string
}

interface Author {
    id: number
    name: string
    email: string
}

export interface Publisher {
    id: number
    name: string
    email: string
}

interface CoverImage {
    id: number
    path: string
    is_cover: boolean
    sort_order: number
}

interface Image {
    id: number
    path: string
    is_cover: boolean
    sort_order: number
}
