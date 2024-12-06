import { DamStatus } from "./dam-status.type"
import { DamType } from "./dam.type"
import { Forecast } from "./forecast.type"
import { Structure } from "./structure.type"
import { WaterLevel } from "./water-level.type"

export type Visit = {
    id_visita: number,
    id_barragem: DamType,
    nivel_agua: WaterLevel,
    estrutura: Structure,
    previsao_climatica: Forecast,
    data_visita: string,
    status_barragem: DamStatus
}