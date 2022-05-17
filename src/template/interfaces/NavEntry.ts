export interface NavEntry {
    name: string;
    children: NavEntry[];
    path: string
    indexPage: boolean
}