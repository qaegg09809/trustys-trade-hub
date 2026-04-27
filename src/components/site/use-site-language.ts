import { useLocation } from "@tanstack/react-router";
import { normalizeLanguage } from "./language";

export function useSiteLanguage() {
  const location = useLocation();
  const params = new URLSearchParams(location.searchStr);
  return normalizeLanguage(params.get("lang"));
}
