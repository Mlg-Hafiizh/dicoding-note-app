import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import { ThemeProvider } from '../contexts/ThemeContexts';
import { AuthedUserContext } from "../contexts/AuthedUserContext";

// class NoteApp extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       authedUser: null,
//       initializing: false,
//       theme: localStorage.getItem('theme') || 'light',
//       toggleTheme: () => {
//         this.setState((prevState) => {
//           const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
//           localStorage.setItem('theme', newTheme);
//           return {
//             theme: newTheme
//           };
//         });
//       }
//     };

//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//     this.onLogout = this.onLogout.bind(this);
//   }

//   async componentDidMount() {
//     const { data } = await getUserLogged();
//     this.setState(() => {
//       return {
//         authedUser: data,
//       };
//     });
//     document.documentElement.setAttribute('data-theme', this.state.theme);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.theme !== this.state.theme) {
//       document.documentElement.setAttribute('data-theme', this.state.theme);
//     }
//   }
  
//   async onLoginSuccess({ accessToken }) {
//     putAccessToken(accessToken);
//     const { data } = await getUserLogged();
//     this.setState(() => {
//       return {
//         authedUser: data,
//       };
//     });
//   }

//   onLogout() {
//     this.setState(() => {
//       return {
//         authedUser: null
//       }
//     });
//     putAccessToken('');
//   }
  
//   render(){
//     if (this.state.initializing) {
//       return null;
//     }

//     if (this.state.authedUser === null) {
//       return (
//         <div className="note-app">
//           <header className='note-app__header'>
//             <h1>Aplikasi Catatan</h1>  
//           </header>
//           <main>
//           <Routes>
//             <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
//             <Route path="/register" element={<RegisterPage />}  />
//           </Routes>
//           </main>
//         </div>
//       )
//     }
    
//     return (
//       <ThemeProvider value={this.state}>
//         <div className="note-app">
//           <header className='note-app__header'>
//             <h1>Aplikasi Catatan</h1>
//             <Navigation logout={this.onLogout} name={this.state.authedUser.name} theme={this.state.theme} toggleTheme={this.state.toggleTheme}/>
//           </header>
//           <main>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/add" element={<AddPage />} />
//               <Route path="/archive" element={<ArchivePage />} />
//               <Route path="/detail/:id" element={<DetailPage />} />
//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

const NotesApp = () => {
  const { authedUser, setAuthedUser } = useContext(AuthedUserContext);
  const { clearAuthedUser } = useContext(AuthedUserContext);
  const theme = localStorage.getItem('theme') || 'light';
  const toggleTheme = () => {
            this.setState((prevState) => {
              const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
              localStorage.setItem('theme', newTheme);
              return {
                theme: newTheme
              };
            });
          };

  useEffect(() => {
    const authUser = async () => {
      const { data } = await getUserLogged()
      setAuthedUser(data)
    }

    authUser()
  }, [])

  if (!authedUser) {
    return (
      <>
       <div className="note-app">
          <header className='note-app__header'>
            <h1>Aplikasi Catatan</h1>  
          </header>
          <main>
          <Routes>
            <Route path="/*" element={<LoginPage  />} />
            <Route path="/register" element={<RegisterPage />}  />
          </Routes>
          </main>
        </div>
      </>
    )
  }

  return (
    <ThemeProvider value={theme}>
      <div className="note-app">
        <header className='note-app__header'>
          <h1>Aplikasi Catatan</h1>
          <Navigation logout={clearAuthedUser} name={authedUser.name} theme={theme} toggleTheme={toggleTheme}/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default NotesApp;