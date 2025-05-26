import type { FilterType } from "../types/tasktypes";
type FiltersProps = {
    filter: FilterType;
    setFilter:(filter: FilterType) => void
};

export default function Filters ({ filter, setFilter}: FiltersProps) {
    return (
        <div className="">
            <button 
            onClick={()=> setFilter("all")}
            className={filter === "all" ? "active" : ""}>
                Todas
            </button>
            <button 
            
            onClick={()=> setFilter("daily")}
            className={filter === "daily" ? "active" : ""}>
                Diárias
            </button>
            <button 
            onClick={()=> setFilter("weekly")}
            className={filter === "weekly" ? "active" : ""}>
                Semanal
            </button>
            <button
            onClick={()=> setFilter("monthly")}
            className={filter === "monthly" ? "active" : ""}>
                Mensal
            </button>
        </div>
    )
}