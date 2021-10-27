const store = {
  'mainSection': {
    'firstHeader': 'Калькуляция досрочного погашения ипотеки',
    'secondHeader': 'Рассчет налогового вычета',
    'calculationText': 'Налоговый вычет',
    'popUpIsOpen': false,
    'popUp': {
      'header': 'Налоговый вычет',
      'calculationIsOpen': false,
      'userAttention': false,
      'about': 'Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер\u00A0налогового вычета составляет не более 13% от своего официального годового дохода.',
      'salaryInfo': 'Ваша зарплата в месяц',
      'salaryPlaceholder': 'Введите данные',
      'calculate': 'Рассчитать',
      'discontInfo': 'Что уменьшаем?',
      'discontPayment': 'Платёж',
      'discontTime': 'Срок',
      'submit': 'Добавить',
      'close': 'Закрыть модальное окно',
      'salaryState': '',
      'totalEarlyRepayment': 'Итого можете внести в качестве досрочных:',
      'discontState': {
        'payment': true,
        'time': false,
      },
      'minDebounce': 400,
      'deduction': {
        'formula': (salary) => (Number(salary) * 12) * .13,
        'maxValue': 260000,
        'minValue': 13617,
        'fractional': 2,
      },
      'vocabulary': {
        '1': 'в 1-ый год',
        '2': 'во 2-ой год',
        '3': 'в 3-ий год',
        '4': 'в 4-ый год',
        '5': 'в 5-ый год',
        '6': 'в 6-ой год',
        '7': 'в 7-ой год',
        '8': 'в 8-ой год',
        '9': 'в 9-ый год',
        '10': 'в 10-ый год',
        '11': 'в 11-ый год',
        '12': 'в 12-ый год',
        '13': 'в 13-ый год',
      },
    }
  }
}

export { store }
