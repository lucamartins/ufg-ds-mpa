export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  curPageLabel: string;
}
