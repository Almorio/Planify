export interface Task {
    id: string;
    title: string;
    dueDate?: string;
    priority: "low" | "medium" | "high";
    category?: string;
    completed: boolean;

}
export type FilterType = "all" |  "daily"  | "weekly" | "monthly"