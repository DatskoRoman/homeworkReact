import logo from './logo.svg';
import './App.css';
import User from "./components/usersInfo/user/User";
import Adress from "./components/usersInfo/userAdress/Adress";
import Geo from "./components/usersInfo/userGeo/Geo";
import Company from "./components/usersInfo/company/Company";

function App() {
  return (
      <div>
          <div className={'users'}>
              <User
                  id= '1'
                  name = 'Leanne Graham'
                  username = 'bret'
                  email = 'Sincere@april.biz'
                  phone = '1-770-736-8031 x56442'
                  website = 'hildegard.org'
              />
              <Adress
                  street = 'Kulas Light'
                  suite = 'Apt. 556'
                  city = 'Gwenborough'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div className={'users'}>
              <User
                  id= '2'
                  name = 'Ervin Howell'
                  username = 'Antonette'
                  email = 'Shanna@melissa.tv'
                  phone = '010-692-6593 x09125'
                  website = 'anastasia.net'
              />
              <Adress
                  street = 'Victor Plains'
                  suite = 'Suite 879'
                  city = 'Wisokyburgh'
                  zipcode = '90566-7771'
              />
              <Geo
                  lat = '43.9509'
                  lng = '-34.4618'
              />
              <Company
                  name = 'Deckow-Crist'
                  catchPhrase = 'Proactive didactic contingency'
                  bs = 'synergize scalable supply-chains'
              />
          </div>
          <div>
              <User
                  id= '3'
                  name = 'Clementine Bauch'
                  username = 'Samantha'
                  email = 'Nathan@yesenia.net'
                  phone = '1-770-736-8031 x56442'
                  website = 'hramiro.info'
              />
              <Adress
                  street = 'Kulas Light'
                  suite = 'Apt. 556'
                  city = 'Gwenborough'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '4'
                  name = 'Patricia Lebsack'
                  username = 'Karianne'
                  email = 'Julianne.OConner@kory.org'
                  phone = '493-170-9623 x156'
                  website = 'kale.biz'
              />
              <Adress
                  street = 'Hoeger Mall'
                  suite = 'Apt. 556'
                  city = 'Gwenborough'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '5'
                  name = 'Chelsey Dietrich'
                  username = 'Kamren'
                  email = 'Lucio_Hettinger@annie.ca'
                  phone = '(254)954-1289'
                  website = 'demarco.info'
              />
              <Adress
                  street = 'Skiles Walks'
                  suite = 'Suite 351'
                  city = 'Roscoeview'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase =
                      'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '6'
                  name = 'Mrs. Dennis Schulist'
                  username = 'Leopoldo_Corkery'
                  email = 'Karley_Dach@jasper.info'
                  phone = '1-477-935-8478 x6430'
                  website = 'ola.org'
              />
              <Adress
                  street = 'Norberto Crossing'
                  suite = 'Apt. 950'
                  city = 'South Christy'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '7'
                  name = 'Kurtis Weissnat'
                  username = 'Elwyn.Skiles'
                  email = 'Telly.Hoeger@billy.biz'
                  phone = '210.067.6132'
                  website = 'elvis.io'
              />
              <Adress
                  street = 'Rex Trail'
                  suite = 'Suite 280'
                  city = 'Howemouth'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '8'
                  name = 'Nicholas Runolfsdottir V'
                  username = 'Maxime_Nienow'
                  email = 'Sherwood@rosamond.me'
                  phone = '586.493.6943 x140'
                  website = 'jacynthe.com'
              />
              <Adress
                  street = 'Ellsworth Summit'
                  suite = 'Suite 729'
                  city = 'Aliyaview'
                  zipcode = '45169'
              />
              <Geo
                  lat = '-14.3990'
                  lng = '-120.7677'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '9'
                  name = 'Glenna Reichert'
                  username = 'Delphine'
                  email = 'Chaim_McDermott@dana.io'
                  phone = '493-170-9623 x156'
                  website = 'conrad.com'
              />
              <Adress
                  street = 'Dayna Park'
                  suite = 'Suite 449'
                  city = 'Bartholomebury'
                  zipcode = '92998-3874'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
          <div>
              <User
                  id= '10'
                  name = 'Clementina DuBuque'
                  username = 'Moriah.Stanton'
                  email = 'Rey.Padberg@karina.biz'
                  phone = '024-648-3804'
                  website = 'ambrose.net'
              />
              <Adress
                  street = 'Kattie Turnpike'
                  suite = 'Suite 198'
                  city = 'Lebsackbury'
                  zipcode = '31428-2261'
              />
              <Geo
                  lat = '-37.3159'
                  lng = '81.1496'
              />
              <Company
                  name = 'Romaguera-Crona'
                  catchPhrase = 'Multi-layered client-server neural-net'
                  bs = 'harness real-time e-markets'
              />
          </div>
      </div>
  );
}

export default App;

// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву
