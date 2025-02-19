import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
    <div className="container">
    <ul className="header__ul">
          <li className="header__li">
            <Link className="header__a" href="/">
              Главное
            </Link>
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
          <h3 className="contac-hap">Напишите нам</h3>
        <div className="asosiy-div">
          <div className="div-asoa">
            <div className="contact-plesec">
          <input className="contact-input" type="text" placeholder="Имя" />
           <input className="contact-inputf" type="text" placeholder="Номер телефона" />
          </div>
         
         <input className="contact-tekst" type="text" placeholder="Электронная почта" />
          <input className="contast-pl" type="text" placeholder="Текст" />
          <button className="contact-btn">Отправить</button>
          </div>
          <div className="contact-elek">
            <h4 className="contact-nomer">Электронная почта</h4>
            <p className="contact-info">info@namanganliklar24.uz</p>
            <hr  className="contact-hr"/>
            <h4 className="contact-nomer">Номер телефона</h4>
            <p className="contact-info">+998 88 522-54-76</p>
            <hr className="contact-hr" />
            <h4 className="contact-nomer">Адрес</h4>
            <p className="contact-info">Ташкент, площадь Мустакиллик, 6 </p>
          </div>
        
        </div>
    </div>
    </>
  )
}

export default Contact;
