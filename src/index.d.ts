interface AppShowToast {
    isOpen: boolean,
    message?: string,
    duration?: number,
    color?: string,
}

interface MythCategory {
    title: string,
    slug: string,
    coverPhoto: string,
    total: number,
}

interface MythCategorySubcategories {
    name: string,
    subCategories: MythCategorySubcategory[]
}

interface MythCategorySubcategory {
    name: string,
    figures: MythFigureSummary[]
}

interface MythFigureSummary {
    id: string,
    name: string,
    character: string,
    coverPhoto: string
}

interface MythFigure {
    id: string,
    photos: string[],
    originalName: string,
    character: string,
    cloth: string,
    releaseDate: string,
    price: string,
    edition: string,
    content: string,
    officialSite: string,
}