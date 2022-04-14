export interface IProducts {
    id?: string
	idButton?: string
	title?: string
	description?: string
	poster?: string
	navlink?: string
}

export interface IPortfolio {
	id?: number
    attributes: {
      title?: string
	  slug?: string
	  createdAt?: string
      updatedAt?: string
      publishedAt?: string
	  locale?: string
	  images: {
		  data: [{
			  id?: number
			  attributes: {
					name?: string
					alternativeText?: string
					caption?: string
					width?: number
					height?: number
					formats: {
						thumbnail: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						large: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						medium: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
						small: {
							name?: string
							hash?: string
							ext?: string
							mime?: string
							width?: number
							height?: number
							size?: number
							path?: null
							url?: string
						}
					}
					hash?: string
					ext?: string
					mime?: string
					size?: number
					url?: string
					previewUrl?: null
					provider?: string
					provider_metadata?: null
					createdAt?: string
					updatedAt?: string
			  }
		  }]
	   }
    }
}