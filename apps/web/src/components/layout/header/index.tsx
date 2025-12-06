import { HeaderBanner } from "./header-banner.js";
import { HeaderMenu } from "./header-menu.js";
import { HeaderNavigation } from "./header-navigation.js";

export function Header() {
	return (
		<header className="border-b border-border bg-background sticky top-0 z-50">
			<HeaderBanner />
			<HeaderMenu />
			<HeaderNavigation />
		</header>
	);
}
