import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function formatDateToString(date: Date, formatType: 'HH:mm' | 'dd/MM/yyyy HH:mm' | 'dd/MM/yyyy - HH:mm:ss' | 'dd/MM - HH:mm' | 'dd/MM/yyyy' | 'dd/MM' | 'MMM' | 'dd MMM yy' | 'yyyy'): string{
  switch(formatType){
    case 'HH:mm':
      return  format(new Date(date), formatType, {locale: ptBR});
    case 'dd/MM/yyyy HH:mm':
      return format(new Date(date), formatType, {locale: ptBR});
    case 'dd/MM/yyyy - HH:mm:ss':
      return format(date, formatType, {locale: ptBR});
    case 'dd/MM/yyyy':
      return format(date, formatType, {locale: ptBR});
    case 'dd/MM':
      return format(new Date(date), formatType, {locale: ptBR});
    case 'dd/MM - HH:mm':
      return format(new Date(date), formatType, {locale: ptBR});
    case 'MMM':
      return format(new Date(date), formatType, {locale: ptBR});
    case 'dd MMM yy': 
    return format(new Date(date), formatType, {locale: ptBR});
    case 'yyyy': 
    return format(new Date(date), formatType, {locale: ptBR});
    default:
      return format(new Date(), formatType, {locale: ptBR});
  }
}

export {formatDateToString}