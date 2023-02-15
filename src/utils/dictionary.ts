export function dictionary(item: string): string {
  switch (item.toLowerCase()){
    case 'inoperation':
      return 'Em Operação';
    case 'inalert':
        return 'Em Alerta';
    case 'indowntime':
        return 'Em Parada';
    case 'unplannedstop':
        return 'Parada inesperada';
    case 'plannedstop':
        return 'Parada planejada';
    case 'low':
        return 'Baixa';
    case 'middle':
        return 'Média';
    case 'high':
        return 'Alta';
    case 'in progress':
        return 'Em progresso';
    case 'completed':
        return 'Finalizado';
    default: 
    return item;
    }
}