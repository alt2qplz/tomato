**Таймер для отслеживания времени по технике помидора**



http://tomato.savelichev.ru/



Основной стек: **React + Redux**

Сборщик: **Create-React-App**

Дизайн: **Ant Design**



**Общее описание:**

Данный таймер предоставляет базовый набор функций для работы “по технике помидора”. Перед стартом таймера можно настроить длительность **рабочей сессии** и **перерыва**, либо оставить их значения по умолчанию (15 минут и 5 минут соответственно). После нажатия на кнопку старт - таймер начнет работать с указанными настройками, при этом сами настройки на время работы станут недоступны. Во время работы таймера, можно наблюдать цифровое и графическое представление оставшегося времени, а также текстовое и цветовое обозначение текущего интервала (“Работа” или “Отдых”). После того, как **“рабочий интервал”** подойдет к концу, таймер переключается в режим отсчета времени **“перерыва”**, а после окончания перерыва, уведомляет о завершении цикла **"Работа - Отдых"**. Непосредственно во время отсчета любого из интервалов доступно две функции: **"Пауза"** - останавливает отсчет в момент нажатия и продолжает его с остановленного места при повторном нажатии, **"Сброс"** - полностью сбрасывает текущий цикл отсчета (настройки интервалов при этом сохраняются).



**Описание технической реализации:**

Моей первой мыслью было создать ряд переменных в **state**, которые представляли бы собой полное состояние приложения, **включая переменную**, которая указывает на **количество прошедших (или оставшихся) секунд**. Но я отказался от этой идеи, так как понял, что придется постоянно "диспатчить тики" таймера, что довольно противоестественно. Вместо этого я вынес данную переменную в **локальный state компонента**, и работал с ней с помощью хука **useEffect**, логика которого, в свою очередь, была неразрывно связана с **состоянием приложения из общего state**.

В итоге я получил компонент, который вместил в себя **функционал таймера** - последовательное уменьшение оставшихся секунд **(переменная seconds)** с помощью **setInterval**. Все **остальные переменные**, необходимые для отслеживания состояние приложения **хранятся в общем state** и меняют свои значения в соответствии с **действиями пользователя** и **состоянием вышеописанного таймера**.

Не могу не упомянуть, что я экспериментировал с хранением в state таких данных как **"время последнего старта"**, **"время последней остановки"**, **"прошедшее время в текущем интервале"**. В итоговой версии, они мне не пригодились, так как я отказался от идеи "диспатчить тики", но можно было бы использовать эти переменные, например для **синхронизации таймеров** в разных местах. При нажатии на кнопку **"Пауза"** на сервер **отправляются данные**, которые впоследствии могут использоваться для **продолжения отсчета в другом месте**. Также есть вариант **синхронизироваться с сервером** не на каждом тики, а допустим **раз в минуту**, думаю для данного приложения вполне допустима такой уровень точности.



Возможные доработки:

1. Отсчет **"помидоров"** на основе количества выполненных циклов **"Работа - Отдых"**
2. Возможность запустить спринт из нескольких циклов **"Работа - Отдых"**
3. Список дел, с возможностью оценки задачи в **"помидорах"**