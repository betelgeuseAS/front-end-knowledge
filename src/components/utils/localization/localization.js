import LocalizedStrings from 'react-localization';

let localization = new LocalizedStrings({
  en:{
    // Language
    language: "English",
    // Date
    date: {
      months_long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      months_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      weekdays_long: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdays_short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdays_min: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      moment: {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          l: "M/D/YYYY",
          LL: "MMMM Do YYYY",
          ll: "MMM D YYYY",
          LLL: "MMMM Do YYYY LT",
          lll: "MMM D YYYY LT",
          LLLL: "dddd, MMMM Do YYYY LT",
          llll: "ddd, MMM D YYYY LT"
        },
        calendar : {
          lastDay : '[Yesterday at] LT',
          sameDay : '[Today at] LT',
          nextDay : '[Tomorrow at] LT',
          lastWeek : '[last] dddd [at] LT',
          nextWeek : 'dddd [at] LT',
          sameElse : 'L'
        },
        relativeTime : {
          future: "in %s",
          past:   "%s ago",
          s  : 'a few seconds',
          ss : '%d seconds',
          m:  "a minute",
          mm: "%d minutes",
          h:  "an hour",
          hh: "%d hours",
          d:  "a day",
          dd: "%d days",
          M:  "a month",
          MM: "%d months",
          y:  "a year",
          yy: "%d years"
        },
        am: 'AM',
        pm: 'PM'
      }
    },
    you_have_chosen: 'You have chosen',
    choose_date: 'Please choose date',
    // Alerts
    success: "Success",
    warning: "Warning",
    error: "Error",
    // Buttons
    create: "Create",
    delete: "Delete",
    update: "Update",
    save: "Save",
    loading: "Loading",
    title: 'Title',
    date_creation: "Date of creation",
    created: "Created",
    last_edit: "Last edit",
    back: "Back"
  },
  uk: {
    // Language
    language: "Українська",
    // Date
    date: {
      months_long: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      months_short: ['Cіч', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'],
      weekdays_long: ['Неділя','Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'],
      weekdays_short: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'П`ят', 'Суб'],
      weekdays_min: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      moment: {
        longDateFormat: {
          LT: "г:хх A",
          LTS: "г:хх:сс A",
          L: "ММ/ДД/РРРР",
          l: "М/Д/РРРР",
          LL: "ММММ Do РРРР",
          ll: "МММ D РРРР",
          LLL: "ММММ Do РРРР LT",
          lll: "МММ D РРРР LT",
          LLLL: "дддд, ММММ Do РРРР LT",
          llll: "ддд, МММ D РРРР LT"
        },
        calendar : {
          lastDay : '[Вчора о] LT',
          sameDay : '[Сьогодні о] LT',
          nextDay : '[Завтра о] LT',
          lastWeek : '[останнім] dddd [у] LT',
          nextWeek : 'dddd [у] LT',
          sameElse : 'L'
        },
        relativeTime : {
          future: "в %s",
          past:   "%s тому",
          s  : 'кілька секунд',
          ss : '%d секунд',
          m:  "хвилина",
          mm: "%d хвилин",
          h:  "година",
          hh: "%d годин",
          d:  "день",
          dd: "%d днів",
          M:  "місяць",
          MM: "%d місяців",
          y:  "рік",
          yy: "%d років"
        },
        am: '',
        pm: ''
      }
    },
    you_have_chosen: 'Ви обрали',
    choose_date: 'Будь ласка, оберіть дату',
    // Alerts:
    success: "Успіх",
    warning: "Попередження",
    error: "Помилка",
    // Buttons
    create: "Створити",
    delete: "Видалити",
    update: "Оновити",
    save: "Зберегти",
    loading: "Завантаження",
    title: 'Заголовок',
    date_creation: "Дата створення",
    created: "Створено",
    last_edit: "Останнє редагування",
    back: "Назад"
  },
  ru: {
    // Language
    language: "Русский",
    // Date
    date: {
      months_long: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      months_short: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      weekdays_long: ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      weekdays_short: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
      weekdays_min: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      moment: {
        longDateFormat: {
          LT: "ч:мм A",
          LTS: "ч:мм:сс A",
          L: "ММ/ДД/ГГГГ",
          l: "М/Д/ГГГГ",
          LL: "ММММ Do ГГГГ",
          ll: "МММ D ГГГГ",
          LLL: "ММММ Do ГГГГ LT",
          lll: "МММ D ГГГГ LT",
          LLLL: "дддд, ММММ Do ГГГГ LT",
          llll: "ддд, МММ D ГГГГ LT"
        },
        calendar : {
          lastDay : '[Вчера в] LT',
          sameDay : '[Сегодня в] LT',
          nextDay : '[Завтра в] LT',
          lastWeek : '[последний] dddd [в] LT',
          nextWeek : 'dddd [в] LT',
          sameElse : 'L'
        },
        relativeTime : {
          future: "в %s",
          past:   "%s тому назад",
          s  : 'несколько секунд',
          ss : '%d секунд',
          m:  "минута",
          mm: "%d минут",
          h:  "an час",
          hh: "%d часов",
          d:  "день",
          dd: "%d дней",
          M:  "месяц",
          MM: "%d месяцы",
          y:  "год",
          yy: "%d лет"
        },
        am: '',
        pm: ''
      }
    },
    you_have_chosen: 'Вы выбрали',
    choose_date: 'Пожалуйста, выберите дату',
    // Alerts
    success: "Успех",
    warning: "Предупреждение",
    error: "Ошибка",
    // Buttons
    create: "Создать",
    delete: "Удалить",
    update: "Обновить",
    save: "Сохранить",
    loading: "Загрузка",
    title: "Заглавие",
    date_creation: "Дата создания",
    created: "Создано",
    last_edit: "Последнее редактирование",
    back: "Назад"
  }
});

export default localization;