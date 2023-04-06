const {
  getAllRover,
  getRightDr,
  getRightEngineer,
  getRightRocket,
} = require('../src/functions');

describe('Экспедиция на Марс', () => {
  describe('Отбор кандидатов', () => {
    let crew;
    beforeEach(() => {
      crew = [
        'Роберт Стивенсон, м, Капитан, 12',
        'Кэтерин Лоу, ж, Врач, 9',
        'Уильям Блейк, м, Бортмеханик, 11',
        'Стив Джонсон, м, Капитан, 23',
        'Клара Томпсон, ж, Врач, 10',
        'Том Браун, м, Врач, 14',
        'Джуди Лестер, ж, Бортмеханик, 16',
      ];
    });
    it('позволяет выбрать самого опытного врача', () => {
      const bestDr = getRightDr();
      expect(bestDr).toBe(crew[5]);
    });
    it('позволяет выбрать самого опытного бортмеханика среди женщин', () => {
      const bestEngineer = getRightEngineer();
      expect(bestEngineer).toEqual(crew[6]);
    });
      });
  describe('Отбор оборудования', () => {
    let equipment;
    beforeEach(() => {
      equipment = [
        'Исследователь-2, марсоход, 3',
        'Рейнджер‑4, луноход, 5',
        'Покоритель-3, луноход, 7',
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8',
      ];
    });
    it('Позволяет отобрать все луноходы', () => {
      const allRover = getAllRover();
      expect(allRover).toEqual([equipment[1], equipment[2]]);
    });
      });
  describe('Выбор ракеты', () => {
    let rockets;
    beforeEach(() => {
      rockets = [
        'Атлантис, орбитальная, 30',
        'Колумбия, межзвездная, 1209',
        'SpaceX, межзвездная, 209456',
      ];
    });
    it('позволяет выбрать все межзвездные ракеты', () => {
      const rocket = getRightRocket();
      expect(rocket).toEqual([rockets[1], rockets[2]]); // под ракетой подразумеваается строка с полным описанием ракеты (например "Колумбия, межзвездная, 1209"), разбитая на массив вида ['Колумбия', 'межзвездная', '1209']
    });
  });
});
