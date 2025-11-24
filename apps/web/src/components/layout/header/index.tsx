import { HeaderBanner } from "./header-banner";
import { HeaderMenu } from "./header-menu";
import { HeaderNavigation } from "./header-navigation";

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <HeaderBanner />
      <HeaderMenu />
      <HeaderNavigation />
    </header>
  );
}
