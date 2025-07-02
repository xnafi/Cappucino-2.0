export interface NavLinkProps {
  href: string;
  label: string;
}
// menu items types
export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
}
// blog Items types
export interface blogItem {
  title: string;
  description: string;
  image: string;
}
// contact us form field
export type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};
