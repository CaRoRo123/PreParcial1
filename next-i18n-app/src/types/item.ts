export interface ItemData {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  [key: string]: any; 
}