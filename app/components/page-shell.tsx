import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader /><main>{children}</main><SiteFooter /></>; }
