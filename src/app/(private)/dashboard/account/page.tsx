

import { redirect } from "next/navigation";

import { profile } from "@/core/actions/profile";
import { AccountActionsCard } from "../_components/layout/profile/account-actions-card";
import { ProfileHeader } from "../_components/layout/profile/profile-header";
import ProfileInfoCard from "../_components/layout/profile/profile-info-card";

export default async function AccountDashboard() {
	const session = await profile.findDetails();

	if (!session.success) {
		redirect("/sign-in");
	}

	return (
		<main className="flex-1 p-6">
			<div className="max-w-4xl mx-auto">
				<ProfileHeader />
				<div className="grid gap-6">
					<ProfileInfoCard data={session.data} />
					<AccountActionsCard />
				</div>
			</div>
		</main>
	);
}
