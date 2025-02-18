import { Link } from "react-router-dom";
function Article() {
 return(
  <>
    <div className="container">
    <ul className="header__ul">
          <li className="header__li">
            <a className="header__a" href="/">
              Главное
            </a>
          </li>
          <li>
            <Link className="header__a" to="/List">
              Интересное
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/Contact">
              Экономика
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/Article">
              Политика
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Общество
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Технологии
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Спорт
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Культура
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Происшествия
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Наука
            </Link>
          </li>
        </ul>
        <div className="asosiy-ar">
         <div className="article-container">
          <div className="artic-img">
            <img src="../public\image-list-4.svg" alt="" />
            <h5 className="artic-title">FBM.ru 22:23</h5>
          </div>
           <h4 className="artic-titile-ilon">Илон Маск принял участие во Всемирной сетевой конференции в Китае</h4>
           <img className="arit-img" src="../public\Rectangle-article-91.svg" alt="" width={795}  height={303}/>
           <p className="artic-text">Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов) уже второй раз за полторы недели обратился к китайским правящим кругам и гражданам. В видеоролике он уверил их в своей готовности инвестировать средства в развитие и расширять бизнес на территории этой страны. Особое внимание будет уделяться небезопасности обрабатываемых данных. </p>
           <p className="artic-text">Они будут храниться только в самом Китае и поэтому будут доступны правительству Поднебесной в любой момент.</p>
           <p className="artic-text">Новые заявления Илон Маск сделал во время видеообращения к аудитории мероприятия World Internet Conference, которое прошло в конце недели в Поднебесной. Компанию ему составили руководители Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm (Кристиано Амон), а интересы бизнеса Китайской Народной Республики представляли руководители Alibaba и Xiaomi. </p>
           <p className="artic-text">Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР), который привёл слова Си Цзиньпина (Xi Jinping) о стремлении Поднебесной работать со всеми державами над созданием прозрачной цифровой экономики.</p>
           <p className="artic-text">В ближайшее время Tesla собирается не только сделать шире объёмы производства автомобилей на электрической тяге в шанхайском филиале, но и разработать силами местной студии недорогую модель электрического автомобиля (стоимостью менее 25 000 долларов).</p>
           <p className="artic-text"> Уже в настоящий момент собранные в Китайской Народной Республике электрокары Tesla Model Y и Model 3 поставляются на экспорт в Европу.</p>
          <hr className="artic-hr"/>
          <h3 className="artic-po">По вашим интересам</h3>
          <div className="artic-btn-container">
           <div className="artic-title-stil">
            <h4 className="artic-ctil">Стали известны ёмкости аккумуляторов всех моделей iPhone 13</h4>
            <p className="artic-bo">Во время презентации iPhone 13 Apple придала большое значения...</p>
            <div className="artic-mhg">
              <img src="../public\image-artic4.svg" alt="" />
              <h3 className="artic-digg">Digger.ru 14:25</h3>
            </div>
           </div>
          </div>
         </div>
          
          <div className="listl__right">
            <h5 className="list-right-title">Главное</h5>
            <h5 className="list-right-title">В Фергане создадут узбекско-пакистанский университет</h5>
            <p className="list-right-title1">Sputnik Узбекистан 14:09</p>
            <h5 className="list-right-title">Узбекистан утвердил соглашение о содействии занятости в странах СНГ</h5>
            <p className="list-right-title1">ИА Красная Весна 10:19</p>
            <h5 className="list-right-title">В Узбекистане увеличиваются очереди за автомобилями UzAuto</h5>
            <p className="list-right-title1">Северная газета (Армянск) 13:50</p>
            <h5 className="list-right-title">Минтуризма опровергло приостановку выплат за шаги</h5>
            <p className="list-right-title1">Sputnik Узбекистан 14:32</p>
            <img src="../public\image-logo-5.svg" alt="" />
            
          </div>
        </div>
    </div>
    </>
 )
}

export default Article;
