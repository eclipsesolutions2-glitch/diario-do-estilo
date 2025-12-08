"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@workspace/ui/components/card";
import { Edit3, Mail, Shield, User as UserIcon } from "lucide-react";
import type { User } from "@/core/schemas/user";

interface UserCardProps {
	data: User;
}

export function UserCard({ data }: UserCardProps) {
	const roleLabel = {
		admin: "Administrador",
		editor: "Editor",
		reader: "Leitor",
	}[data.role];

	const roleColor = {
		admin: "bg-red-600/20 text-red-400",
		editor: "bg-blue-600/20 text-blue-400",
		reader: "bg-neutral-600/20 text-neutral-300",
	}[data.role];

	return (
		<Card className="rounded-2xl shadow-sm hover:shadow-md transition-all border border-neutral-800 bg-neutral-900">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="h-14 w-14 border border-neutral-700">
					<AvatarImage src={data.avatar_url} alt={data.name} />
					<AvatarFallback className="bg-neutral-800 text-neutral-300">
						{data.name
							.split(" ")
							.map((n) => n[0])
							.join("")
							.toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<div className="flex flex-col">
					<h2 className="text-lg font-semibold text-white">
						{data.name}
					</h2>

					<div className="flex items-center gap-2 mt-1">
						<Mail size={14} className="text-neutral-500" />
						<span className="text-sm text-neutral-400">
							{data.email}
						</span>
					</div>
				</div>
			</CardHeader>

			<CardContent className="text-sm text-neutral-400 space-y-3">
				<div className="flex items-center gap-2">
					<UserIcon size={16} className="text-neutral-500" />
					<span className="text-neutral-300">{data.username}</span>
				</div>

				<div className="flex items-center gap-2">
					<Shield size={16} className="text-neutral-500" />
					<Badge className={`${roleColor} text-xs px-2 py-0.5`}>
						{roleLabel}
					</Badge>
				</div>

				<p className="text-sm text-neutral-400 line-clamp-3">
					{data.bio || "Sem bio definida."}
				</p>
			</CardContent>

			<CardFooter className="flex justify-end pt-2">
				<Button
					variant="outline"
					size="sm"
					className="flex items-center gap-1"
				>
					<Edit3 size={16} />
					Editar
				</Button>
			</CardFooter>
		</Card>
	);
}
