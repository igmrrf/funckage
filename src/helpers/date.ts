export const getCronValueFromDays = (days: string[]) => {
  let lenth = days.length;
  let value = '';
  while (lenth) {
    if (value) {
      value += ',';
    }
    switch (days[lenth - 1]) {
      case 'Mon':
        days[lenth - 1] = '1';
        break;
      case 'Tue':
        days[lenth - 1] = '2';
        break;
      case 'Wed':
        days[lenth - 1] = '3';
        break;
      case 'Thu':
        days[lenth - 1] = '4';
        break;
      case 'Fri':
        days[lenth - 1] = '5';
        break;
      case 'Sat':
        days[lenth - 1] = '6';
        break;
      case 'Sun':
        days[lenth - 1] = '0';
        break;
      default:
        days[lenth - 1] = '';
        break;
    }
    value += days[lenth - 1];
    lenth -= 1;
  }

  return value;
};
