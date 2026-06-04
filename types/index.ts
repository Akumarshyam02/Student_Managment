export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface UserProfile {
  name: string;
  streak: number;
  avatar_url?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}
