import { HeroTitle } from "@/components/layout/hero-title";
import { action } from "@/core/actions";

export default async function Articles() {
	const result = await action.api.article.findMany();
	return (
		<div>
			<HeroTitle title="" description="" showLogo tag="" />
			<pre>{JSON.stringify(result, null, 2)}</pre>
		</div>
	);
}
