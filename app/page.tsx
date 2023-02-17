import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Примеры</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Расскажи мне...</p>
            <p className="infoText">В чём отличие между котом и собакой?</p>
            <p className="infoText">Какого цвета солнце?</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Возможности</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Настройка модели поведения ChatGPT</p>
            <p className="infoText">Сообщения хранятся в Firebase Firestore</p>
            <p className="infoText">
              Hot Toast уведомления о процессе работы ChatGPT
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Ограничения</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              Иногда может генерировать некорректную информацию
            </p>
            <p className="infoText">
              Иногда может давать вредные инструкции или предвзятый контент
            </p>
            <p className="infoText">
              Ограниченное знание мира и событий после 2021 года
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
