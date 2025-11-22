import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { UserProfile } from "@/core/schemas/user";
import { AvatarUploader } from "./avatar-uploader";
import { ProfileInfoForm } from "./profile-info.from";

export default async function ProfileInfoCard({
	data: session,
}: {
	data: UserProfile;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Informações Pessoais</CardTitle>
				<CardDescription>
					Atualize suas informações básicas de perfil
				</CardDescription>
			</CardHeader>

			<CardContent className="space-y-6">
				<AvatarUploader
					data={{
						name: session.name,
						image: session.avatar_url,
					}}
				/>
				<ProfileInfoForm
					defaultValues={{
						name: session.name,
						email: session.email,
						username: session.username,
						bio: session.bio,
					}}
				/>
			</CardContent>
		</Card>
	);
}
