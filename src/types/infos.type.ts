import { DamStatus } from './dam-status.type';
import { DamType } from './dam.type';
import { Forecast } from './forecast.type';
import { Structure } from './structure.type';
import { WaterLevel } from './water-level.type';

export type Infos = {
  id_visita: number;
  id_barragem: DamType;
  cidade: string;
  estado: string;
  nome_barragens: string;
  nivel_agua: WaterLevel;
  estrutura: Structure;
  previsao_climatica: Forecast;
  data_visita: string;
  status_barragem: DamStatus;
};
