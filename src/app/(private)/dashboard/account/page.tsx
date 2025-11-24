import { profile } from "@/core/actions/profile";
import { AccountActionsCard } from "../_components/layout/profile/account-actions-card";
import { ProfileHeader } from "../_components/layout/profile/profile-header";
import ProfileInfoCard from "../_components/layout/profile/profile-info-card";
import { Suspense } from "react";

export default async function AccountDashboard() {
	const result = await profile.findDetails();
	
	return (
		<main className="flex-1 p-6">
			<div className="max-w-4xl mx-auto">
				<ProfileHeader />
				<div className="grid gap-6">
					<Suspense fallback={"carregando..."}>
						{result.success ? <ProfileInfoCard data={result.data} /> : "..."}
					</Suspense>
					<AccountActionsCard />
				</div>
			</div>
		</main>
	);
}
