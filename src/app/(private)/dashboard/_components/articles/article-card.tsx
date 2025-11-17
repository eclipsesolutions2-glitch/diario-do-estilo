import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
	title: string;
	description: string;
	author: string;
	createdAt: string;
	thumbnail?: string;
	isPublished: boolean;
	isFeatured: boolean;
}

export function ArticleCard({
	title,
	description,
	author,
	createdAt,
	thumbnail = "/images/placeholder.svg",
	isFeatured,
	isPublished,
}: ArticleCardProps) {
	return (
		<Card>
			<CardContent>
				<div className="relative rounded-xl overflow-hidden bg-muted">
					<Image
						src={thumbnail}
						alt={`Thumbnail do artigo sobre ${title}`}
						fill
						className="object-cover"
					/>
					<div className="absolute top-2 left-2 flex items-center gap-4">
						<Badge>
							{isPublished ? "Publicado" : "Não publicado"}
						</Badge>
						{isFeatured && (
							<Badge className="">
								<Star className="fill-yellow-500 text-yellow-500" />
								<span>Em Destaque</span>
							</Badge>
						)}
					</div>
					<div className="flex items-center text-xs">
						<span className="text-primary">{author}</span> {" • "}
						<span className="text-muted-foreground">
							{createdAt}
						</span>
					</div>
					<div>
						<span className="text-2xl font-serif">{title}</span>
						<span>{description}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
