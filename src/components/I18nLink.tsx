import { useTranslation } from "react-i18next";

interface I18nLinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

export function I18nLink({ href, ...props }: I18nLinkProps) {
  const { i18n } = useTranslation();

  // If href starts with http or https, don't modify it
  if (href.startsWith("http")) {
    return <a href={href} {...props} />;
  }

  // Remove leading slash if present
  const path = href.startsWith("/") ? href.slice(1) : href;

  // Construct the localized path
  const localizedHref = `/${i18n.language}/${path}`;

  return <a href={localizedHref} {...props} />;
}
