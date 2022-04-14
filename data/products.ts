import { IProducts } from "../types"

const products: IProducts[] = [
	{
		id: "data01",
		idButton: "stroitelstvo-domov",
		title: "Строительство домов",
		description: 
			"Строительство домов, коттеджей из кирпича, керамзито-блоков, газобетона под ключ",
		poster: "/images/construction-houses-img.webp",
		navlink: "/uslugi/stroitelstvo-domov",
	},
	{
		id: "data02",
		idButton: "elektromontazhnie-raboti",
		title: "Электромонтажные работы",
		description:
			"Все виды электромонтажных работ в квартире, коттедже, таунхаусе",
		poster: "/images/electricInstal-work-img.webp",
		navlink: "/uslugi/elektromontazhnie-raboti",
	},
	{
		id: "data03",
		idButton: "santehnicheskie-raboti",
		title: "Сантехнические работы",
		description:
			"Все виды сантехнических работ в квартире, коттедже, таунхаусе",
		poster: "/images/plumbing-work-img.webp",
		navlink: "/uslugi/santehnicheskie-raboti",
	},
	{
		id: "data04",
		idButton: "vnutrennyaya-otdelka",
		title: "Внутренняя отделка",
		description:
			"Штукатурные работы, малярные работы, оклейка обоев, фактурная штукатурка",
		poster: "/images/interior-decoration-img.webp",
		navlink: "/uslugi/vnutrennyaya-otdelka",
	},
	{
		id: "data05",
		idButton: "blagoustroistvo",
		title: "Благоустройство",
		description:
			"Благоустройство территории под ключ",
		poster: "/images/landscaping-img.webp",
		navlink: "/uslugi/blagoustroistvo",
	},
	{
		id: "data06",
		idButton: "dizainerskie-resheniya",
		title: "Дизайнерские решения",
		description:
			"Проектирование дизайна любой сложности под ключ",
		poster: "/images/design-solutions-img.webp",
		navlink: "/uslugi/dizainerskie-resheniya",
	},
]

export default products