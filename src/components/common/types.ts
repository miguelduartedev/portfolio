export type AreaTypes = "main" | "experience" | "aboutme";

export interface Area {
    area: AreaTypes;
    setArea: React.Dispatch<React.SetStateAction<AreaTypes>>;
}

