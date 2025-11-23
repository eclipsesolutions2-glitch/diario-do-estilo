"use cache";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AvatarUploader } from "./avatar-uploader";
import { ProfileInfoForm } from "./profile-info.from";
import { profile } from "@/core/actions/profile";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ProfileInfoCard() {
	const result = await profile.findDetails();

	return (
		<Card>
			<CardHeader>
				<CardTitle>Informações Pessoais</CardTitle>
				<CardDescription>
					Atualize suas informações básicas de perfil
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-6">
				{!result.success ? (
					<>
						<div>
							<Skeleton className="size-10 rounded-full" />
							<div className="flex flex-col gap-2">
								<Skeleton className="w-full h-4 rounded-md" />
								<Skeleton className="w-full h-4 rounded-md" />
							</div>
						</div>

						<div>
							<div className="grid grid-cols-2 gap-4">
								<Skeleton className="w-full h-4 rounded-md" />
								<Skeleton className="w-full h-4 rounded-md" />
								<Skeleton className="w-full h-4 rounded-md" />
								<Skeleton className="w-full h-4 rounded-md" />
							</div>

							<Skeleton className="w-1/3 h-4 rounded-md" />
						</div>
					</>
				) : (
					<>
						<AvatarUploader
							data={{
								name: result.data.name,
								image: result.data.avatar_url,
							}}
						/>
						<ProfileInfoForm
							defaultValues={{
								name: result.data.name,
								email: result.data.email,
								username: result.data.username,
								bio: result.data.bio,
							}}
						/>
					</>
				)}
			</CardContent>
		</Card>
	);
}
